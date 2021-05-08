//Create variables here
var dogImg, dog1Img, database, foodS, foodStock;
var dog; 

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dog1Img = loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);
  dog = createSprite(250,250,150,150);
  dog.addImage(dogImg);
  dog.scale= 0.4;

  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1Img);
  }

  textSize(20);
  fill("white");
  text("Note: Press UP ARROW Key to feed drago milk!", 20,30); 

  drawSprites();
  //add styles here

}

function readStock(data){
    foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}


