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

  blower = Bodies.rectangle(450,400,350,10,blowerOptions);
  World.add(world,blower);

  blower1 = Bodies.rectangle(250,360,200,40,blowerOptions);
  World.add(world,blower1);

  var options ={
    restitution : 1.2,
    density : 0.1
  }

  ball = Bodies.circle(550,100,50,options);
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

  ellipse(ball.position.x,ball.position.y,50);
  rect(blower.position.x,blower.position.y,350,10);
  rect(blower1.position.x,blower1.position.y,200,40); 
}
function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5})
}