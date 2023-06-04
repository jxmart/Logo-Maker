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

const inquirer = require('inquirer');
const files = require('fs')
const { Circle, Square, Triangle } = require('./lib/shapes')
   

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
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Chose a shape',
        choices: ('Circle', 'Square', 'Triangle')
    }
]

function writeFile(fileName, data) {
    files.writeFile(fileName, data, (err) => {
        if(err) 
        console.log(err)
    })
}
async function init() {
    let svgString;
    const answers = await inquirer.prompt(questions)
    const shapeColor = answers.shapeColor
    const textColor = answers.textColor
    let userText

    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text
    } else {
        console.log('Invalid! Input must be three characters or less')
        return
    }

    let userShape
    if (answers.shape === 'circle') {
        userShape = new Circle()
    } else if (answers.shape === 'square') {
        userShape = new Square()
    } else if (answers.shape === 'triangle') {
        userShape = new Triangle()
    } else (
        console.log('Invalid, choose a shape')
    )

    userShape.setColor(shapeColor)
}

init()