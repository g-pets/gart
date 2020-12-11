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

function getRandomGradient() {
	let color = this.getRandom(170,300);
	let hue = {
		top: color,
		bottom: color - 40
	}
	let saturation = {
		top: this.getRandom(50,60),
		bottom: this.getRandom(50,60)
	}
	let lightness = {
		top: this.getRandom(5,10),
		bottom: this.getRandom(10,20)
	}
	return {
		top: "hsl(" +hue.top+ ", " +saturation.top+ "%, " +lightness.top+ "%)",
		bottom: "hsl(" +hue.bottom+ ", " +saturation.bottom+ "%, " +lightness.bottom+ "%)"
	}
};

let gradientColors = getRandomGradient()