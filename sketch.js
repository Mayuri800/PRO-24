
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;
var ball1;
var ground1


function setup() {
	createCanvas(1200, 500);
	
    
	engine = Engine.create();
	world = engine.world;

	ground1=createSprite(0,480,2900,10);
	ground1.shapeColor="brown";
	log1=createSprite(865,415,10,90);
	log1.shapeColor="purple";
	log2=createSprite(920,465,120,10);
	log2.shapeColor="red";
	log3=createSprite(975,415,10,90);
	log3.shapeColor="purple";
	ball1=createSprite(50,465,20,20);
	ball1.shapeColor="red";
	ball1.restitution = 0.3;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
 
  text("PUT THE BALL IN THE BOX ",480,100);
  fill("blue");
  if(keyDown(RIGHT_ARROW)){
	  ball1.velocityX = 2;
  }
  if(keyDown(UP_ARROW)){
	 ball1.velocityY = -2; 
  }
  if(keyDown(DOWN_ARROW)){
	ball1.velocityY = 2; 
 }
 if(keyDown(LEFT_ARROW)){
	ball1.velocityX = -2; 
 }
 if(keyDown("space") ){
	ball1.velocityY = 0; 
	ball1.velocityX = 0;
 }
 



  drawSprites();
  
 
}



