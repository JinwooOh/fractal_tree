var angle = PI/4;

function setup(){
	createCanvas(400, 400);
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
	
	background(51);
	angle = slider.value();
	var len = 100;
	stroke(255);
	translate(200, height);//change the location of a branch 
	branch(100);
}

function branch(len){
	line(0, 0, 0, -len);
	translate(0, -len);
	
	if(len > 4){
		push();
		rotate(angle);
		branch(len * 0.6);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.6);
		pop();
	}
}