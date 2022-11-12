noseX = 0;
noseY = 0;

wristLX = 0;
wristRX = 0;

difference = 0;

function setup(){
Canvas = createCanvas(400,400);
Canvas.position(720,130);
video = createCapture(VIDEO);
video.size(500,500);
video.position(200,80);
posenet = ml5.poseNet(video, modelloaded);
posenet.on('pose', gotposes);
}


function draw(){
background('#ff056d');
fill('#fcffff');
stroke('#fcffff');
square(noseX, noseY, difference);
document.getElementById('x4').innerHTML = "side of the square is " + difference + "px";
}

function modelloaded(){
console.log('Its Working');
}


function gotposes(results){
if(results.length>0){
console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
wristLX = results[0].pose.leftWrist.x;
wristRX = results[0].pose.rightWrist.x;

difference = floor(wristLX - wristRX);
console.log("noseX = " + noseX + "noseY = " + noseY);
console.log("LX = " + wristLX + "RX = " + wristRX);

}
}