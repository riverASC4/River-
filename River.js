    // console.log("River is awesome!");
    // console.log("Hello world!");
// Generates a random number between
//0 and 1 of your choosing 
  
    function rand(num) {
        var randDec = Math.random() * num;
        var randInt = Math.floor(randDec);
        console.log(randInt);
        return randInt;
    }

    rand(689);