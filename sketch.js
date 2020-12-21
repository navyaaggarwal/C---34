const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var ground0, box0, box1, box2, ball0, rope0;

function setup() {

    createCanvas(600,600); 
    engine = Engine.create();
    world = engine.world;

    ground0 = new ground(400, 400, 400, 10);
    box0 = new box(400,300,20,20); 
    box1 = new box(400,250,20,20); 
    box2 = new box(400,200,20,20); 
    ball0 = new ball(200,150,20,20); 
    rope0 = new rope(ball0.body, {x: 200, y: 150})
}

function draw() {

    background("yellow");
    Engine.update(engine);
    ground0.display();
    box0.display();
    box1.display();
    box2.display();
    ball0.display();
    rope0.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball0.body, {x : mouseX, y : mouseY})
}