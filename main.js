var song = "";
var song2 = "";
scoreleftwrist = 0;
scorerightwrist = 0;
leftwristy = 0;
leftwristx = 0;
rightwristy = 0;
lx = 0;
rightwristx = 0;
rx = 0;
songstat1 = "";
songstat2 = "";
function preload()
{
    song = loadSound("ඞඞඞ.mp3");
    song2 = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses()
{
    if(results[0].length>0)
    {
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.leftWrist.x;
        rightwristy = results[0].pose.leftWrist.y;
        scoreleftwrist = results[0].pose.keypoints[9].score;
    }
}

function draw()
{
    image(video, 0, 0, 500, 500);

    fill("#00FFD9");
    stroke("#FF0000");
    songstat1 = song.isPlaying();
    songstat2 = song2.isPlaying();
    if(scoreleftwrist>0.2)
    {
        circle(rightwristx, rightwristy, 20);
        song2.stop();
    }
    if(songstat1 = "false")
    {
        song.play();
    }
    if(scorerightwrist>0.2)
    {
        circle(rightwristx, rightwristy, 20);
        song.stop();
    }
    if(songstat2 = "false")
    {
        song2.play();
    }
}
