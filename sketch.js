const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base1,base2;
var ball;
var slingShot1;

var score = 0;

function preload(){
  polygon_img = loadImage("polygon.png");
  nightImg = loadImage("night.jpg");
  dayImage = loadImage("morning.jpeg");

}

function setup(){
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
                                                
groundDum = new Ground(450,390,900,20);

base1 = new Base(390,300,250,10);
base2 = new Base(700,200,200,10);

box1 = new Box(300,275,30,40);

box2 = new Box(330,275,30,40);
box3 = new Box(360,275,30,40);
box4 = new Box(390,275,30,40);
box5 = new Box(420,275,30,40);
box6 = new Box(450,275,30,40);
box7 = new Box(480,275,30,40);

box8 = new Box(330,235,30,40);
box9 = new Box(360,235,30,40);
box10 = new Box(390,235,30,40);
box11 = new Box(420,235,30,40);
box12 = new Box(450,235,30,40);
   
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);
   
box16 = new Box(390,155,30,40);

blocks1 = new Box(640,175,30,40);
blocks2 = new Box(670,175,30,40);
blocks3 = new Box(700,175,30,40);
blocks4 = new Box(730,175,30,40);
blocks5 = new Box(760,175,30,40);
  
blocks6 = new Box(670,135,30,40);
blocks7 = new Box(700,135,30,40);
blocks8 = new Box(730,135,30,40);

blocks9 = new Box(700,95,30,40);
  
ball = Bodies.circle(50,200,20);
World.add(world, ball);

slingShot1 = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {
  background(56,44,44);
 
  textSize(17);
  fill("white");
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",90,40);
  text("Score: "+ score,750,50);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();                          
  blocks7.score();
  blocks8.score();
  blocks9.score();

  groundDum.display();

  base1.display();
  base2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink");

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise");

  box13.display();
  box14.display();
  box15.display();
  fill("white");

  box16.display();
  fill("skyblue");

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  
  blocks6.display();                          
  blocks7.display();
  blocks8.display();
  fill("green")

  blocks9.display();
  fill("gold");

  slingShot1.display();

  imageMode(CENTER)
  image(polygon_img, ball.position.x, ball.position.y,50,50);


} 


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot1.fly();
}

function keyPressed(){
if(keyCode === 32){
  slingShot1.attach(this.ball);
  Matter.Body.setPosition(this.ball,{x:100, y:200});
  }
}


async function getBackgroundImage(){
  var response = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago');
  var timeJson = await response.json();
  var datetime = timeJson.datetime;
  var hour = datetime[11]+datetime[12];

  console.log(hour);
  if(hour>6 && hour<18){
      backgroundImg = loadImage("Sprites/night.jpg");
      console.log("night");
     
  }else {
      backgroundImg = loadImage("Sprites/morning.jpeg")
      console.log("day")
  }
}