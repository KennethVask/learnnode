function write(text) {
    process.stdout.write(text);
}

import chalk from 'chalk';

write(chalk.red.bgYellow.strikethrough('DANGER!!!!!'));
write(chalk.bgAnsi256(67)('COLOR'));
write(chalk.bgRgb(255,0,0)('COLOR'));
write('\n')

