const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//IF,ELSE
bg ="Monster-02.png"
//Ground
var land

//SuperMan
var superMan

//Boxes
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var boxes1, boxes2, boxes3, boxes4, boxes5, boxes6, boxes7, boxes8, boxes9;
var bo1, bo2, bo3, bo4;

var string;
var monsters;
var EI;


function preload() {

   //creating the backgroundImage
  backgroundImage = loadImage("GamingBackground.png");

  //creating teh EI image
  EI = loadImage("Monster-02.png");
}

function setup() {

   //creating the canvas
  createCanvas(1535, 720);

  //creating the engine
  engine = Engine.create();
  world = engine.world;

  //creating the game objects
  land = new Ground(400, 500, 1300, 15);

  box1 = new Box(700,-30,50,50);                 
  box2 = new Box(700, -400, 50, 50);
  box3 = new Box(700, -400, 50, 50);
  box4 = new Box(700, -400, 50, 50);
  box5 = new Box(700, -400, 50, 50);
  box6 = new Box(700, -400, 50, 50);
  box7 = new Box(700, -400, 50, 50);
  box8 = new Box(770, -400, 50, 50);
  box9 = new Box(770, -400, 50, 50);

  boxes1 = new Box(770, -400, 50, 50);
  boxes2 = new Box(770, -400, 50, 50);
  boxes3 = new Box(770, -400, 50, 50);
  boxes4 = new Box(840, -400, 50, 50);
  boxes5 = new Box(840, -400, 50, 50);
  boxes6 = new Box(840, -400, 50, 50);
  boxes7 = new Box(840, -400, 50, 50);
  boxes8 = new Box(840, -400, 50, 50);
  boxes9 = new Box(840, -400, 50, 50);

  bo1 = new Box(910, -400, 50, 50);
  bo2 = new Box(910, -400, 50, 50);
  bo3 = new Box(910, -400, 50, 50);
  bo4 = new Box(910, -400, 50, 50);
  superMan= new Man(370,60,270,70);

  string= new Rope(superMan.body,{x:400,y:20});
  monsters= new Monster(948,0,2,350);

}

//creating the function draw
function draw() {

   //displaying the backgroundImage
  background(backgroundImage);

  //updating the engine
  Engine.update(engine);


  //displaying the Message
  stroke(0, 255, 0);
  strokeWeight(5);
  fill("blue");
  textSize(20);
  text("Drag The Superman And Kill The Monster",350/4-50,70);

  stroke(0, 255, 0);
  strokeWeight(5);
  fill("blue");
  textSize(20);
  text("If the Monster fell down from the Ground then Game over",350/4-50,100);

  stroke(0, 255, 0);
  strokeWeight(5);
  fill("blue");
  textSize(20);
  text("To play again click on Reload Button or Ctrl + R",350/4-50,130);




  land.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  boxes1.display();
  boxes2.display()
  boxes3.display()
  boxes4.display()
  boxes5.display()
  boxes6.display()
  boxes7.display()
  boxes8.display()
  boxes9.display()
  bo1.display();
  bo2.display();
  bo3.display();
  bo4.display();
  superMan.display();
  string.display()
  monsters.display();

  
 
}


function mouseDragged() {
  Matter.Body.setPosition(superMan.body, { x: mouseX, y: mouseY })
}


