song1hp = "";
song1ju = "";

lwy = 0;
lwx = 0;

rwy = 0;
rwx = 0;

function setup(){
    canvas = createCanvas(450 ,390);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", getPoses);
}

function draw(){
    image(video , 0 , 0 ,450 , 390)
}
function preload(){
    song1hp = loadSound("music.mp3");
    song1ju = loadSound("jugnu.mp3");
}
function sonply(){
    song1hp.play();
}
function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        console.log("left wrist x = " + lwx + "left wrist y = " + lwy)

        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rwx + "right wrist y = " + rwy)

    }

}
function modelLoaded() {
    console.log("modal loaded");
}
function sonsly(){
    song1hp.pause();
    song1ju.pause();
}
