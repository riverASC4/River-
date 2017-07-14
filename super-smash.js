var mashAarray = ["land","sea","air","underground"]
var firstQuestion = [8,9]
var secondQuestion = ["Zelda","Pikachu","Mario","Lucario"]

var prompt = require('prompt-sync')();


function Deathsquad () {
  var ray =  prompt("How many times will you strike?") 
  var say =  prompt("Who will you choose to fight?") 
  firstQuestion.push(ray)
  secondQuestion.push(say)
}

Deathsquad();
console.log(firstQuestion)
console.log(secondQuestion)

