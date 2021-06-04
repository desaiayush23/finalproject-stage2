var city,backgroundimg;
var ninja,ninjaRun,ninjaJump;
var edges;
var elements,element1,element2,element3,element4,elementsGroup;
var score;

function preload(){
backgroundimg=loadImage("ninjabackground.jpg")
  ninjaRun=loadAnimation("ninjaRun1.png","ninjaRun2.png","ninjaRun3.png","ninjaRun4.png","ninjaRun5.png","ninjaRun6.png","ninjaRun7.png")
  ninjaJump=loadAnimation("ninjaJump1.png","ninjaJump2.png","ninjaJump3.png","ninjaJump4.png","ninjaJump5.png")
  element1=loadImage("element1.png")
  element2=loadImage("element2.png")
  element3=loadImage("element3.png")
  element4=loadImage("element4.png")
}



function setup() {
  createCanvas(1000,390);
  edges=createEdgeSprites();
  
 city=createSprite(0,70,1200,500);
 city.addImage("city",backgroundimg)
 city.scale=0.9
 city.velocityX=-2
 
 ninja=createSprite(80,330,40,100)
 ninja.addAnimation("ninjaRunning",ninjaRun)
 ninja.scale=0.8
 elementsGroup=createGroup();
 score=0;
}

function draw() {
 background(255);
  
 if(city.x<520){
   city.x=750
 }

 if(keyDown("space")){
   ninja.addAnimation("jumping",ninjaJump)
   ninja.changeAnimation("jumping",ninjaJump)
   ninja.velocityY=-10
   ninja.scale=0.8
 }

 ninja.velocityY=ninja.velocityY+0.8
 ninja.collide(edges)

 spawnElements1();
  drawSprites();
 
  textSize(24);
  fill("white");
  text("Assets: "+score,880,35)
}
function spawnElements1(){
if(frameCount % 30===0){
  var elements=createSprite(1000,random(100,350),25,25)
  elements.velocityX=-6;
  var rand=Math.round(random(1,2))
  switch(rand){
    case 1:elements.addImage(element1);
    break;
    case 2:elements.addImage(element2);
    break;
    default:break;
  }
  elements.scale=0.2;
  elements.lifeTime=300;
  elementsGroup.add(elements)
}
}
