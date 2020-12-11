let config = {
	stars: {
		count: 100,
		colorrange: [0,60,240],
	},
	colors: {
		bg: "#333",
		gradient: {
			top: "#262649",
			bottom: "#7D315A"
		}
	}
}

// this = config;


function getRandomColor() {
	let hue = this.getRandom(1,360);
	let saturation = this.getRandom(1,100);
	let lightness = this.getRandom(1,100);
	let color = "hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)";
	// let color = "hsl(100,20%,50%)";
	// console.log(color)
	return color;
};

function getRandomGradient() {

	// Random color
	let hue = this.getRandom(1,360);
	
	// Random saturation
	let saturation = {
		top: this.getRandom(60,80),
		bottom: this.getRandom(50,60)
	}
	// Random lightness
	let lightness = {
		top: this.getRandom(10,20),
		bottom: this.getRandom(20,30)
	}

	return {
		top: "hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)",
		bottom: "hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)"
	}
};

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function canvasSize(canvas, ctx) {
	let parentWidth = canvas.offsetWidth;
	let parentHeight = canvas.offsetHeight;
	let ratio = window.devicePixelRatio;
	
	if (ratio > 1) {
		canvas.width = parentWidth * ratio;
		canvas.height = parentHeight * ratio;
		// ctx.scale(window.devicePixelRatio, window.devicePixelRatio);					
	} else {
		canvas.width = parentWidth;
		canvas.height = parentHeight;
	}
};

function canvasBackground(canvas, ctx) {
	let background = ctx.createLinearGradient(0,0,0,canvas.height);

	let hue = this.getRandom(200,250);

	// Random saturation
	let saturation = {
		top: this.getRandom(40,70),
		bottom: this.getRandom(40,60)
	}
	// Random lightness
	let lightness = {
		top: this.getRandom(10,20),
		bottom: this.getRandom(30,50)
	}

	let randomGradient = {
		top: "hsl(" +hue+ ", " +saturation.top+ "%, " +lightness.top+ "%)",
		bottom: "hsl(" +hue+ ", " +saturation.bottom+ "%, " +lightness.bottom+ "%)"
	}
	background.addColorStop(0, randomGradient.top);
	background.addColorStop(1, randomGradient.bottom);
	console.log(randomGradient)
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

function addStars(canvas, ctx) {
	for (var i = 0; i < config.stars.count; i++) {
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let radius = Math.random() * 1.1;
		let hue = config.stars.colorrange[this.getRandom(0,config.stars.colorrange.length - 1)];
		let saturation = getRandom(50,80);
		let lightness = getRandom(75,90);
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 360);
		ctx.fillStyle = "hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)";
		// ctx.fillStyle = `"hsl(${hue}, ${saturation}%, ${lightness}%)"`;
		ctx.fill();
	}
};

function addMask(ctx) {
	let background = ctx.createLinearGradient(0,0,0,canvas.height);
	background.addColorStop(0, config.colors.gradient.top);
	background.addColorStop(1, config.colors.gradient.bottom);
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

function canvas() {
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	canvasSize(canvas, ctx);
	canvasBackground(canvas, ctx);
	addStars(canvas, ctx);
	// addShape(canvas, ctx);
	// this.addMask(ctx);

	// var centerX = canvas.width / 2;
	// var centerY = canvas.height / 2;
	// var radius = 80;
	// ctx.beginPath();
	  // ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	  // ctx.fillStyle = 'green';
	  // ctx.fill();
	  // ctx.lineWidth = 5;
	  // ctx.strokeStyle = '#003300';
	  // ctx.stroke();

};


canvas()