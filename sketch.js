
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background
var rocket1
var rocket2
var meteor
var canvas;
var backgroundImg, rocket1_img, rocket2_img
var database, gameState;
var form, player, playerCount;
var allPlayers
var rocket = [];
var explosion
var lifeimage,fuelimage
var powercoins,powercoinsImage

function preload()
{
	backgroundImg = loadImage("background.jpg")
	rocket1 = loadImage("rocket1.png")
	rocket2 = loadImage("rocket2.png")
	fuelimage = loadImage("fuel.png")
	lifeimage =loadImage("life.png")
	meteor = loadAnimation("meteor_speed1.gif")
	explosion = loadAnimation("explosion.jpg")
	powercoinsImage = loadImage("goldCoin.png")
}

function setup() {
canvas = createCanvas(windowWidth , windowHeight);
database = firebase.database()
//game = new Game()
//game.getState();
//game.start()
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  drawSprites();
  rocket1 = createSprite(width / 2 - 50, height - 100);
    rocket1.addImage("rocket1", rocket1_img);
   // rocket1.addImage("explosion",explosion)
    rocket1.scale = 0.07;
    rocket1.display()
    rocket2 = createSprite(width / 2 + 100, height - 100);
    rocket2.addImage("rocket2", rocket2_img);
    //rocket2.addImage("explosion",explosion)
    rocket2.scale = 0.07;
	rocket2.display()
}
  



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
