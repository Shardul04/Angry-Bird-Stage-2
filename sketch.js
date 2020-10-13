const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var Pig1,pig2;
var log1,log2,log3,log4;
var bird;
var backgroundimg;

function preload(){
    backgroundimg = loadImage("Img/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground();

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    Pig1 = new Pig(810,320);
    log1 = new Log(810,275,20,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,240);
    log2 = new Log(810,195,20,300,PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,20,150,PI/7);
    log4 = new Log(870,125,20,150,-PI/7);

    bird = new Bird (100,100);
}
function draw(){
    background(backgroundimg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();

    bird.display();   
}