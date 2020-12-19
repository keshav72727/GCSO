var car , wall;
var speed , weight;
var deformation;



function setup() {
  createCanvas(1600,400);
 car =  createSprite(50, 200, 50, 50);
 car.velocityX=speed;
 wall = createSprite(1500,200,60,height/2);

}

function draw() {
  background(255,255,255);

 speed = random (55,90);
 wight= random (400,1500);
 
if (wall.x-car.x<wall.width/2+car.width/2)
{
  car.velocityX=0;
  deformation =0.5*wieght*speed*speed/22509;

  if (deformation<100)
  {
    car.shapeColor=(0,255,0);
  }

  if (deformation>100&&deformation<180)
  {
    car.shapeColor=(230,230,0);
  }

  if (deformation<180)
  {
    car.shapeColor=(255,0,0);
  }
}

  drawSprites();
}