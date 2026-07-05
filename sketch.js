let positions = [
  { x: 300, y: 400 }, 
  { x: 600, y: 300 }, 
  { x: 900, y: 500 },
  
];

let myColors = ['#97072199', '#ffc80099', '#7c00c499', '#cf423599'];
let bgColors = [
  '#001B2E88',
  '#00324988',
  '#007EA788',
  '#80CED788',
  '#3fa5ac88'
];

function setup() {
  createCanvas(1200, 800);
  background('#0B132B');
  randomSeed(99);
  noLoop();
}

function draw() {
  drawBackgroundLayers();
  
  for (let pos of positions) {
    let randomSides = floor(random(3, 9));   
    let randomRadius = random(100, 250);     
    let chosenColor = random(myColors);
    
    fill(chosenColor);
    noStroke(); 
    
    drawPolygon(pos.x, pos.y, randomRadius, randomSides);
  }
  
  drawMarkups();
}

function drawBackgroundLayers() {
  for (let i = 0; i < 40; i++) {
    let chosenColor = random(bgColors);
    fill(chosenColor);
    noStroke();
    
    let x1 = random(-100, width + 100);
    let y1 = random(-100, height + 100);
    let x2 = random(-100, width + 100);
    let y2 = random(-100, height + 100);
    let x3 = random(-100, width + 100);
    let y3 = random(-100, height + 100);
    
    triangle(x1, y1, x2, y2, x3, y3);
  }
}

function drawPolygon(x, y, radius, sides) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    let angle = map(i, 0, sides, 0, TWO_PI);
    let sx = x + cos(angle) * radius;
    let sy = y + sin(angle) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

for (let i = 0; i < 35; i++) {
  let tx = random(50, width - 50);
  let ty = random(50, height - 50);
  let tSize = random(12, 28);
  fill('#00BBF9AA'); 
  noStroke();
  push();
  translate(tx, ty);
  rotate(random(TWO_PI));
  drawPolygon(0, 0, tSize, 3);
  pop();
}


function drawMarkups() {
  push();
  translate(220, 120); 
  fill('#ffe600a7'); 
  noStroke();
  
  let strokeCoords = [
    {x: 0, y: 0, w: 15, h: 35},
    {x: -12, y: 15, w: 14, h: 30},
    {x: -18, y: 40, w: 15, h: 25},
    {x: -15, y: 65, w: 15, h: 30},
    {x: 25, y: -10, w: 15, h: 35},
    {x: 50, y: -5, w: 15, h: 30},
    {x: 75, y: 5, w: 16, h: 25}
  ];

  for (let s of strokeCoords) {
    push();
    translate(s.x, s.y);
    rotate(0.6); 
    rect(0, 0, s.w, s.h, 8); 
    pop();
  }
  pop();

  



  stroke('#ffffff88');
  strokeWeight(3);
  noFill();
  ellipse(970, 130, 90);
  ellipse(970, 130, 70);
  ellipse(970, 130, 45);
  
  ellipse(190, 690, 220);
  ellipse(190, 690, 190);
  ellipse(190, 690, 160);
  ellipse(190, 690, 125);

  stroke('#ffffff88');
  strokeWeight(3);
  noFill();
  ellipse(1200, 800, 180);
  ellipse(1200, 800, 140);
  ellipse(1200, 800, 90);

  
  stroke('#cf423599');
  strokeWeight(4);
  line(650, 80, 580, 560);
  line(670, 85, 600, 565);
  line(690, 90, 620, 570);
  line(710, 95, 640, 575);
  
  line(10, 800, 130, 680);
  line(25, 800, 145, 680);
  line(40, 800, 160, 680);
  
  stroke('#ffffff66');
  strokeWeight(2);
  arc(1200, 800, 450, 450, PI, THREE_PI / 2);
  arc(1200, 800, 400, 400, PI, THREE_PI / 2);
  arc(1200, 800, 350, 350, PI, THREE_PI / 2);
  
  fill('#ffe6006b');
  noStroke();
  beginShape();
  vertex(150, 120); vertex(175, 140); vertex(160, 180); vertex(120, 260);
  vertex(105, 230); vertex(125, 170); vertex(110, 145);
  endShape(CLOSE);
  
  ellipse(135, 120, 12);
  ellipse(150, 110, 18);
  ellipse(170, 125, 14);
  ellipse(120, 200, 10);
  
  
  beginShape();
  vertex(480, 850); vertex(550, 890); vertex(600, 870); vertex(570, 850);
  vertex(520, 840);
  endShape(CLOSE);
  
  beginShape();
  vertex(1100, 0); vertex(1150, -20); vertex(1185, 40); vertex(1140, 100);
  vertex(1105, 60);
  endShape(CLOSE);
  
  push();
  translate(910, 500);
  rotate(0.3);
  fill('#ffab0f99');
  textSize(32);
  textFont('Courier New');
  textStyle(BOLD);
  text("A", 0, 0);
  text("I", 15, -25);
  text("R", 30, -50);
  text("O", 42, -75);
  text("I", 65, -95);
  pop();

 

}
