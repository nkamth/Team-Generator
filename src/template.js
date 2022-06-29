function createTeam(team) {
    console.log(team);
    
    function createManager(manager) {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
       ${manager.name} <br/>
       <i class="fas fa-mug-hot"></i>Manager</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`;
    }

    function createEngineer(engineer) {

    }

    function createIntern(intern) {

    }

    // check for employee type
    for(let i=0 ; i<team.length;i++){
        if(team[i].getRole() === 'Manager'){
            createManager(team[i])
        }
        if(team[i].getRole() === 'Engineer'){
            createEngineer(team[i])
        }
        if(team[i].getRole() === 'Intern'){
            createIntern(team[i])
        }
        
    }
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
        ${createTeam(team)}
    </body>
    </html>
    `
}