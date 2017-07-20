function setup() {
    createCanvas(482,401);
    background(150);

    var x = 0;
    var y = 0;
fill(150);
    for(var i = 0; i < 13; i++) {    // make 8 columns
        y = 0;
        for(j = 0; j < 11; j++) {    // make 8 squares in each column
            rect(x,y,40,40);
            y += 40;
        }
        x += 40;
        
        

    }
}

var myArray = [[false, true, false, false, false, false, true, false],
               [false, false, false, false, false, false, true, false],
               [false, false, false, false, false, false, true, false],
               [false, false, false, true, false, false, false, false],
               [false, false, false, false, true, false, true, false],
               [false, false, false, false, false, false, false, false],
               [false, true, false, true, false, false, false, false],
               [false, true, false, false, false, false, true, false]
]

function mousePressed() {
  if (value == false ) {
    fill = ;
  } else {
    value = 0;
  }
}

