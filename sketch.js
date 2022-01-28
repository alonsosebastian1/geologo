const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var hierro;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,90)
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,100,50);
    hierro = new Hierro(400,300,30,60);
    stone = new Stone(200,300,50,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    hierro.display();
    stone.display();
 
}