// Imports necessary modules
const generateLogo = require('./lib/generateLogo.js')
const shapes = require('./lib/shapes.js')

async function init() {
    const logo = await generateLogo.renderLogo();
    const renderShape = await shapes.generateShape(logo);
    console.log(renderShape)
}

init();