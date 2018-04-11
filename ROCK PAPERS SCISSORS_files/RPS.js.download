var wins = 0;
var losses = 0;
var ties = 0;

var username = prompt("What are your initials?");

$(document).ready(function(){
    $("body").append("Your initials: " + username);
    $('body').append('<div><h3>STATS</h3><p id="stats"></p></div>')
});

function updateStats(){
    $('#stats').text("Wins: " + wins + " Losses: " + losses + " Ties: " + ties)
}

var arr = ["rock", "paper", "scissor"];
var player;
function rock(){
   $("body").append("<h2> You picked rock! </h2>");
   player = "rock";
   compChoose();

}

function scissor(){
   $("body").append("<h2> You picked scissor! </h2>");
   compChoose();
   player = "scissor";
}

function paper(){
   $("body").append("<h2> You picked paper! </h2>");
   compChoose();
   player = "paper";
}

function compChoose(){
   var num = 3
   var compChoose = rand(num);
   var compChoice = arr[compChoose]
   $("body").append("<h2> Computer has chosen " + compChoice + "!</h2>");
   if(compChoice == "paper"){
       outcome(compChoice, player);
   }
   if(compChoice == "rock"){
       outcome(compChoice, player);
   }
   if(compChoice == "scissor"){
       outcome(compChoice, player);
   }
}

function outcome(comp, player){
   if(comp == "scissor" && player == "paper"){
        $("body").append("<h2> Computer Won! </h2>");
        losses = losses + 1
        updateStats();
   }
   if(comp == "scissor" && player == "rock"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1;
        $("body").append(wins);
        updateStats();
   }
   if(comp == "scissor" && player == "scissor"){
        $("body").append("<h2> It's A Tie! </h2>");
        ties = ties + 1
        updateStats();
   }
   //
   if(comp == "paper" && player == "paper"){
        $("body").append("<h2> It's A Tie! </h2>");
        ties = ties + 1
        updateStats();
   }
   if(comp == "paper" && player == "rock"){
        $("body").append("<h2> Computer Won! </h2>");
        losses = losses + 1
        updateStats();
   }
    if(comp == "paper" && player == "scissor"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1;
        $("body").append(wins);
        updateStats();
   }
   //
   if(comp == "rock" && player == "paper"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1
        $("body").append(wins);
        updateStats();
   }
   if(comp == "rock" && player == "rock"){
        $("body").append("<h2> It's A Tie! </h2>");
        ties = ties + 1
        updateStats();
   }
   if(comp == "rock" && player == "scissor"){
        $("body").append("<h2> You Won! </h2>");
        wins = wins + 1;
        $("body").append(wins);
        updateStats();
   }
   //

}

function rand(num){
   // random integer between 0 and 1
   var randDec = Math.random() * num;
   var randInt = Math.floor(randDec);
   return randInt;


}

//Set database object
var database = firebase.database().ref();


//button executes this function
function updateDB(){
    var intials = $("#intials").val();
    var message = $("#message").val();
    console.log(initials + " : " + message);

    //Update database here
    var value = {intials: initials, message: message}
    database.push(value);
}

database.on("child_added", function(rowData){
   console.log(rowData. val());
   var initials = rowData.val().initials;
   var message= rowData.val().message;

   var html = "<p>" + initials + ":" + message + "</p>";
   $(".allMessages").append(html);
}) 
