function moonGenerator(canvas, context) {
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
	// grdRadial.addColorStop(1, colors.gradientTop);
	// grdRadial.addColorStop(0, colors.gradientBottom);
    // context.translate(x, y)
    context.arc(x,y,radius,0,2 * Math.PI);
    context.fillStyle = grdRadial;
	context.fill();
	
	// context.beginPath();
	// let moonlight = context.createRadialGradient(x, y, 0, x, y, radius*4);
	// moonlight.addColorStop(1, "rgba(255,255,255,0");
	// moonlight.addColorStop(0, "rgba(255,255,255,0.1");
	
	// context.fillStyle = moonlight;
	// context.fillRect(0, 0, canvas.width, canvas.height);
	
}



function moon() {
	let canvas = document.getElementById('moon');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	moonGenerator(canvas, context);
};