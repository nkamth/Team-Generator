const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");

const template = require("./src/template");

const teamMembers = [];

inquirer
  .prompt([
    {
      // name
      type: "input",
      name: "name",
      message: "What is the name of the Team Manager ?",
      validate: (userInput) => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter the Name of the Team Manager :");
          return false;
        }
      },
    },
    {
      // id
      type: "input",
      name: "id",
      message: "Team Managers ID Number : ",
      validate: (userInput) => {
        if (userInput) {
          return true;
        } else {
          console.log("Please Enter Team Managers ID Number :");
          return false;
        }
      },
    },
    {
      //email
      type: "input",
      name: "email",
      message: "Team Managers Email ID : ",
      validate: (userInput) => {
        if (userInput) {
          return true;
        } else {
          console.log("Please Enter Team Managers Email ID :");
          return false;
        }
      },
    },
    {
      //officenumber
      type: "input",
      name: "officeNumber",
      message: "Team Managers Office Number : ",
      validate: (userInput) => {
        if (userInput) {
          return true;
        } else {
          console.log("Please Enter Team Managers Office Number :");
          return false;
        }
      },
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    console.log(manager);
    teamMembers.push(manager);
    mainQuestion();
  });

function mainQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do next?",
        name: "main",
        choices: ["Create Engineer", "Create Intern", "Done"],
      },
    ])
    .then((answer) => {
      if (answer.main === "Create Engineer") {
        addEngineer();
      } else if (answer.main === "Create Intern") {
        addIntern();
      } else {
        buildTeam();
      }
    });
}

function addEngineer() {
  console.log(`
    ***** Add a New Engineer *****
    `);
  inquirer
    .prompt([
      {
        // name
        type: "input",
        name: "name",
        message: "What is the name of the Engineer ?",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the Name of the Engineer :");
            return false;
          }
        },
      },
      {
        // id
        type: "input",
        name: "id",
        message: "Engineer ID Number : ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please Enter Engineer ID Number :");
            return false;
          }
        },
      },
      {
        //email
        type: "input",
        name: "email",
        message: "Engineer Email ID : ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please Enter Engineer Email ID :");
            return false;
          }
        },
      },
      {
        //github username
        type: "input",
        name: "username",
        message: "Engineer GitHub Username : ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please Enter Engineer Github Username :");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.username
      );
      console.log(engineer);
      teamMembers.push(engineer);
      mainQuestion();
    });
}

function addIntern() {
  console.log(`
    ***** Add a New Intern *****
    `);
  inquirer
    .prompt([
      {
        // name
        type: "input",
        name: "name",
        message: "What is the name of the Intern ?",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the Name of the Intern :");
            return false;
          }
        },
      },
      {
        // id
        type: "input",
        name: "id",
        message: "Intern ID Number : ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please Enter Intern ID Number :");
            return false;
          }
        },
      },
      {
        //email
        type: "input",
        name: "email",
        message: "Intern Email ID : ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please Enter Intern Email ID :");
            return false;
          }
        },
      },
      {
        //school
        type: "input",
        name: "school",
        message: "What School does/did the intern attend ? ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please Enter the school name :");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.log(intern);
      teamMembers.push(intern);
      mainQuestion();
    });
}

function buildTeam() {
  fs.writeFile("./dist/index.html", template(teamMembers), (err) => {
    if (err) throw err;
    console.log(`
    **** Team Built *****
    `);
  });
}
