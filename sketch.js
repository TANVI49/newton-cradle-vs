const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const  MouseConstraint = Matter.MouseConstraint;
var engine, world;
var ball1, rope1
var ball2, rope2
var ball3, rope3
var ball4, rope4
var ball5, rope5

function setup() {
  createCanvas(700, 800);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse=Mouse.create(canvas.etc);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  }
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  ground = new Ground(600, 600, 1200, 20);

  
  ball1 = new Ball(100, 100);
  rope1 = new Rope(ball1.body, { x: 100, y: 50 });

  ball2 = new Ball(200, 200);
  rope2 = new Rope(ball2.body, { x: 220, y: 50 });

  ball3 = new Ball(200, 20);
  rope3 = new Rope(ball3.body, { x: 340, y: 50 });

  ball4 = new Ball(200, 200);
  rope4 = new Rope(ball4.body, { x: 460, y: 50 });

  ball5 = new Ball(200, 200);
  rope5 = new Rope(ball5.body, { x: 580, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  ball1.display();
  fill(red);
  rope1.display();

  ball2.display();
  fill(red);
  rope2.display();
  
  ball3.display();
  fill(blue);
  rope3.display();

  ball4.display();
  fill(blue);
  rope4.display();

  ball5.display();
  fill(purple);
  rope5.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}


