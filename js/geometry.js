function drawTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}
  
function geometryGenerator(canvas, context) {

	let radius = getRandom(100,300);
	let padding = 100;
	let x = getRandom(radius+padding,canvas.width-radius-padding)
    let y = getRandom(radius,canvas.height/2)

	let paletteOptions = {
        hue: [1,120],
        saturation: [50,70],
        lightness: [30,80]
    }
	let colors = paletteGenerator(paletteOptions)

	let grdRadial = context.createRadialGradient(x-radius/2, y-radius/2, 0, x, y, radius*1.2);
	context.beginPath();
	grdRadial.addColorStop(1, "rgba(255,255,255,0.4");
	grdRadial.addColorStop(0, "rgba(255,255,255,0.9");
    context.arc(x,y,radius,0,2 * Math.PI);
    context.fillStyle = grdRadial;
    context.fill();
    
    drawTriangle(context)
}



function geometry() {
	let canvas = document.getElementById('waves');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	geometryGenerator(canvas, context);
};