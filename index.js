const inquirer = require("inquirer")

inquirer.prompt ([
    {
      type: 'list',
      name: 'reptile',
      message: 'Which is better?',
      choices: ['alligator', 'crocodile'],
    }])