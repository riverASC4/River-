function setup(){
    createCanvas(400, 400);
    background(51);
}

function mouseDragged(){
    fill(random(0,255),random(0,255), random(0,255))
    ellipse(mouseX, mouseY, random(10, 30), random(10,40));
    return false;
}

