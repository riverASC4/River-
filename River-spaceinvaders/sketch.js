var img;

var xCoor1 = 120;
var xCoor2 = 420;
var xCoor3 = 720;
var xCoor4 = 1020;
var xCoor5 = 1320;

function setup() {
    createCanvas(1500,1100);
     img = loadImage("The Universe.jpg");
}

var yPos = 900;
var xPos = 766;
var x= 708;
var y= 975;

var projectiles = [];

function Projectile() {
  this.xPos=x;
  this.yPos=y;

  this.move = function () {
      this.yPos -= 50;
  }

  this.display = function() {
      fill("grey");
      ellipse(this.xPos, this.yPos, 13, 55);
  }
}

function draw() {
    background("black");
    image(img, 0, 0);
    fill("chartreuse");
    rect(x,y,85,30,70,70,0,0);    
    
    for (var i = 0; i < projectiles.length; i++) {
        projectiles[i].display();
        projectiles[i].move();
    }
    if (keyIsDown(LEFT_ARROW)) {
        x-=8;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x +=8;
    }
    if  (keyIspressed(32)) {
         projectiles.push(new Projectile());
    }
    



     if (x > 1500) {
         x = 0; 
 }
    if (x < 0) {
        x = 1500;
    }

var j = 20;
  
     fill("crimson");
     ellipse(xCoor1,60,70,40);

     fill("gold");
     ellipse(xCoor2,60,70,40);

     fill("green");
     ellipse(xCoor3,60,70,40);

     fill("navy");
     ellipse(xCoor4,60,70,40);

     fill("olive");
     ellipse(xCoor5,60,70,40);

     fill("orange");
     textSize(82);
     text("GAME OVER", 500, 550);
     
     fill("white");
     textSize(32);
     text("YOU LOOSE!!", 650, 650);

     fill("white");
     textSize(32);
     text("Score:", 1275,1050);

     fill("white");
     textSize(32);
     text("Lives:3", 1275, 150);
}

     xCoor1 += j;


    if(xCoor1 >= 1495 || xCoor1 <= 30) {
         j += 12;
    }
     
    // xCoor2+=j;

    // if(xCoor2 >= 1495 || xCoor2 <= 30) {
      //   xCoor2 -= 13;
     

