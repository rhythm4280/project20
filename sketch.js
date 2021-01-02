var backgr,backgrimg,cat,mouse,catimg1,catimg2,catimg3,catimg4,mouseimg1,mouseimg2,mouseimg3,mouseimg4;
function preload() {
    backgrimg=loadAnimation("image/garden.png");
catimg1=loadAnimation("image/tomOne.png");
catimg2=loadAnimation("image/tomTwo.png");
catimg3=loadAnimation("image/tomThree.png");
catimg4=loadAnimation("image/tomFour.png");
mouseimg1=loadAnimation("image/jerryOne.png");
mouseimg2=loadAnimation("image/jerryTwo.png");
mouseimg3=loadAnimation("image/jerryThree.png");
mouseimg4=loadAnimation("image/jerryFour.png");
    }

function setup(){
    createCanvas(1000,800);
  backgr=createSprite(200,200,200,200);
  backgr.addAnimation(backgrimg);

cat=createSprite(100,100,10,20,);
cat.addImage(catimg1);

mouse=createSprite(120,50,20,10);
mouse.addImage(mouseimg1);
}

function draw() {

    background(255);
    
    drawSprites();
    text(mouseX+','+mouseY, 10,45);
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}
 if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("catlastimage",catimg3);
     cat.changeAnimation("catlastimage");
 }


}
