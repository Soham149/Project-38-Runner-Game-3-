
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

var ground2;
var rando =  Math.round(100,300);
var setting,setting_Img;
var pig_Img;
var score = 0;

function preload(){
   setting = loadImage("IMAGES/bg2.jpg");
   pig_img = loadImage("IMAGES/enemy.png");
}

function setup() {
	 
	createCanvas(1600, 700);
	rectMode(CENTER);
	 
	 


	engine = Engine.create();
	world = engine.world;
	//dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
    ground2 = new ground(width/2,100,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);

	// setting_Img = createSprite(600,350,1600,700);
	// setting_Img.addImage(setting,"IMAGES/bg2.jpg");
	// setting_Img.scale = 2;
	 
  
}


function draw() {
  rectMode(CENTER);
  background(setting);
  
  setting.velocityX = -12;
 

  //dustbinObj.display();
  paperObject.display();
  groundObject.display();
 
  createPigs();

  score = frameCount;
  

  if (score === 1000){
      console.log("GAME OVER");
  }
   
  	 
   drawSprites();

   fill("magenta");
   textSize(100);
   text("Score:" + score, 100,200);
   textSize(20);
   text("The squareians have taken over your country, you are a spy for the circlians, you need get to there base.",600,100);
   text("YOU HAVE TO OPEN THE CONSOLE FOR THIS TO WORK",600,130);
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:-100});
    
	  }
	  
	 
}
function createPigs(){
   if (frameCount % 60 === 0){
	  var pig = createSprite(1200,630,random(10,50),random(10,50));
	  pig.shapeColor = "lime";
	 pig.velocityX = -12;

	  
	  
   }
   
     
}
 




