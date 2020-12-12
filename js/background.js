function fillBackground(canvas, ctx) {	
	let gradientColors = gradientGenerator()
	let background = ctx.createLinearGradient(0,0,0,canvas.height);
	background.addColorStop(0, gradientColors.top);
	background.addColorStop(1, gradientColors.bottom);
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

// function fillBackground(canvas, ctx) {
// 	let colors = palette(230,280);

// 	let background = ctx.createLinearGradient(0,0,0,canvas.height);
// 	for (var i = 0; i < colors.length; i++) {
// 		background.addColorStop(Math.random(), colors[i]);
// 	}
	
// 	ctx.fillStyle = background;
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
// };

function background() {
	let background = document.getElementById('background');
	let ctx = background.getContext('2d');
	canvasSize(background, ctx);
	fillBackground(background, ctx);
};