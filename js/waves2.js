// Control Points Generator
function pointsGenerator() {

	let width = 500
	let height = 800

	const layers = 1
	const frequency = 5
	const amplitude = 100
	
	let points = new Array(frequency)

	for (let i = 0; i < frequency; i++) {
		let p = i-1
		if (i === 0) {	// First point
			points[i] = {
				cp0: {x: 0, y: 0},
				cp1: {x: 0, y: 0},
				cp2: {x: 0, y: 0},
				cp4: {x: 0, y: 0}
			}
		} else if (i < frequency-1) {	// Middle points
		} else {	// Last point

		}
	}

	// let 


	
	return points
}



function curveGenerator(canvasWidth, canvasHeight) {
	let frequency = 5
	let amplitude = getRandom(100,200)	

	let maxLength = canvasWidth/1.2
	let sum = 0


	let body = {
		topLeft: {
			x: 0,
			y: canvasHeight - amplitude - 300
		},
		topRight: {
			x: canvasWidth,
			y: canvasHeight - amplitude - 300
		},
		bottomRight: {
			x: canvasWidth,
			y: canvasHeight,
		},
		bottomLeft: {
			x: 0,
			y: canvasHeight
		}
	}

	let waveSize = {
		min: body.topLeft.y + amplitude,
		max: body.topLeft.y - amplitude 
	}


	// Generate Lines Length
	let linesLength = new Array(frequency)
	do {
		for (let i = 0; i < frequency; i++) {
			linesLength[i] = Math.random();	
		}
		sum = linesLength.reduce((acc, val) => acc + val, 0);
		const scale = (canvasWidth - frequency) / sum;
		linesLength = linesLength.map(val => Math.min(maxLength, Math.round(val * scale) + 1));
		sum = linesLength.reduce((acc, val) => acc + val, 0);
	} while (sum - canvasWidth);



	// Generate Lines Points
	let lineX = new Array(frequency)
	let lineY = new Array(frequency)
	for (let i = 0; i < frequency; i++) {
		let prevX = lineX[i-1]
		let prevY = lineY[i-1]
		if (i === 0) {	// First point
			lineX[i] = {
				start: 0,
				end: linesLength[i]
			}
			lineY[i] = {
				start: body.topLeft.y,
				end: getRandom(waveSize.min,waveSize.max)
			}
		} else if (i < frequency-1) {	// Middle points
			lineX[i] = {
				start: prevX.end,
				end: prevX.end + linesLength[i]
			},
			lineY[i] = {
				start: prevY.end,
				end: getRandom(waveSize.min,waveSize.max)
			}
		} else {	// Last point
			lineX[i] = {
				start: prevX.end,
				end: canvasWidth
			}
			lineY[i] = {
				start: prevY.end,
				end: body.topRight.y
			}
		}
	}
	return {lineX, lineY, body}
}







function waveGenerator(canvas, context) {
	let layersCount = 1;
	const canvasHeight = canvas.height;
	const canvasWidth = canvas.width;
	// let cp3 = {x: (middle.x * 2) - cp2.x, y: (middle.y * 2) - cp2.y}
	

	for (var i = 1; i <= layersCount; i++) {
		
		// Draw Path
		let layer = i
		let points = curveGenerator(canvasWidth, canvasHeight)
		context.beginPath();
		context.moveTo(points.body.topLeft.x, points.body.topLeft.y);
		Object.keys(points.lineX).forEach(function(i) {
			let lineX = points.lineX[i]
			let lineY = points.lineY[i]
			context.bezierCurveTo(
				lineX.start, lineY.start,
				lineX.end, lineY.end,
				lineX.end, lineY.end,
			);
			
		});


		// Bottom Line
		context.lineTo(points.body.bottomRight.x, points.body.bottomRight.y);
		context.lineTo(points.body.bottomLeft.x, points.body.bottomLeft.y);
		context.lineTo(points.body.topLeft.x, points.body.topLeft.y);
		context.strokeStyle = "#fff"
		context.fillStyle = "#333"
		context.lineWidth = "4"
		context.lineJoin = "round"
		context.lineCup = "round"
		context.stroke()
		context.fill()
		context.closePath();
		
		
		
		// Test ––– Generate Wave Points Positions
		// let runs = getRandom(1000,10000);
		// function test1() {
		// 	var t0 = performance.now();
		// 	for (var tr = 0; tr < runs; tr++) {
		// 		curveGenerator(canvasWidth, canvasHeight);
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

	console.log(pointsGenerator())
};