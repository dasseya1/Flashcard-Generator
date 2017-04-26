// These are the variables
var inquirer = require("inquirer");
var clozeGameArr = [];


//Constructor for Cloze-Deleted flashcards
 var ClozeCard = function ( text, cloze ) {
 	this.text = text;
 	this.cloze = cloze;
 }
 
 //This method returns the partial text.
 ClozeCard.prototype.partial = function() {
 
 	if(this.text.indexOf(this.cloze) === 0) {
 	return this.text.replace(this.cloze, '...');
 } else {
 	var notExist = " doesn\'t exist in ";
 	return "'" + this.cloze + "'" + notExist + "'" + this.text + "'";
 
 	}
};

//Questions and Answers to push into the array variable

clozeGameArr.push(new ClozeCard("George Washington was the first President of the United States.", "George Washington"),
    new ClozeCard("Barack is the firstname of the last President of the United States.", "Barack"),
    new ClozeCard("James LeBron was the best player of the NBA in 2016.", "James LeBron"));


var count = 0;

// Ask the questions as long as the count is less than the number of questions
var cardQuestion = function() {
	if (count < clozeGameArr.length){
        //Display the questions one by one on the console
        inquirer.prompt([{
            name: "question",
            message: clozeGameArr[count].partial()
        }]).then(function(answer) {
            var useranswer = answer.question;
            var backOfCard = clozeGameArr[count].cloze;

            if ((useranswer === backOfCard) || (useranswer === backOfCard.toLowerCase()) || (useranswer === backOfCard.toUpperCase())) {
                console.log("Great! " + useranswer + " is correct!");
                console.log(clozeGameArr[count].text);
                count++;
                //Ask the follwing question
                cardQuestion();
            } else {
                console.log("Ooops! " + useranswer + " is an incorrect answer.");
                console.log("The correct answer is: " + backOfCard);
                console.log(clozeGameArr[count].text);
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