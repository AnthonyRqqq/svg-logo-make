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

    // Creates the new logo.svg file in examples directory
    await writeToFile(constructShape);
}

// Starts program
init();

// Generates new logo.svg file in examples folder with finished directory
const writeToFile = (constructShape) => fs.writeFile('./examples/logo.svg', constructShape, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Generated logo.svg!')
    }
});