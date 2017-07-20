var img;

function setup() {
    createCanvas(1250,810);
    img = loadImage("Pikachu.jpg"); 
    background("chartreuse");
}

function draw() {
    // Displays the image at its actual size at point (0,0)
    image(img, 100,100);
    
    // Displays the image at point (0, height/2) at half size
    image(img, 100, height/2, img.width/2, img.height/2);
    rect(979,60,200,300,20,20,20,20); rect(676,60, 300, 50,20,20,20,20);
    rect(30,409,200,300, 20,20,20,20); rect(233,409, 300, 50,20,20,20,20);
    ellipse (130,757,200,80);
    //ellipse (1080, 410,200,80);
    textSize(28);
    textStyle("bold");
    text("HP LVL", 361,445);
    text("HP LVL", 800, 95 );
}


