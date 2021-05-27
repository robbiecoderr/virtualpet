var dog,sadDog,happyDog, database;
var foodcount

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800,800);
dog=createSprite(400,400,50,50)
dog.addImage(happyDog)
var dogfood=database.ref("food")
dogfood.on("value",function(data){
foodcount=data.val().count
console.log(foodcount)
})
}

function draw() {
  background(46,139,87);
  textSize(30)
  stroke ("red")
  text(foodcount+" remaining food",30,150)
 if (keyDown(UP_ARROW))
 {
   feedthedog()
 }
  drawSprites();
}
function feedthedog()
{
foodcount=foodcount-1
database.ref("food").update({
  count:foodcount
})
}