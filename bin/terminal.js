function write(text) {
    process.stdout.write(text);
}

import chalk from 'chalk';

write(chalk.red.bgYellow.strikethrough('DANGER!!!!!'));
write(chalk.bgAnsi256(67)('COLOR'));
write(chalk.bgRgb(255,0,0)('COLOR'));

import inquirer from 'inquirer';

let anwsers = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
        {
        type: 'number',
        name: 'age',
        message: 'Waht is your age?',
    },
]);

console.log(`Hello ${anwsers.name}!!!!`);
console.log(`You are ${anwsers.age} years old!`);