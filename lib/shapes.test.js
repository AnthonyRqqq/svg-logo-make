const shapes = require('./shapes.js');

// Creates testing suite for shapes
describe('Shapes', () => {
    // Runs test for circle
    describe('circle', () => {
        const userInput = {
            shape: 'Circle',
            shapeColor: 'blue',
            length: 'AAA',
            textColor: 'blue'
        }
        it('should set the shape to circle when chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<circle")
        })
        it('should set the shape color to blue when the color is chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<circle cx='100' cy='80' r=\"70\" fill=\"blue\" />")
        })
        it('should set the text color to blue when the color is chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<text x=\"100\" y=\"85\" text-anchor=\"middle\" alignment-baseline=\"middle\"  fill=\"blue\">")
        })
        it('should set the text content to the userInput.length', () => {
            expect(shapes.generateShape(userInput)).toContain("AAA")
        })
    })

    // Runs tests for square
    describe('square', () => {
        const userInput = {
            shape: 'Square',
            shapeColor: 'blue',
            length: 'AAA',
            textColor: 'blue'
        }
        it('should set the shape to square when chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<rect")
        })
        it('should set the shape color to blue when the color is chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<rect x=\"50\" y=\"25\" width=\"125\" height=\"125\" fill=\"blue\" />")
        })
        it('should set the text color to blue when the color is chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<text x=\"115\" y=\"90\" text-anchor=\"middle\" alignment-baseline=\"middle\" fill=\"blue\">")
        })
        it('should set the text content to the userInput.length', () => {
            expect(shapes.generateShape(userInput)).toContain("AAA")
        })
    })

    // Runs tests for triangle
    describe('triangle', () => {
        const userInput = {
            shape: 'Triangle',
            shapeColor: 'blue',
            length: 'AAA',
            textColor: 'blue'
        }
        it('should set the shape to triangle when chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<polygon points=\"150, 18 244, 182 56, 182\"")
        })
        it('should set the shape color to blue when the color is chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("fill=\"blue\"")
        })
        it('should set the text color to blue when the color is chosen', () => {
            expect(shapes.generateShape(userInput)).toContain("<text x=\"150\" y=\"100\" text-anchor=\"middle\" alignment-baseline=\"middle\" fill=\"blue\">")
        })
        it('should set the text content to the userInput.length', () => {
            expect(shapes.generateShape(userInput)).toContain("AAA")
        })
    })
})