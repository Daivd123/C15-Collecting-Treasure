var path, boy, cash, diamonds, jewellry, sword;
var pathImg, boyImg, cashImg, diamondsImg, jewellryImg, swordImg;
var treasureCollectin = 0;
var cashG, diamondsG, jewellryG, swordGroup;

//Game States
var play = 1;
var END = 0;
var gamestate =1;

function preload(){
pathImg = loadImage ("Road.png");
boyImg = loadImage = loadAnimation("Runner-1.png, Runner-2.png');
cashImg = loadImage ("cash.png");
diamondsImg = loadImage ("diamonds.png");
jewellryImg = loadImage ("jwell.png")
swordImg = loadImage ("sword.png");
endImg = loadImage ("gameOver.png");
}

function setup(){

  createCanvas (400,400);
//Moving Background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

//create boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("Sahil Running",boyimg);
boy.scale = 0.08;

cashG=new Group();
  diamondsG=new Group();
  jewellryG=new Group();
  swordGroup = new Group();

}

function draw() {

  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
     
    edges = createEdgeSprites();
    boy.collide(edges);

    //code to reset background
    if(path.y > 400){
      path.y = height/2;
    }

    createCash();
    creatDiamonds();
    createSword();
    createJewellry();
    
  }
}