// Imports necessary modules
const generateLogo = require('./lib/generateLogo.js');
const shapes = require('./lib/shapes.js');
const fs = require('fs');

// Asynchronous function for running the program
async function init() {
    // Collects user input
    const logo = await generateLogo.renderLogo();
    // Utilizes user input to construct SVG shape
    const constructShape = await shapes.generateShape(logo);
    console.log(constructShape);
}

// Starts program
init();

// const writeToFile = (constructShape) => {
//     switch(constructShape) {
//         case 'Square':
//             fs.writeFile('new-SVG.svg')
//     }
// }