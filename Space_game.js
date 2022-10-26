let pic;
let pic1;
let sound;
let font;
var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;


function preload() {
  pic = loadImage('asset/Galaxy.jpg');
  pic1 = loadImage('asset/istockphoto-91633822-612x612.jpg');
  pic2 = loadImage('asset/hungry-lunch.gif');
  sound = loadSound('asset/mixkit-arcade-video-game-scoring-presentation-274.wav');

}

function setup() {
  
  createCanvas(400, 400);
}

function draw() {
	if(screen == 0){
    begning()
  }else if(screen == 1){
    sound.play();
  	gameStart()
  }else if(screen==2){
  	endding()
  }	
}

function begning(){
		background(pic1)
		fill(255)
		textAlign(CENTER);
    textFont("monospace", 20);
		text('WELCOME TO SPACE-CATCH', width/2, height/2 )
		text('click to start', width/2 , height/ 2 + 20);
		reset();
}

function gameStart(){
  background(pic);
  text("score = " + score, 200,20)
  noStroke();
  if (score== 0)
  fill('0');
  ellipse(x,y,20,20)
  fill('0')
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
  if(score==15){
    imageMode(CORNER);
    background(pic2);
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endding(){
  background(pic1)
  textAlign(CENTER);
  fill(255)
  textFont("monospace", 15);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
