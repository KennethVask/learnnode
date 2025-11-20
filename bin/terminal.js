function write(text) {
    process.stdout.write(text);
}


write('Hello Terminal\n');
write('Hello Terminal\t');
write('Hello Terminal\n');

// Text color (foreground color)
write('\x1B[30m');
write('Hello Terminal\n');
write('\x1B[31m');
write('Hello Terminal\n');
write('\x1B[32m');
write('Hello Terminal\n');
write('\x1B[33m');
write('Hello Terminal\n');
write('\x1B[35m');
write('Hello Terminal\n');
write('\x1B[36m');
write('Hello Terminal\n');
write('\x1B[37m');
write('Hello Terminal\n');

// background color
write('\x1B[40m');
write('Hello Terminal\n');
write('\x1B[41m');
write('Hello Terminal\n');
write('\x1B[42m');
write('Hello Terminal\n');
write('\x1B[43m');
write('Hello Terminal\n');
write('\x1B[45m');
write('Hello Terminal\n');
write('\x1B[46m');
write('Hello Terminal\n');
write('\x1B[47m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');

// dim/bright Text color (foreground color)
write('\x1B[90m');
write('Hello Terminal\n');
write('\x1B[91m');
write('Hello Terminal\n');
write('\x1B[92m');
write('Hello Terminal\n');
write('\x1B[93m');
write('Hello Terminal\n');
write('\x1B[95m');
write('Hello Terminal\n');
write('\x1B[96m');
write('Hello Terminal\n');
write('\x1B[97m');
write('Hello Terminal\n');

// dim/bright background color
write('\x1B[100m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');
write('\x1B[101m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');
write('\x1B[102m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');
write('\x1B[103m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');
write('\x1B[105m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');
write('\x1B[106m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');
write('\x1B[107m');
write('Hello Terminal');
write('\x1B[0m');
write('\n');

for (let i = 0; i<256; i++){
    write(`\x1B[48;2;${i};${i};${i}m`);
    write(' ');
}
write('\x1B[0m');