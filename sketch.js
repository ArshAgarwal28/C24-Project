// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
//const Mouse = Matter.Mouse;
//const MouseConstraint = Matter.MouseConstraint;
//const Composite = Matter.Composite;
//const Detector = Matter.Detector;

// The above line creates different constant variables for Engine, World, Bodies etc.
/* const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine */

var engine, world;

var ground;
var tank, shooter;
var attShooter;

var ball1;

var cannonBall1;


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, height + 0, 1200, 20);
    tank = new Tanker(150, 315, 1, 1);

    //ball1 = new Ball(600, 200, 10);

    //cannonBall1 = new CanonBall(600,100);

    

    shooter = new Shooter(149,267)
    attShooter = new Attach(shooter.body, {x:149, y:267})
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("white");
    Engine.update(engine);
    //console.log(mouseX);
    //console.log(mouseY);

    ground.display();

    tank.display();

    //cannonBall1.display();
    shooter.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}