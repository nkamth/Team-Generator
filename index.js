const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')

const template = require('./src/template')

const teamMembers = []

inquirer.prompt([
    {
        // name
    },
    {
        // id
    },
    {
        //email
    },
    {
        //officenumber
    }
]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    console.log(manager);
    teamMembers.push(manager)
    mainQuestion()
})

function mainQuestion() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'main',
            choices: ['Create Engineer', 'Create Intern', 'Done']
        }
    ]).then(answer => {
        if (answer.main === 'Create Engineer') {
            addEngineer()
        } else if (answer.main === 'Create Intern') {
            addIntern()
        } else {
            buildTeam()
        }
    })
}

function addEngineer() {

}

function addIntern() {

}

function buildTeam() {
    fs.writeFile('./dist/index.html', template(teamMembers), err => {
        if (err) throw err;
        console.log('Team Built!');
    })
}