function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
   background("	#00FF00");
}
function modelLoaded(){
   console.log("model loaded/ PoseNet is intialised");
}
function gotPoses(results){
if(results.length>0){
  console.log(results);
}
}
