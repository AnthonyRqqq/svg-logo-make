const generateLogo = require('./lib/generateLogo.js')

async function init() {
    const logo = await generateLogo.renderLogo();
    const logoShape = await generateLogo.getLogoShape(logo.shape);
}

init();