var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passedFinish;
var obstacles;
var s,i;
var form, player, game,carS,Time,score;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var bronze_img, silver_img, gold_img,ground1;

var x;

var xSet;
var yVel, xVel;

function preload(){
  s=loadSound("sound/sliding.mp3")
  f2 = loadImage("images/f1.png");

  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  carS=loadSound("sound/car.wav");
  ground = loadImage("images/backg.png");
  ground1 = loadImage("images/backg1.png");
 // ground = loadImage("images/ground.png");
  bronze_img = loadImage("images/bronze.png");
  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }
 Time =0;
 score=0;
}


function draw(){
   //start the game
   background(ground);
   fill("white");
   stroke("black");
   textSize(30);
   if(frameCount%30===0){
      score=score+1;
   }
   text(" Time: "+score,displayWidth-200,30);
   //start the game
 
  //start the game
  if (playerCount === 3 && finishedPlayers === 0) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
   
    
  }

  //end the game
  if (finishedPlayers === 3) {
    game.update(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 3) {
    game.displayRanks();
  }
}
/*
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
    form.enter();
    console.log("hai");
    passedFinish = true;
  }
}*/
