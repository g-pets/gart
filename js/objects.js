function objectsGenerator(canvas, context) {
    let radius = getRandom(100,300);
	let grdRadial = context.createRadialGradient(-radius, -radius, 5, 0, 50, radius*2);
	grdRadial.addColorStop(1, "rgba(0,0,0,0.1");
	grdRadial.addColorStop(0, "#fff");
    context.translate(canvas.width/2, canvas.height/2)
    context.arc(0,0,radius,0,2 * Math.PI);
    context.fillStyle = grdRadial;
    context.fill();
}



function objects() {
	let canvas = document.getElementById('objects');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	objectsGenerator(canvas, context);
};