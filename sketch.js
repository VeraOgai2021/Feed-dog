var dog,sadDog,happyDog;
var milk, milkimg;
var emptyMilk, emptyMilkimg;
var feed;
var feeddog;
var addfood;
var x=100;
var y=100;
var gameState = 0;
var playerCount;
var database;
var form, player, game;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkimg=loadImage("Images/Milk.png");
  emptyMilkimg=loadImage("Images/milkImage.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);

  drawSprites();
}

//function to read food Stock
//function to update food stock and last fed time
//function to add food in stock

function addFoods(){
  //foodS++;
    milk=createSprite(x,y,10,10);
    milk.scale=0.1;
    milk.addImage(milkimg);
    x=x+50;
    if(x>=600){
      x=100;
      y=y+100;
    }
  /*database.ref('/').update({
    Food:foodS
  })*/
}

function feedDog(){
  if(x===100){
    x=x;
  } else{
    x=x-50;
  }
  /*if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }*/
  if(x===100){
    dog.addImage(happyDog);
    milk=createSprite(720,200,10,10);
    milk.addImage(milkimg);
    milk.scale=0.1;
  }
  milk.destroy();
}