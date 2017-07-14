var Letters=["a","b","c","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function rand(num) {
        var randDec = Math.random() * num;
        var randInt = Math.floor(randDec);
        return randInt;
    }


 function randletter() {
     var randInt = rand(26);
     var letter = Letters[randInt];
     return letter;
 }
 
 randletter();

var length = rand(100) 
var word = '';

 function randword() {
    for (var i=0; i<length;i++) {
        word = word + randletter();
    }
    return word;
 }
 
console.log(randword());



 