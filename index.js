// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


// ├── examples/           // Example svg file(s) created with the app
// ├── lib/                // Folder for classes or functions
//     ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
//     ├── shapes.test.js  // Jest tests for shapes
//     └── more...         // Additional files and tests
// ├── .gitignore          // Indicates which folders and files Git should ignore
// ├── index.js            // Runs the application using imports from lib/
// ├── package.json
// └── README.md           // App description, link to video, setup and usage instructions   

const express = require('express');
const path = require('path');
const files = require('fs')

// class Svg {
//     constructor() {
//         this.textElement = '';
//         this.shapeElement = '';
//     }
//     render() {
//         return `svg version = '1.1` xmlns =
//     }
//     setTextElement(text, color) {
//         this.textElement = `<text x='150' y='125' font-size='30' fill='${color}'>${this.textElement}
//     }
// }


const app = express()

const questions = [
{
    type: 'input',
    name: 'text',
    message: 'Enter three characters or less', 
    validate: (textChoice) =>
    textChoice.length <= 3 || 'Text must be 3 characters or less'
},

{
    type: 'input',
    name: 'text-color',
    message: 'Choose a text color or hexadecimal number:' 
},

{
    type: 'input',
    name: 'shape-color',
    message: 'Enter three characters or less' 
}

{
    type: 'list',
    name: 'shape',
    message: 'Chose a shape',
    choices: ('Circle', 'Sqaure', 'Triangle')
}
]

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');