// These are the variables
var inquirer = require("inquirer");
var fs = require("fs");
var basicGameArr = [];

//Constructor for basic flashcards
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

//Questions and Answers to push into the array variable

basicGameArr.push(new BasicCard("Who was the first President of the United States?", "George Washington"),
    new BasicCard("What is the firstname of the last President of the United States?", "Barack"),
    new BasicCard("Who was the best player of the NBA in 2016?", "James LeBron"));


var count = 0;

// Ask the questions as long as the count is less than the number of questions
var cardQuestion = function() {
	if (count < basicGameArr.length){
        //Display the questions one by one on the console
        inquirer.prompt([{
            name: "question",
            //		type: 'input',
            message: basicGameArr[count].front
        }]).then(function(answer) {
            var useranswer = answer.question;
            var backOfCard = basicGameArr[count].back;

            if ((useranswer === backOfCard) || (useranswer === backOfCard.toLowerCase()) || (useranswer === backOfCard.toUpperCase())) {
                console.log("Great! " + useranswer + " is correct!");
                count++;
                //Ask the follwing question
                cardQuestion();
            } else {
                console.log("Ooops! " + basicGameArr[count].back + " is the correct answer.");
                count++;
                cardQuestion();
            }

        });

    } else {
    	console.log("End of the Game!");
    } 
};

// Call the function in order to begin the game
cardQuestion();
