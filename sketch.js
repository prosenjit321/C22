const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(1200,500)
  engine = Engine.create()
  world = engine.world
  var groundoptions = {
    isStatic:true,
  }
  var balloptions = {
    restitution:1.0,
  }
  box = Bodies.rectangle(400,200,50,50)
  ground = Bodies.rectangle(600,height,1200,20,groundoptions)
  ball = Bodies.circle(500,200,25,balloptions)
  World.add(world,box)
  World.add(world,ground)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,1200,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)

}
