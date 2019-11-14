const fs = require('fs');
const inquirer = require('inquirer');
const api = require('./api');

//list of questions // array of JSON object
const questions = [
    { 
    type: 'input',
    name: 'github',
    message: 'enter github username',
    }

    // {
    // type: 'list',
    // name: 'color',
    // message: 'choose preferred color',
    // choices: ['red', 'blue', 'black', 'green'],
    // }
];

inquirer.prompt(questions)
.then(response => {
    api.getUserData(response.github).then(reply => {
        // console.log(reply);
        console.log('login', reply.data.login);
        console.log('id', reply.data.id);
        console.log('public_repos', reply.data.public_repos);
        console.log('followers', reply.data.followers);
        console.log('following', reply.data.following);
    })
})

