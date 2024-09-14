function setup() {
    createCanvas(600, 600);
    background(220);
  }
  
  
  function draw() {
  
    stroke("red");
    fill("black");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 40);
    }
  }
  