var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("Please Enter Your Name ");
console.log("Konnichiwa aka Welcome "+ userName + " to THE HIDDEN LEAF SHINOBI QUIZ");
console.log("-------------------");
console.log("Instructions : Enter option value for answering like a,b,c,d");
console.log("-------------------");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
if(userAnswer === answer){
  console.log("Right Answer");
  score = score + 1;
}else{
  console.log("Wrong Answer");
  
}
console.log("current score: ",score);
console.log("--------------");

}



var questions = [{
  question:"1. Who Sealed the Nine Tails inside Naruto ?\n A. Minato Namizake\n B. Itachi Uchiha\n C. Jiraya\n D. Sasuke Uchiha\n",

  answer:"a"
},{
  question:"2. Which one of these are true ?\n A. Sasuke likes Sakura\n B. Hinata likes Naruto\n C. Akamaru is FAT\n D. Sai likes Ino\n",

  answer:"b"
},{
  question:"3. Who was the Sixth Hokage ?\n A. Kakashi Hatake\n B. Tsunade\n C. Itachi Uchiha\n D. Naruto Uzumaki\n",

  answer:"a"
},{

  question:"4. What Chakra element does Naruto mostly relate to ?\n A.Water\n B. Fire\n C. Wind\n D. Lightning\n",

  answer:"c"
},{
  question:"5. Naruto,Sasuke,Sakura and Kakashi were in ?\n A. Squad 9\n B. Squad 12\n C. Squad 8\n D.Squad 7\n",

  answer:"d"
}];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You Scored : ",score);
console.log("--------------------");
console.log("HighScores\n");
var highScores=[{
  name:"Uzumaki Naruto",
  score:"5"
},{
  name:"Kakashi Hatake",
  score:"5"
},{
  name:"Goku",
  score:"3"
}];

highScores.map(score => console.log(score.name, ":", score.score))

console.log("--------------------");
console.log("Arigatou aka Thank U " + userName + " for playing this Quiz\n");
console.log("DEVELOPED WITH LOVE BY SAI TEJAS");