var canvas = document.querySelector('.canvas');
var windowX = window.innerWidth;
var windowY = window.innerHeight;
window.addEventListener('resize', function(){
	windowX = window.innerWidth;
	windowY = window.innerHeight;
	init();
});
canvas.height = window.windowY;
canvas.width = window.windowX;
var c = canvas.getContext('2d');
var mouse = {
	x: undefined,
	y: undefined
}
canvas.addEventListener('mousemove', function(e){
	mouse.x = e.x;
	mouse.y = e.y;
});
var colorArray = ['#3c82f2', '#36ceed', '#35ed97', '#3f3ce0', '#e03c5f'];
var maxR = 40;
var minR = 2;
function Circle(x, y, radius, mathPi, xSpeed, ySpeed, windowX, windowY){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.windowX = windowX;
	this.windowY = windowY;
	this.colorArray = colorArray[Math.floor(Math.random() * colorArray.length)];
	this.draw = function(){
	c.strokeStyle = 'rgba(0,0,0,.1)';
	c.fillStyle = this.colorArray;
	c.fill();
	c.beginPath();
	c.arc(this.x, this.y, this.radius, mathPi, false);
	c.stroke();
	}

	this.update = function(){
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x + this.radius > this.windowX || this.x - this.radius < 0) {
			this.xSpeed = -this.xSpeed;
		}
		if (this.y + this.radius > this.windowY || this.y - this.radius < 0) {
			this.ySpeed = -this.ySpeed;
		}
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
			this.radius += 1;
			if(this.radius > 50){
				this.radius -= 1;
			}
			else if (this.radius < maxR) {
				this.radius += 1;
			}
		}else if (this.radius > minR) {
			this.radius -= 1;
		}
		this.draw();
	}
}

var circleArray = [];

function init(){
	circleArray = [];
	for(var i = 0; i < 800; i++){
	var x = Math.random() * windowX;
	var y = Math.random() * windowY;
	var radius = Math.random() * 3 + 1;
	var mathPi = Math.PI * 2;
	var xSpeed = (Math.random() - 0.5);
	var ySpeed = (Math.random() - 0.5);
	circleArray.push(new Circle(x, y, radius, mathPi, xSpeed, ySpeed, windowX, windowY));
}
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, windowX, windowY);
	for(var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}
}
init();
animate();