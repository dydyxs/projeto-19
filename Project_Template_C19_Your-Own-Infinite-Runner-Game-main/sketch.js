var mocinho_correndo3,mocinho_correndo2,mocinho_parado;
var mocinho1Img, mocinho2Img,mocinho3Img;
var chãoImg,pedra,pedraImg;
 var distance;

var END = 0;
var PLAY= 1;
var gameState = PLAY;

var gameOver,start,restart;
var gameOverImg, restartImg, startGameImg;

function preload(){
    chãoImg = loadAnimation("dektl6b-3b40000d-d04a-4d92-b767-17b70b19fb22.gif");
    mocinho1Img = loadAnimation("mocinho_parado.png","mocinho_correndo2.png");
    mocinho3Img= loadAnimation("mocinho_correndo3.png");
   
    gameOverImg = loadImage("game_over.jpg");
    startGameImg = loadImage("start.png");
    restartImg = loadImage("restart.png");
}

function setup() {
    createCanvas (1300,800);
   // chão = createSprite(100,150);
  //  chão.addAnimation("chãoImg", chãoImg);
 //   chão.velocityX = -5;
 //   chão.scale= 2;

    mocinho_correndo = createSprite(70,150);
    mocinho_correndo.addAnimation("mocinho1Img", mocinho1Img);
    mocinho_correndo.scale = 0.07;



    mocinho_correndo.setCollider("rectangle", 0,0,40,40,50);

    gameOver = createSprite(650,150);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.8;
    gameOver.visible = false;
 
}

function draw() {
background(chãoImg);
drawSprites();
textSize(20);
fill(255);
text("Distance: "+ distance,900,30);

if(gameState === PLAY){

    distance = distance + Math.round(getFrameRate()/50);
    //chão.velocityX = (-6 +2*distance/150);

     







  //  if(chão.x < 0){
   //     chão.x = width/2;
   // }

    if(keyDown("space")){
       
    }


}


 
}