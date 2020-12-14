function waveGenerator(canvas, context) {
	// let radius = getRandom(100,300)
	// let grdRadial = context.createRadialGradient(canvas.width/2, canvas.height/2, radius, 0, 50, radius);
	// grdRadial.addColorStop(0, "rgba(0,0,0,0.1");
	// grdRadial.addColorStop(1, "#fff");
	// context.beginPath();
	// // context.moveTo(750, 50);
	// context.arc(canvas.width/2, canvas.height/2,radius,0,2 * Math.PI);
	// context.fillStyle = grdRadial;
	// context.fill();
	// context.closePath();
	
	
	

	// let amp = getRandom(100,500)
	// let x1 = 0+50;
	// let y1 = canvas.height-waveHeight;
	// let x2 = canvas.width-50;
	// let y2 = y1;

	// let start = { x: x1,    				y: canvas.height  };
	// let cp1 =   { x: x1+amp,   			y: y1-amp  };
	// let cp2 =   { x: x2-amp,   			y: y2+amp-waveHeight  };
	// let end =   { x: canvas.width-50,   y: canvas.height-waveHeight };


	// let layersCount = getRandom(1,15);
	let layersCount = 1;
	let baseFrequency = 2;
	let offset = 100;
	// let maxAmplitude = 200;
	// let maxTrough = waveHeight;

	// Options
	let waveHeight = canvas.height/3;


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

	

	
	
	let colors = paletteGenerator()
	
	
	for (var i = 1; i <= layersCount; i++) {
		let shiftLeft = getRandom(1,200);
		let shiftRight = getRandom(1,200);
		let random1 = getRandom(1,1000);
		let random2 = getRandom(1,1000);
		let random3 = getRandom(1,1000);
		let random4 = getRandom(1,1000);
		topLeft.Y = topLeft.Y + shiftLeft;
		topRight.Y = topRight.Y + shiftRight;


		
		
		


		


		// Generate Wave Points Positions (Map-Reduce)
		const points = 10;
		const total = 10000;
		function generateControlPoints (total, points) {
			let max = total/1.2
			let arr = new Array(points);
			
			let sum = 0;
			// Generate X-Position
			do {
				for (let i = 0; i < points; i++) {
					arr[i] = Math.random();	
				}
				sum = arr.reduce((acc, val) => acc + val, 0);
				const scale = (total - points) / sum;
				arr = arr.map(val => Math.min(max, Math.round(val * scale) + 1));
				sum = arr.reduce((acc, val) => acc + val, 0);
			} while (sum - total);

			let points2 = {}
			
			for (let i = 0; i < points; i++) {
				points2[i] = {
					x: arr[i],
					y: 100
				}
				// arr[i] = Math.random();
				
			}
			
			// console.log(arr)
			// console.log(points2)
			
			return points2;
		};

		let points3 = generateControlPoints (total, points)
		console.log(points3.length)
		context.beginPath();
		context.moveTo(topLeft.X,topLeft.Y)
		
		Object.keys(points3).forEach(function(element,i) {
			context.bezierCurveTo(points3[i].x,points3[i].y, points3[i].x,points3[i].y);
			// console.log(i)
		});

		
		
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
		
		
		
		for (var i = 1; i <= baseFrequency; i++) {}
		// let position = {
		// 	cp1: 	{x: topLeft.X + random1, y: topLeft.Y - random2},
		// 	cp2: 	{x: topRight.X - random3, y: topRight.Y - random4}
		// }

		let position = {
			cp1: 	{x: topLeft.X + 100, y: topLeft.Y - 100},
			cp2: 	{x: topRight.X - 200, y: topRight.Y - 200},
			cpmid: 	{x: topRight.X - 500, y: topRight.Y - 200}
		}

		// context.beginPath();
		// context.moveTo(topLeft.X,topLeft.Y)
		// context.bezierCurveTo(position.cp1.x, position.cp1.y, position.cpmid.x, position.cpmid.y, position.cp2.x, position.cp2.y);
		// context.bezierCurveTo(position.cp2.x, position.cp2.y, position.cpmid.x, position.cpmid.y, topRight.X, topRight.Y);
		





		// Shadows
		if(i != 1) {
			context.shadowColor = "rgba(0,0,0,0.2)"
			context.shadowBlur = 50;
			context.shadowOffsetX = 30;
			context.shadowOffsetY = 10;
		}


		// Linear
		let gradient = context.createLinearGradient(topLeft.X, position.cp1.y, position.cp2.x, bottomRight.Y);
		gradient.addColorStop(1, colors.gradientTop);
		gradient.addColorStop(0, colors.gradientBottom);

		// Radial
		// let gradient = context.createRadialGradient(position.cp1.x, position.cp1.y, 0, position.cp2.x, position.cp2.y, canvasWidth);
		// gradient.addColorStop(1, colors.gradientTop);
		// gradient.addColorStop(0, colors.gradientBottom);


		// Bottom Line
		context.lineTo(bottomRight.X, bottomRight.Y);
		context.lineTo(bottomLeft.X, bottomLeft.Y);
		
		context.strokeStyle = "#fff";
		context.closePath();
		context.fillStyle = gradient;
		context.fill();

		// // Start and end points
		// context.fillStyle = 'blue';
		// context.beginPath();
		// context.arc(topLeft.X, topLeft.Y, 5, 0, 2 * Math.PI);  // Start point
		// context.arc(topRight.X, topRight.Y, 5, 0, 2 * Math.PI);      // End point
		// context.fill();

		// // Control points
		// context.fillStyle = 'red';
		// context.beginPath();
		// context.arc(position.cp1.x, position.cp1.y, 5, 0, 2 * Math.PI);  // Control point one
		// context.arc(position.cp2.x, position.cp2.y, 5, 0, 2 * Math.PI);  // Control point two
		// context.fill();
	}

	
	
	
	



	

	// Control points
	// context.fillStyle = 'red';
	// context.beginPath();
	// context.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
	// context.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
	// context.fill();

}



function waves() {
	let canvas = document.getElementById('waves');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	waveGenerator(canvas, context);
};