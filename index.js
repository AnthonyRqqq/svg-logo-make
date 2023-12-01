const generateLogo = require('./lib/generateLogo.js')

async function init() {
    let logo = await generateLogo.renderLogo()
    console.log(logo)
}

init();