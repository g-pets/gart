function addStars(canvas, ctx) {
	for (var i = 0; i < config.stars.count; i++) {
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let radius = Math.random() * 1.1;
		// let hue = config.stars.colorrange[getRandom(0,config.stars.colorrange.length - 1)];
		// let saturation = getRandom(30,50);
		// let lightness = getRandom(55,70);
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 360);
		// ctx.fillStyle = "hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)";
		ctx.fillStyle = "rgba(255,255,255,0.5)";
		ctx.fill();
	}
};

function addMask(canvas, ctx) {
    let mask = ctx.createLinearGradient(0,0,0,canvas.height);
	mask.addColorStop(0, "transparent");
	mask.addColorStop(1, "#fff");
    ctx.fillStyle = mask;
    ctx.globalCompositeOperation = "destination-out";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
};

function stars() {
	let canvas = document.getElementById('stars');
	let ctx = canvas.getContext('2d');
	canvasSize(canvas, ctx);
	addStars(canvas, ctx);
	addMask(canvas, ctx);
};
