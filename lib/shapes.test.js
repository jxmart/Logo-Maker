const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    test('test for Circle with a green background', () => {
        const shape = new Circle()
        Circle.setColor('green');
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="#${this.color}"/>`);
    });
});

describe('Square', () => {
    test('test for Square with a orange background', () => {
        const shape = new Square()
        Square.setColor('orange');
        expect(shape.render()).toEqual(`<rect x="0" y="0" width="100" height="100" fill="#${this.color}"/>`);
    })
});