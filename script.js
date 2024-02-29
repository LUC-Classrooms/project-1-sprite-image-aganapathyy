/**
 * Project 1 - Interactive Image
 * Name: Anya Ganapathy
 * Comments: 
 * Completion date; 2/28/24
 * Basic description of the image; it's a ball with a sad face that somewhat looks like kirby
 * Basic description of user interactions to expect; if clicked, it will blush + grow in size 
 * Citations of any code sources used for reference;
 * https://editor.p5js.org/dbwetzel/sketches/eQAg7-K4t, lab 6- basic motion, Example 6-5: Translation, Then Rotation from the textbook
 */

// Global Variables go here
var x = 300; //horizontal location
var y = 200; // vertical location
var d = 150; // diameter
var rotationSpeed = 0; 
var angle = 0; 
var blush = (240, 152, 165)


function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(0,0,30); //light gray background
  
  // this custom function takes care of drawing a complex shape

  let skin1 = color(255, 210, 180);
  let skin2 = color(255, 190, 155);
  let white = color(240);
  let black = color(0);
  let pink = color(240, 152, 165);
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
//aw its blushing
  if(mouseIsPressed){
    blush = pink
} else {
  // do something here if the mouse is NOT pressed
    blush = skin1
}    
  if (mouseIsPressed) { //it grew
    scale(0.9);
} else {
    scale(0.8);  // 60% size when mouse is pressed
}
  // add your image drawing code here
  push(); 
  translate(x,y); 
  rotate(angle)
  angle += .02;

  //feet
  strokeWeight(3);
  fill(skin2)
  arc(x/3.2, y/1.2, d/4, d/5, PI, TWO_PI);//left
  line(x/3.9,y/1.2,x/2.6,y/1.2)
  arc(x/1.45, y/1.2, d/4, d/5, PI, TWO_PI); //righ
  line(x/1.8,y/1.2,x/1.34,y/1.2)

  //circle body
  strokeWeight(3);
  fill(skin1);
  ellipse(x/2, y/2, d, d);

  //blush
  strokeWeight(2);
  stroke(blush)
  line(x/3.1,y/1.7,x/3.4,y/1.6) // L
  line(x/2.8,y/1.69,x/3.1,y/1.59)
  line(x/2.6,y/1.69,x/2.8 ,y/1.58)

  line(x/1.7,y/1.69,x/1.6,y/1.6) // R
  line(x/1.6,y/1.69,x/1.51,y/1.59)
  line(x/1.52,y/1.68,x/1.45,y/1.58)

  //face
  stroke(black)
  strokeWeight(2);
  line(x/2.01,y/2,x/2.01,y/1.7) // nose
  arc(x/2, y/1.55, d/8, d/50, PI, TWO_PI); // mouth
  arc(x/2.5, y/2.6, d/9, d/20, 0, HALF_PI); //eye brow L
  arc(x/1.69, y/2.6, d/9, d/20, HALF_PI, PI); // eyebrow r
  line(x/2.6,y/1.9,x/2.8,y/1.7)//lower lash L
  line(x/2.7,y/1.9,x/3,y/1.8)
  line(x/1.7,y/1.9,x/1.6,y/1.7)//lower lash R
  line(x/1.6,y/1.9,x/1.5,y/1.8)

  //left eye
  strokeWeight(2);
  stroke(black)
  fill(white);
  ellipse(x/2.5, y/2, d/4, d/6);
  fill(black);
  ellipse(x/2.5, y/2, d/6, d/5);
  fill(white);
  ellipse(x/2.5, y/2.1, d/9, d/13);
  ellipse(x/2.5, y/1.8, d/14, d/25);

  strokeWeight(3); //eyelash
  noFill();
  arc(x/2.5, y/2, d/3.5, d/5.5, PI, TWO_PI);
  triangle(x/3, y/2, x/3.27, y/2, x/3,y/2.1);

  //right eye
  strokeWeight(2);
  fill(white);
  ellipse(x/1.69, y/2, d/4, d/6);
  fill(black);
  ellipse(x/1.69, y/2, d/6, d/5);
  fill(white);
  ellipse(x/1.69, y/2.1, d/9, d/13);
  ellipse(x/1.69, y/1.8, d/14, d/25);

  strokeWeight(3); //eyelash
  noFill();
  arc(x/1.7, y/2, d/3.5, d/5.5, PI, TWO_PI);
  triangle(x/1.5, y/2, x/1.54, y/2.1, x/1.45 ,y/2);
  
  pop();
}
/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
  rotationSpeed = random(0.1,.8);
}