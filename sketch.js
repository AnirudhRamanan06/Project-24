class paper {
	constructor(x,y,width,height){
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
matter.Bodies.circle(x,y,radius,options,maxsides)

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	function draw() {
		rectMode(CENTER);
		background(0);
		ellipse(54,46,55,55)
		
		drawSprites();
	   
	  }
	  
	}



	



  
}

	



}
function display() {
	Matter.Bodies.circle.display();
}

