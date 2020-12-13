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
	
	
	

	let amp = getRandom(100,500)
	let waveHeight = 200;
	let x1 = 0+50;
	let y1 = canvas.height-waveHeight;
	let x2 = canvas.width-50;
	let y2 = y1;

	let start = { x: x1,    				y: canvas.height-waveHeight  };
	let cp1 =   { x: x1+amp,   			y: y1-amp  };
	let cp2 =   { x: x2-amp,   			y: y2+amp-waveHeight  };
	let end =   { x: canvas.width-50,   y: canvas.height-waveHeight };


	let baseFrequency = getRandom(1,5);
	// let maxAmplitude = 200;
	let maxTrough = waveHeight;

	let pos = {
		start: 	{x: 1, y: 1},
		cp1: 	{x: 1, y: 1},
		cp2: 	{x: 1, y: 1},
		cp3: 	{x: 1, y: 1},
		cp4: 	{x: 1, y: 1},
		end: 	{x: 1, y: 1}
	}
	
	context.beginPath();
	context.moveTo(start.x,start.y)
	context.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
	context.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
	// context.moveTo(end.x, end.y);
	// context.lineTo(end.x, end.y);
	context.lineTo(end.x, end.y+waveHeight-20);
	context.lineTo(start.x, start.y+waveHeight-20);
	context.fillStyle = "#583256";
	context.strokeStyle = "#fff";
	context.lineWidth = 3;
	context.closePath();
	context.stroke();
	context.fill();
	



	// Start and end points
	context.fillStyle = 'blue';
	context.beginPath();
	context.arc(start.x, start.y, 5, 0, 2 * Math.PI);  // Start point
	context.arc(end.x, end.y, 5, 0, 2 * Math.PI);      // End point
	context.fill();

	// Control points
	context.fillStyle = 'red';
	context.beginPath();
	context.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
	context.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
	context.fill();

}



function waves() {
	let canvas = document.getElementById('waves');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	waveGenerator(canvas, context);
};