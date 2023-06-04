class Shape {
    constructor() {
        this.color = ''
    }

    setColor(colorKey) {
        this.color = (colorKey)
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="100" fill="#${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="80" y="80" width="80" height="80" fill="#${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="#${this.color}"/>`
    }
}

module.exports = { Circle, Square, Triangle }