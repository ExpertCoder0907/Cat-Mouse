var cat, mouse;
function preload() {
    //load the images here
    cat1Img = loadImage("cat1.png");
    cat2Img = loadImage("cat2.png");
    cat3Img = loadImage("cat3.png");
    cat4Img = loadImage("cat4.png");
    gardenImg = loadImage("garden.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadImage("mouse2.png");
    mouse3Img = loadImage("mouse3.png");
    mouse4Img = loadImage("mouse4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    mouse = createSprite(200, 200, 50, 80);
    mouse.debug = true;
    mouse.shapeColor = "Orange";
    mouse.addImage("mouse", mouse2Img);
    mouse.scale = 0.07;
    cat = createSprite(400, 200, 80, 30);
    cat.debug = true;
    cat.shapeColor = "black";
    cat.addImage("cat", cat4Img);
    cat.scale = 0.1;
}

function draw() {

    background(255, 255, 255);
    //Condition to evalute if tom and jerry collide
    if(mouse.x - cat.x < cat.width/2 + mouse.width/2
        && cat.x - mouse.x < cat.width/2 + mouse.width/2
        && mouse.y - cat.y < cat.height/2 + mouse.height/2
        && cat.y - mouse.y < cat.height/2 + mouse.height/2){
        mouse.addImage("mouse", mouse1Img);
        cat.addImage("cat", cat1Img);
        cat.velocityX = 0;
      }
    if(keyPressed === LEFT_ARROW){
      mouse.addImage("mouse", mouse3Img);
    }
    if(keyPressed === RIGHT_ARROW){
      cat.addImage("cat", mouse2Img);
      cat.velocityX = -3;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
