leftWristx=0;
RightWristx=0;
diffrence=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized!');
}
    function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;
    diffrence=floor(leftWristx-rightWristx);
}
}
function draw(){
    background("#808080");
    textSize(diffrence);
    fill("#fa8072");
    text("Chirag",10,300);
}