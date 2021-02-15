/*
OOP
Encapsulation -> everything about this object is contained here
- everything inside the class is what it means to be a bubble
  - new keyword, create an object
  - bubble = new Bubble();
  - create a new object of type Bubble named bubble
- encapsulate an object's data and functionality within an object

A class is a template or blueprint for a type of object

- a class is a cookie cutter
- an object is the actual cookie
*/
let riceGrains;
let numGrains;
let width;
let height;
function setup() {
  width = 1600;
  height = 800;
  grains = [];
  numGrains = 100;
  
  // fullscreen(true);
  createCanvas(width, height);
  
  for(let i = 0; i < numGrains; i++) {
    grains.push(new RiceGrain(random(3, 5), createVector(width/ 2, height/2)));
  }
}

function draw() {
  background(0);
  
  for (let grain of grains) {
    grain.move();
    grain.show();  
  }
}

class RiceGrain {
  // constructor is the object's setup
  // defining what does it mean to be this rice grain
  constructor(riceSize, riceLocation) {
    // this is a keyword in JavaScript
    this.size = riceSize;
    this.location = riceLocation;
  }
  
  move() {
    let velocity = createVector(random(-20, 20), random(-20, 20));
    
    this.location.add(velocity);
    
    if (this.location.x < 0 ) {
      this.location.x = width;
    }
    else if (this.location.x > width ) {
      this.location.x = 0;
    }
    
    if (this.location.y < 0 ) {
      this.location.y = height;
    }
    else if (this.location.y > height ) {
      this.location.y = 0;
    }
  }
  
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    ellipse(this.location.x, this.location.y, this.size/2, this.size*2);
  }
}
