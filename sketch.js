const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
   ground1 = new Ground(200,380,400,20)
   box1 = new Box(223,70,30,55)
   box2 = new Box(100,60,20,45)
   box3 = new Box(200,80,50,80)
}

function draw(){
    background(200);
    Engine.update(engine);
    ground1.display()
    box1.display();
    box2.display()
    box3.display()
}
