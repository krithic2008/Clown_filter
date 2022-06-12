function preload(){
    
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    //rect(20,20,50,50);
    video=createCapture(VIDEO);
    video.hide();
    
    
}
function draw(){    
    //background("white");
    //rect(mouseX,mouseY,50,50);
    image(video,0,0,300,300)
}

function takeSnapshot(){
    save ("img1.jpg")
}