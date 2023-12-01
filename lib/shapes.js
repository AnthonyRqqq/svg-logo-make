

function generateShape(shapeInput) {
    let shape = ''
    switch (shapeInput) {
        case 'square':
            shape = new Square();
            break;
        
        case 'circle':
            shape = new Circle();
            break;

        case 'triangle':
            shape = new Triangle();
            break;
    }

    
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

