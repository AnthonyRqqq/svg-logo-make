
// Generates new shape based on user input
function generateShape(response) {
    let shape = ''
    let svgData = ''
    switch (response.shape) {
        case 'Square':
            shape = new Square(response.shapeColor, response.length, response.textColor);

            // Constructs SVG code for later use
            svgData =
                `<svg width="300" length="200" xmlns="http://www.w3.org/2000/svg">
                <style>
                    text {
                        font-size: 30px
                    }
                </style>
                <rect x="50" y="25" width="125" height="125" fill="${response.shapeColor}" />
                <text x="115" y="90" text-anchor="middle" alignment-baseline="middle" fill="${response.textColor}">${response.length}</text>
            </svg>`;
            break;

        case 'Circle':
            shape = new Circle(response.shapeColor, response.length, response.textColor);

            // Constructs SVG code for later use
            svgData =
                `<svg width="300" length="200" xmlns="http://www.w3.org/2000/svg">
                <style>
                    text {
                        font-size: 30px
                    }
                </style>
                <circle cx='100' cy='80' r="70" fill="${response.shapeColor}" />
                <text x="100" y="85" text-anchor="middle" alignment-baseline="middle"  fill="${response.textColor}">${response.length}</text>
            </svg>`;
            break;

        case 'Triangle':
            shape = new Triangle(response.shapeColor, response.length, response.textColor);

            // Constructs SVG code for later use
            svgData =
                `<svg width="300" length="200" xmlns="http://www.w3.org/2000/svg">
                <style>
                    text {
                        font-size: 30px
                    }
                </style>
                <polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}" />
                <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${response.textColor}">${response.length}</text>
            </svg>`;
            break;
    }

    // Returns data as an object for later use
    return svgData;
}

// Constructor function for rectangle
function Square(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
}

// Constructor function for circle
function Circle(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
}

// Constructor function for triangle
function Triangle(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
}

// Exports functions
module.exports = {
    generateShape,
    Square,
    Circle,
    Triangle,
}