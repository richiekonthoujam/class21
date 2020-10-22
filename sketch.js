function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(200, 200, 50, 100);
  fixedrect.shapeColor="blue"
  fixedrect.debug=true;


  movingrect=createSprite(300,300,150,100);
  movingrect.shapeColor="black"
  movingrect.debug=true;

  rect1=createSprite(450,100,100,150);
  rect1.shapeColor='yellow'

  rect2=createSprite(700,100,200,150);
  rect2.shapeColor='green'
}

function draw() {
  background(255,255,255);  
   movingrect.x = World.mouseX;
   movingrect.y = World.mouseY;
  
   console.log(movingrect.x-fixedrect.x)
   
  if (isTouching(movingrect,rect2)){
    movingrect.shapeColor="red";
  }
    else{
      movingrect.shapeColor="black";
    }
   
  drawSprites();
}


  

