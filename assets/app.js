
//Constructor for basic flashcards
var BasicCard = function ( front, back ) {
 this.front = front;
 this.back = back;
}

//Constructor for Cloze-Deleted flashcards
var ClozeCard = function ( text, cloze ) {
	this.text = text;
	this.cloze = cloze;
}

//This method returns the partial text.
ClozeCard.prototype.partial = function() {

	if(this.text.indexOf(this.cloze) === true) {
	return this.text.replace(this.cloze, '...');
} else {
	var notExist = " doesn\'t exist in ";
	return "'" + this.cloze + "'" + notExist + "'" + this.text + "'";

	}
}

//This method returns the full text.
ClozeCard.prototype.fullText = function() {
	return this.text;
}



var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

//Using these console.logs to test the backend app
// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial()); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText());