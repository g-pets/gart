function waveGenerator(canvas, context) {
	let radius = getRandom(100,300)
	let grdRadial = context.createRadialGradient(canvas.width/2, canvas.height/2, radius, 0, 50, radius);
	grdRadial.addColorStop(0, "rgba(0,0,0,0.1");
	grdRadial.addColorStop(1, "#fff");
	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2,radius,0,2 * Math.PI);
	context.fillStyle = grdRadial;
	context.fill();
	context.closePath();
}



function waves() {
	let canvas = document.getElementById('waves');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	waveGenerator(canvas, context);
};