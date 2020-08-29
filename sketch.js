//Creating Global Variables
var thickness,wall;
var bullet,speed, weight;
function setup() {
  //Creating Canvas
  createCanvas(1600,400);
  //Creating Objects
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,20,thickness,height/2);
  wall(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  car.velocityX=speed;
  //Creating thickness
  thickness=random(22,83);
  }

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
  return false;
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed* speed/(thickness *thickness *thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}


function draw() {
  background(255,255,255);  
  drawSprites();
}