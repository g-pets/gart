function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};





// Time Test

function timeTest(func) {
	let runs = getRandom(1000,10000);
	var t0 = performance.now();
	for (var tr = 0; tr < runs; tr++) {
		// let total = getRandom(100,100000);
		// generateControlPointsMapReduce(total, points)
		func();
	}
	var t1 = performance.now();
	console.log(`---- Took: ${((t1 - t0) / runs).toFixed(4)} milliseconds (${t1-t0} ms / ${runs} runs)`);
}

// function canvasSize(canvas, ctx) {
// 	let parentWidth = canvas.offsetWidth;
// 	let parentHeight = canvas.offsetHeight;
// 	let ratio = window.devicePixelRatio;
	
// 	if (ratio > 1) {
// 		canvas.width = parentWidth * ratio;
// 		canvas.height = parentHeight * ratio;
// 		// ctx.scale(window.devicePixelRatio, window.devicePixelRatio);					
// 	} else {
// 		canvas.width = parentWidth;
// 		canvas.height = parentHeight;
// 	}
// };

function canvasSize(canvas, ctx) {
  
	var ratio = window.devicePixelRatio || 1;
	
	canvas.width  = size * ratio;
	canvas.height = size * ratio;
	
	// TweenLite.set(canvas, { width: size, height: size });
	
	ctx.scale(ratio, ratio);
}

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

// let gradientColors = getRandomGradient()