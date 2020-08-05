var slider;
var angle;

function setup() {
  createCanvas(innerWidth,innerHeight);
  slider = createSlider(0, PI/2 , PI/4 , 0.01);
}


function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  strokeWeight(1)
  line(0, height - 100, width, height-100);
  circle(100,140,100);
  fill(color('white'));
  translate(width/2, height-100);
  branch(180);

}

function branch(len){
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 1) {
    push();
    rotate(angle);
    branch(len*0.66667);
    pop();
    push();
    rotate(-angle);
    branch(len*0.66667);
    pop();
  }
}