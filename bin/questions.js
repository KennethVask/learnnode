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