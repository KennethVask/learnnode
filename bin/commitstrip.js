import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import fs from 'fs';
import md5 from 'md5';

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Fix Windows path for cache folder
const __dirname = fileURLToPath(new URL('.', import.meta.url));
let cacheDir = __dirname + '/../cache';
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

const BASE_URL = 'https://toonhole.com';
let url = BASE_URL; // homepage shows latest comic

for (let i = 0; i < 10; i++) {
    let body;
    let cacheFile = cacheDir + `/${md5(url)}.html`;

    if (fs.existsSync(cacheFile)) {
        body = fs.readFileSync(cacheFile, 'utf-8');
    } else {
        await sleep(1000);
        let res = await fetch(url);
        body = await res.text();
        fs.writeFileSync(cacheFile, body);
    }

    const $ = cheerio.load(body);

    // Toonhole comic image
    let img = $('.post img').first();

    if (!img.length) {
        console.log('❌ No image found at:', url);
        break;
    }

    let src = img.attr('src');
    let alt = img.attr('alt') || '';

    if (src.startsWith('/')) src = BASE_URL + src;

    console.log('IMAGE:', src);
    console.log('ALT:', alt);

    // "Previous" comic link
    let prev = $('a[rel="prev"]').first();

    if (!prev.length) {
        console.log('Reached first comic or no prev link.');
        break;
    }

    url = prev.attr('href');
}
