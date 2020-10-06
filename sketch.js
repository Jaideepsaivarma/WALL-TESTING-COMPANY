var bullet1,bullet2,bullet3,bullet4;
var line1,line2,line3;
var wall1,wall2,wall3,wall4;
var thickness,thickness2,thickness3,thickness4;
var speed,speed2,speed3,speed4;
var weight,weight2,weight3,weight4;

function setup() {
createCanvas(1600,400);
thickness = random(22,83);
thickness2 = random(22,83);
thickness3 = random(22,83);
thickness4 = random(22,83);
//creating random numbers for bullet speed;
speed = random(223,321);
speed2 = random(223,321);
speed3 = random(223,321);
speed4 = random(223,321);
//creating randomnumbers for bullet weight;
weight = random(30,52);
weight2 = random(30,52);
weight3 = random(30,52);
weight4 = random(30,52);
//creating bullets
bullet1 = createSprite(100,50,20,10);
bullet1.shapeColor = color(240, 117, 24);
bullet2 = createSprite(100,150,20,10);
bullet2.shapeColor = color(240, 117, 24);
bullet3 = createSprite(100,250,20,10);
bullet3.shapeColor = color(240, 117, 24);
bullet4 = createSprite(100,350,20,10);
bullet4.shapeColor = color(240, 117, 24);
//giving the bullet random velocity;
bullet1.velocityX = speed;
bullet2.velocityX = speed2;
bullet3.velocityX = speed3;
bullet4.velocityX = speed4;
//creating lines
line1 = createSprite(800,100,1600,10);
line2 = createSprite(800,200,1600,10);
line3 = createSprite(800,300,1600,10);
//creating walls
wall1 = createSprite(1200,50,thickness,60);
wall2 = createSprite(1200,150,thickness2,60);
wall3 = createSprite(1200,250,thickness3,60);
wall4 = createSprite(1200,350,thickness3,60);

  }

function draw() {
  background(23, 22, 22); 
  
  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2){
    bullet1.velocityX = 0;
    bullet1.x = wall1.x-wall1.width+30;
    change1();
   
    
}if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2){
  bullet2.velocityX = 0;
  bullet2.x = wall1.x-wall2.width+30;
  change2();
  
  
}if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/2){
  bullet3.velocityX = 0;
  bullet3.x = wall1.x-wall3.width+30;
  power3 = 0.5*weight3*speed3*speed3/thickness3*thickness3*thickness3;
  change3();
  
}if(wall4.x-bullet4.x < (bullet4.width+wall4.width)/2){
  bullet4.velocityX = 0;
  bullet4.x = wall1.x-wall4.width+30;
  change4();
}
   drawSprites();
}
function notok(){

{
  car1.velocityX = 0;
  car1.depth = wall1.depth;
  console.log(car1.x);
  car1.x = 1175;
  var formula = 0.5*wei1*vel1*vel1/22509;
  if(formula > 180){
    car1.shapeColor ="red";
  }
  if(formula < 180 && formula > 100){
    car1.shapeColor = "yellow";
  }
  if(formula < 100){
    car1.shapeColor = "green";
    
  }
}
if(wall1.x-car2.x < (car2.width+wall1.width)/2)
{
  car2.velocityX = 0;
  car2.depth = wall1.depth;
  car2.x = 1175;
  var formula = 0.5*wei2*vel2*vel2/22509;
  if(formula > 180){
    car2.shapeColor ="red";
  }
  if(formula < 180 && formula > 100){
    car2.shapeColor = "yellow";
  }
  if(formula < 100){
    car2.shapeColor = "green";
    
  }
      }
  if(wall1.x-car3.x < (car3.width+wall1.width)/2)
{
  car3.velocityX = 0;
  car3.depth = wall1.depth;
  car3.x = 1175;
  var formula = 0.5*wei3*vel3*vel3/22509;
  if(formula > 180){
    car3.shapeColor ="red";
  }
  if(formula < 180 && formula > 100){
    car3.shapeColor = "yellow";
  }
  if(formula < 100){
    car3.shapeColor = "green";
    
  }
  }
  if(wall1.x-car4.x < (car4.width+wall1.width)/2)
{
  car4.velocityX = 0;
  car4.depth = wall1.depth;
  car4.x = 1175;
  var formula = 0.5*wei4*vel4*vel4/22509;
  if(formula > 180){
    car4.shapeColor ="red";
  }
  if(formula < 180 && formula > 100){
    car4.shapeColor = "yellow";
  }
  if(formula < 100){
    car4.shapeColor = "green";
    
    
  }
  }


}
function change1(){
  if(thickness > 50){
    wall1.shapeColor = "green";
  }
  if(thickness < 50){
    wall1.shapeColor = "red";
  }
}
function change2 (){
  if(thickness2 > 50){
    wall2.shapeColor = "green";
  }
  if(thickness2 < 50){
    wall2.shapeColor = "red";
  }
}
function change3(){
  if(thickness3 > 50){
    wall3.shapeColor = "green";
  }
  if(thickness3 < 50){
    wall3.shapeColor = "red";
  }
}
function change4(){
  if(thickness4 > 50){
    wall4.shapeColor = "green";
  }
  if(thickness4 < 50){
    wall4.shapeColor = "red";
  }
}
