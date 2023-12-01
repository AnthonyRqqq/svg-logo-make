function generateShape(shapeInput) {
    let shape = ''
    switch (shapeInput) {
        case 'Rectangle':
            shape = new Rectangle();
            break;
        
        case 'Circle':
            shape = new Circle();
            break;

        case 'Square':
            shape = new Square();
            break;
    }

    
    return shape;
}

