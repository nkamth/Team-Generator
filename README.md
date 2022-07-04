# Team Profile Generator

[![License: MIT](https://img.shields.io/github/license/tiffany-brand/professional-README-generator?style=plastic)](./LICENSE)

## Visual Presentation :

The below link is a demonstration of how this 'deployed' application works. This generates an HTML that displays a nicely formatted Team based on user input.

View a complete Video demonstrarion of the application: [Team Profile Generator](https://drive.google.com/file/d/10CHANrmebQF8QljSnBmG6kWde2URjSAe/view)

## Table of Contents

- [Description](#description)
- [User Story](#userStory)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Questions](#questions)

## Description:

A software engineering team-generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. Then an HTML page is created that can be easily viewed in a web browser. Tests were written for each part of the code using Jest to ensure that it passes all of them.

## User Story:

`As a manager I want to generate a webpage that displays my team's basic info so that I have quick access to emails and GitHub profiles.`

## Acceptance Criteria:

GIVEN a command-line application that accepts user input

- WHEN I am prompted for my team members and their information
  - THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
  - THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
  - THEN that GitHub profile opens in a new tab
- WHEN I start the application
  - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
  - THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
  - THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
  - THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
  - THEN I exit the application, and the HTML is generated

## Technologies:

<p>
 <img src="https://img.shields.io/badge/-HTML-red" />
 <img src="https://img.shields.io/badge/-CSS-lightgrey" />
<img src="https://img.shields.io/badge/-JavaScript-purple" />
<img src="https://img.shields.io/badge/-Node-green" />
<img src="https://img.shields.io/badge/-Inquirer-grey" />
 <img src="https://img.shields.io/badge/-Jest-red" />
 </p>

## Usage:

Inquirer is easiest to use when installed with npm: `npm install inquirer`.
Then you can load the module into your code with a require call:
`const inquirer = require(‘inquirer’);`

Open terminal

1. Type 'node index.js'
2. Answer the prompts that follow
3. Enter manager information
4. You will be redirected to a menu, where you can choose to add an engineer, add an intern, or done.
5. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose done.
6. Once you end the application, your software team will be generated in an HTML file

## Installation:

To install this application, clone the code into your terminal for the respective repository.
Then, install npm by entering the command `npm init` into the terminal.
Run 'npm install' to install dependencies
Inquirer must then be installed by entering `npm install inquirer`.
Finally, the program can then be run by entering `node index.js` into the command line, and answering each question appropriately.
Open the 'index.html' file from the dist folder in a web browser to view.

### Output Screenshot:

<img width="1194" alt="Screen Shot 2022-07-03 at 8 15 48 PM" src="https://user-images.githubusercontent.com/97250880/177062463-59db0866-a822-4fea-ae0b-3223bcad709b.png">

<img width="1183" alt="Screen Shot 2022-07-03 at 8 16 23 PM" src="https://user-images.githubusercontent.com/97250880/177062472-259949f8-7969-4643-ae71-703c1e8d5532.png">

<img width="1054" alt="Screen Shot 2022-07-03 at 8 17 14 PM" src="https://user-images.githubusercontent.com/97250880/177062477-aaf55232-300c-4590-8b4d-892ad68451af.png">

## License:

This repository is licensed under the [MIT license](./LICENSE).

## Questions:

Please contact me at

- GitHub : [nkamth](https://github.com/nkamth)
- Email : [namitha.289@gmail.com](mailto:namitha.289@gmail.com)
