
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,bolaop,solo,parade1,parede2;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bolaop={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(260,100,20,bolaop);
	World.add(world,ball);

	solo=new Solo(500,670,1000,20);

	parede1=new Solo(600,600,20,120);
	parede2=new Solo(850,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  ellipse(ball.position.x,ball.position.y,40,40);

  solo.display();
  parede1.display();
  parede2.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball,ball.position,{x:60,y:-60});
	}
}



