function setup() {
    createCanvas(500, 500);
    background(150);
}


var xPos = 21;
var yPos = 21;
var x = 14;     // direction & speed. Pos == right, neg == left
var y = 12;     // direction & speed. Pos == down, neg == up


function draw(){
    background(150);
    ellipse(xPos, yPos, 80);
     xPos += x; yPos+= y;

     if(xPos >= 480  || xPos <=20 ){
         x *= - 1;
     }

    if(yPos >= 480 || yPos <=20){
        y = -y;
}}   



  
    
  

