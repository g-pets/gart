function fillBackground(canvas, ctx) {	
	// Options
	let paletteOptions = {
        hue: [1,360],
        saturation: [50,70],
        lightness: [30,80]
    }
	let colors = paletteGenerator(paletteOptions)
	let background = ctx.createLinearGradient(0,0,0,canvas.height);
	background.addColorStop(0, colors.gradientTop);
	background.addColorStop(0.5, colors.gradientMiddle);
	background.addColorStop(1, colors.gradientBottom);
	ctx.beginPath();
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);	
	ctx.beginPath();
	let mask = ctx.createLinearGradient(canvas.width,0,0,canvas.height);
	mask.addColorStop(0, "rgba(0,0,0,0.5)");
	mask.addColorStop(1, "transparent");
	ctx.fillStyle = mask;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
};

function background() {
	let background = document.getElementById('background');
	let ctx = background.getContext('2d');
	ctx.imageSmoothingQuality = "low"
	canvasSize(background, ctx);
	fillBackground(background, ctx);
};