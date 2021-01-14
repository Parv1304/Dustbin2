const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,200,40);
	ground=new Ground();
	bin1=new Bin(1000,358,200,20);
	bin2=new Bin(900,270,20,200);
	bin3=new Bin(1100,270,20,200);
	Engine.run(engine);
  
}


function draw() {
	background("white");
    //rectMode(CENTER);
    //background(0);
	paper1.display();
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
    drawSprites();
}