function fillBackground(canvas, ctx) {	
	let colors = colorsGenerator()
	let background = ctx.createLinearGradient(0,0,0,canvas.height);
	background.addColorStop(0, colors.gradientTop);
	background.addColorStop(1, colors.gradientBottom);
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

function background() {
	let background = document.getElementById('background');
	let ctx = background.getContext('2d');
	canvasSize(background, ctx);
	fillBackground(background, ctx);
};