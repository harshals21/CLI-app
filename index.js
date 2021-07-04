var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Harshal? ");

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    console.log("You are right! ");
    score = score + 1;
    
  } else {
    console.log("You are Wrong! ");
  }

  console.log("current score: ", score);  
  console.log("--------------");
}



// array of questions

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
}, {
  question: "My favorite cricketer is? ",
  answer: "Rahul Dravid"
}, {
  question: "My favorite destination is? ",
  answer: "France"
}];


for( var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Congrats!! You SCORED: ", score);