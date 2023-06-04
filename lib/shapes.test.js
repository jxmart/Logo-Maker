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
        Square.setColor('blue');
        expect(shape.render()).toEqual(`<rect x="80" y="80" width="80" height="80" fill="#${this.color}"/>`);
    })
});

describe('Triangle', () => {
    test('test for Triangle with a blue background', () => {
        const shape = new Triangle()
        Triangle.setColor('orange');
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="#${this.color}"/>`);
    })
});