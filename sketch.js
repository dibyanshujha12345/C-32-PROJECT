const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var blower;
var blower1;
var button;


function setup(){
  createCanvas(800,600);
 // createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  var blowerOptions ={
    isStatic:true,
    density : 0.1
  }

  blower = Bodies.rectangle(width / 2 - 50, height / 2 + 90, 150, 20,blowerOptions);
  World.add(world,blower);
  
  blower1 = Bodies.rectangle(width / 2 + 70, height / 2 + 20, 100, 100,blowerOptions);
  World.add(world,blower1);

  var options ={
    restitution : 1.2,
    density : 0.1
  }

  ball = Bodies.circle(width / 2 + 80, height / 2 - 80,50,options);
  World.add(world,ball);

 button = createButton("Click to Blow");
 button.position(width/2,height-100);
 button.class("blowButton");
 button.mousePressed(blow);
 
 
  

}

function draw() {

  background(180);
  Engine.update(engine);
  
  drawSprites();

  ellipse(ball.position.x,ball.position.y,50,50);
  rect(blower.position.x,blower.position.y,150,20);
  rect(blower1.position.x,blower1.position.y,100,100); 
}
function blow(){
   Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.9,y:-5})
}
