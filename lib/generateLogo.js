// Imports inquirer module
const inquirer = require('inquirer');

// Constructed with assistance from Xpert Learning Assistant
// Sets variable for color selections to be used on color prompts
const colorKeywords = [
    'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
    'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'
  ];
const hexColorRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

// Runs inquirer prompts to generate data for logo construction
function renderLogo() {
    return new Promise((resolve, reject) => {
    inquirer
        .prompt([
            // Gets logo characters, limits to 3 at most
            {
                type: 'input',
                message: 'Please enter up to three characters for your logo.',
                name: 'length',
                validate: function(input) {
                    if (input.length > 3) {
                        return 'Please enter no more than three characters.'
                    } else {
                        return true;
                    }
                }
            },

            // Gets logo shape
            {
                type: 'list',
                message: 'Choose a logo shape.',
                name: 'shape',
                choices: [
                    'Square',
                    'Circle',
                    'Triangle'
                ]
            },

            // Gets text color, checks for valid entry
            {
                type: 'input',
                message: 'Choose a color for your text (color keyword OR hexadecimal number).',
                name: 'textColor',
                validate: function(input) {
                    // Constructed with assistance from Xpert Learning Assistant
                    // Checks user input against potential color values
                    if (!colorKeywords.includes(input.toLowerCase()) && !hexColorRegex.test(input)) {
                        return 'Please enter a vaild color keyword or hexadecimal number.';
                    } else {
                        return true;
                    }
                }
            },

            // Gets shape color, checks for valid entry
            {
                type: 'input',
                message: 'Choose a color for your shape (color keyword OR hexadecimal number).',
                name: 'shapeColor',
                validate: function(input) {
                    // Constructed with assistance from Xpert Learning Assistant
                    // Checks user input against potential color values
                    if (!colorKeywords.includes(input.toLowerCase()) && !hexColorRegex.test(input)) {
                        return 'Please enter a vaild color keyword or hexadecimal number.';
                    } else {
                        return true;
                    }
                }
            }


        ])
        .then((response) => {
            console.log(response)
            resolve(response);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
});
}

// Exports renderLogo function
module.exports = {
    renderLogo,
}