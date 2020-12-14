// Generate Control Points Positions
function generateControlPoints (canvasWidth, canvasHeight, amplitude, frequency) {
	
	let topLeft = {x: 0, y: amplitude};
	let topRight = {x: canvasWidth, y: canvasHeight - amplitude};
	let bottomRight = {x: canvasWidth, y: canvasHeight};
	let bottomLeft = {x: 0, y: canvasHeight};

	let controlPoints = new Array(frequency);
	for (let i = 0; i < frequency; i++) {	
		controlPoints[i] = {
			x: getRandom(0,canvasWidth),
			y: getRandom(100,canvasHeight - amplitude)
		}
	}
	controlPoints.sort((a, b) => (a.x > b.x) ? 1 : -1)
	return controlPoints;
};






function waveGenerator(canvas, context) {

	let waveHeight = canvas.height/3;
	// let layersCount = getRandom(1,15);
	let layersCount = 0;
	let baseFrequency = getRandom(1,10);
	let offset = 0;

	// Options
	


	// Const
	const canvasHeight = canvas.height;
	const canvasWidth = canvas.width;
	const bottomLeft = {
		X: 0 - offset,
		Y: canvasHeight
	};
	const bottomRight = {
		X: canvasWidth + offset,
		Y: canvasHeight
	};

	// Lets
	let topLeft = {
		X: -offset,
		Y: canvasHeight - waveHeight
	};

	let topRight = {
		X: canvasWidth+offset,
		Y: canvasHeight - waveHeight
	}

	let coord = {
		start: {
			x: 100,
			y: 200
		},
		
		cp1: {
			x: 400,
			y: 100
		},
		cp2: {
			x: 100,
			y: 100
		},
		cp3: {
			x: 400,
			y: 200
		},
		
		cp4: {
			x: 500,
			y: 150
		},
		cp5: {
			x: 600,
			y: 600
		},
		cp6: {
			x: 700,
			y: 150
		},

		
	}

	context.beginPath();
    context.moveTo(coord.start.x,coord.start.y);
	// context.bezierCurveTo(coord.cp1.x,coord.cp1.y,coord.cp2.x,coord.cp2.y,coord.cp3.x,coord.cp3.y);

	// context.bezierCurveTo(100, 100, 200, 100, 300, 100);
	context.beginPath();
    context.moveTo(75,40);
    context.bezierCurveTo(75,37,70,25,50,25);
    context.bezierCurveTo(20,25,20,62.5,20,62.5);
    context.bezierCurveTo(20,80,40,102,75,120);
    context.bezierCurveTo(110,102,130,80,130,62.5);
    context.bezierCurveTo(130,62.5,130,25,100,25);
    context.bezierCurveTo(85,25,75,37,75,40);
    context.fill();

	// context.bezierCurveTo(coord.cp4.x,coord.cp4.y,coord.cp5.x,coord.cp5.y,coord.cp6.x,coord.cp6.y);
	
	// context.bezierCurveTo(20,25,20,62.5,20,62.5);
    // context.bezierCurveTo(20,80,40,102,75,120);
    // context.bezierCurveTo(110,102,130,80,130,62.5);
    // context.bezierCurveTo(130,62.5,130,25,100,25);
	// context.bezierCurveTo(85,25,75,37,75,40);
	context.lineWidth = "4"
	context.strokeStyle = "#fff"
    context.stroke();

	for (var i = 1; i <= layersCount; i++) {
		topLeft.Y = topLeft.Y + getRandom(1,200);
		topRight.Y = topRight.Y + getRandom(1,200);

		
		const total = canvasWidth;
		const frequency = baseFrequency;
		let controlPoints = generateControlPoints (canvasWidth, canvasHeight, waveHeight, frequency);


		
		// Draw Path
		context.beginPath();
		context.moveTo(topLeft.X,topLeft.Y)
		Object.keys(controlPoints).forEach(function(i) {
			context.lineTo(controlPoints[i].x,controlPoints[i].y);
		});


		// Bottom Line
		context.lineTo(topRight.X, topRight.Y);
		context.lineTo(bottomRight.X, bottomRight.Y);
		context.lineTo(bottomLeft.X, bottomLeft.Y);
		context.lineTo(topLeft.X,topLeft.Y);
		context.lineJoin = "round"
		context.lineCup = "round"
		context.lineWidth = "4"
		context.strokeStyle = "#fff"
		context.stroke()
		// context.fillStyle = gradient;
		// context.fill();
		context.closePath();
		
		
		
		// Test ––– Generate Wave Points Positions
		// let runs = getRandom(1000,10000);
		// function test1() {
		// 	var t0 = performance.now();
		// 	for (var tr = 0; tr < runs; tr++) {
		// 		generateControlPoints(total, points);
		// 	}
		// 	var t1 = performance.now();
		// 	// console.log(`Function 1 took: ${((t1 - t0) / runs).toFixed(4)} milliseconds (${t1-t0} ms / ${runs} runs)`);
		// 	console.log(`Took: ${((t1 - t0) / runs).toFixed(4)} ms`);
		// }
		// test1()
	}

}



function waves() {
	let canvas = document.getElementById('waves');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	waveGenerator(canvas, context);
};