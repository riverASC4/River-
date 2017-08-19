var img;
var img2;
var img3;

function setup() {
    createCanvas(1425,815);
    img = loadImage("Pikachu.jpg"); 
    img2 = loadImage("Lucario the killer.jpg")
    background("chartreuse");
}


function draw() {
    rect(1024,230,400,200,10,10,10,10); 
    rect(676,60,300, 50,20,20,20,20);
    rect(0,614,400,200, 10,10,10,10); rect(310,409, 300, 50,20,20,20,20);
    rect (130,757,200,80);
    rect (1025, 230,200,80,10,10,10,10);
    fill(98,12,113);
    textSize(28);
    textStyle("bold");
    text("HP LVL", 340,445);
    text("HP LVL", 775, 95 );
    // Displays the image at its actual size at point (0,0)
    image(img,0,313,300,300);
    image(img2,1105,0,320,230);
    image(img3,0,0,1425,815)
}


fill(12,23,18);

