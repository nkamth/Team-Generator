function createTeam(team) {
  console.log(">>>> team is inside create Team:");
  console.log(team);

  // Create an empty array to push html elements on to and loop through the team data
  const html = [];

  // Create functions for each type of employee that returns HTML data
  function createManager(manager) {
    console.log(">>>> Manager HTML data >>>>");

    let managerHtml = `<div class="card" style="width: 18rem;">
        <div class="card-header">
       ${manager.name} <br/>
       <i class="fas fa-mug-hot"></i>Manager</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`;
    html.push(managerHtml);
  }

  function createEngineer(engineer) {
    console.log(">>>> Engineer HTML data >>>>");

    let engineerHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
       ${engineer.name} <br/>
       <i class="fas fa-glasses"></i>Engineer</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">Github Username:<a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
    `;
    html.push(engineerHtml);
  }

  function createIntern(intern) {
    console.log(">>> Intern HTML Data");

    let internHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
       ${intern.name} <br/>
       <i class="fas fa-glasses"></i>Intern</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School:${intern.school}</li>
        </ul>
    </div>
    `;
    html.push(internHtml);
  }

  // check for employee type
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      createManager(team[i]);
      console.log(">>>>manager");
    }
    if (team[i].getRole() === "Engineer") {
      createEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      createIntern(team[i]);
    }
  }

  // join the HTML blocks
  return html.join("");
}

module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
    </head>
    <body>
        <header>
             <h1> My Team </h1>
        </header>
        <main> ${createTeam(team)} </main>
    </body>
    </html>
    `;
};
