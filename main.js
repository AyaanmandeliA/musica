song1hp = "";
song1ju = "";

function setup(){
    canvas = createCanvas(450 ,390);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
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
function sonsly(){
    song1hp.pause();
    song1ju.pause();
}
