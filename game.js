var basic = require("./basiccard.js");
var cloze = require("./clozedcard.js");
var inquirer = require('inquirer');

inquirer.prompt([{
    type: 'rawlist',
    name: 'choice',
    message: 'Choose one of the flashcard games',
    choices: [
        'Basic flashcard',
        'Cloze-deleted flashcard'
    ]
}]).then(function(answer) {
    if (answer.choice == 'Basic flashcard') {
        basic.basicCardQuestion();
    } else {
        cloze.clozeCardQuestion();
    }

});