var hanuman , hanumanImage , weapon , weaponImage , scene , backgroundImage ;
var enemy1 , enemy2 , enemy3 , enemy1Img , enemy2Img , enemy3Img ;

function preload(){
  
  backgroundImage = loadImage("bg2.jpg");
  hanumanImage = loadImage("hanumaan.png")
  weaponImage = loadImage("weapon.png");
  enemy1Img = loadImage("enemy1.png");
  enemy2Img = loadImage("enemy2.png");
  enemy3Img = loadImage("enemy3.png");
  
}



function setup() {
  createCanvas(600,600);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //create hanuman
  hanuman=createSprite(550,200,20,20);
  hanuman.addImage(hanumanImage);
  hanuman.scale=0.3;
 
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  hanuman.y = World.mouseY

  //if statement for weapon to come
if(keyDown("space")){
  createArrow();
}

if (World.frameCount % 50 === 0) { 
  createEnemy1(); 
}
if (World.frameCount % 80 === 0) { 
  createEnemy2(); 
}
if (World.frameCount % 100 === 0) { 
  createEnemy3(); 
}
  //increase hanuman and weapon depth
  hanuman.depth+=2;
  

  drawSprites();
}

//create function createArrow.
function createArrow(){
  weapon = createSprite(530,220,20,50);
  weapon.addImage(weaponImage); 
  weapon.scale = 0.2;
  weapon.rotation=85;
  weapon.y=hanuman.y;
  weapon.velocityX = -5;
  weapon.lifeTime = 200;
}

function createEnemy1() {
  var ene1 = createSprite(0,Math.round(random(20, 570)), 10, 10);
  ene1.addImage(enemy1Img);
  ene1.velocityX = 2;
  ene1.lifetime = 280;
  ene1.scale = 0.2;

}

function createEnemy2() {
  var ene2 = createSprite(0,Math.round(random(20, 570)), 10, 10);
  ene2.addImage(enemy2Img);
  ene2.velocityX = 2;
  ene2.lifetime = 280;
  ene2.scale = 0.2;

}

function createEnemy3() {
  var ene3 = createSprite(0,Math.round(random(20, 570)), 10, 10);
  ene3.addImage(enemy3Img);
  ene3.velocityX = 2;
  ene3.lifetime = 280;
  ene3.scale = 0.2;

}