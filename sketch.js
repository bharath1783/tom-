var bgImg ;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat4.png")
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(900,500);
    //create tom and jerry sprites here
    cat = createSprite(700,400);
    cat.addImage(catImg1);
    cat.scale = 0.1;

    mouse = createSprite(200,400);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1;
    


}

function draw() {

    background(bgImg);
     
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.x = 300;
        cat.addAnimation("cat Standing",catImg3);
        cat.changeAnimation("cat Standing");

        mouse.velocityX = 0;
        mouse.addAnimation("mouse Teasing",mouseImg2);
        mouse.changeAnimation("mouse Teasing");


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
 
  
  
  if (keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("tom running",catImg2);
        cat.changeAnimation("tom running");
        mouse.addAnimation("mouse Teasing",mouseImg2);
        mouse.changeAnimation("mouse Teasing");
        mouse.frameDelay = 25;

    }





}
