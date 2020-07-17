//global variables
  var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
  var packageBody,ground;
  var boxLeft, boxRight, boxMiddle, boxTop;
//physics Engine  
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1370, 690);
	rectMode(CENTER);
	
  //the sprites
   //pakage
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
   //helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
   //ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  //The engine and the world
	engine = Engine.create();
	world = engine.world;
  //the bodies
   //package 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
   //boxes
	boxLeft = new Edge(550, 620, 35, 150);
	boxMiddle = new Edge(650, 620, 155, 35)
	boxRight = new Edge(750, 620, 35, 150);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//the package  
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  drawSprites();  
 
//displaying   
  boxLeft.display();
  boxMiddle.display();
  boxRight.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageSprite.scale = 0.2;   
  }
}



