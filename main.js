function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent("gameconsole");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotResults);
}

function draw() {
	game();
}

function modelLoaded()
{
	console.log("Model Initialized");
}

function gotResults(results)
{
		if(results.length>0)
		{
			console.log(results);
			nosex = results[0].pose.nose.x;
			nosey = results[0].pose.nose.y;
		}
}





