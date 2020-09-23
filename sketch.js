
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3;
var ground;



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper=new Paper(200,700,50,50);
	
	dustbin1= new Dustbin (440,730,20,100)
	
	dustbin2= new Dustbin (620,730,20,100)

	dustbin3= new Dustbin (530,770,200,20)

	ground= new Ground (400,790,800,20)

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

	 }
   }


