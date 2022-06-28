function createTeam(team) {

    function createManager(manager) {
        return `<div>
            <h1>${manager.getName()}</h1>
        </div>`
    }

    function createEngineer(engineer) {

    }

    function createIntern(intern) {

    }

    // check for employee type
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