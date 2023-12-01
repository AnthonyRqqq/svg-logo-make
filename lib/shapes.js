
// Generates new shape based on user input
function generateShape(response) {
    let shape = ''
    switch (response.shape) {
        case 'Square':
            shape = new Square(response.shapeColor, response.length, response.textColor);
            break;
        
        case 'Circle':
            shape = new Circle(response.shapeColor, response.length, response.textColor);
            break;

        case 'Triangle':
            shape = new Triangle(response.shapeColor, response.length, response.textColor);
            break;
    }

    console.log(shape)
    return shape;
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