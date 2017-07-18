function setup() {
    createCanvas(500, 400);
    background(150);
}


var x = 0;


function draw() {
    background(150);
    ellipse(x, 200, 200);
    x += 32;
}