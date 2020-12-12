// Palette Generator


function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function canvasSize(canvas, ctx) {
	let parentWidth = canvas.offsetWidth;
	let parentHeight = canvas.offsetHeight;
	let ratio = window.devicePixelRatio;
	
	if (ratio > 1) {
		canvas.width = parentWidth * ratio;
		canvas.height = parentHeight * ratio;
		// ctx.scale(window.devicePixelRatio, window.devicePixelRatio);					
	} else {
		canvas.width = parentWidth;
		canvas.height = parentHeight;
	}
};


// let swatches = {
//     primary: [
//         "hsl(47,95%,68%)"
//     ]
// }




function colorsGenerator() {
    let colors = {};
    let hue = random(1,360);
    let hue2;
    if (hue < 320) {
        hue2 = hue + 40
    } else {
        hue2 = hue - 40
    }
    colors.primary = "hsl(" +hue+ ", 50%, 50%)";
    colors.secondary = "hsl(" +random(1,360)+ ", 50%, 50%)";
    
    // Gradient
    colors.gradientTop = "hsl(" +hue+ ", 50%, 10%)";
    colors.gradientBottom = "hsl(" +hue2+ ", 50%, 30%)";
    // colors.primary = primary;
    // let hueStart = hs || [1,360];
    // let hueEnd = he || [1,360];
    // // let hueRange = hr || [1,360];
    // // let saturationRange = sr || [0,100];
    // // let lightnessRange = lr || [0,100];
    // let colors = [];
    // for (var i = 0; i < swatches; i++) {
    //     let hue = random(hueStart,hueEnd);
    //     let saturation = random(30,60);
    //     let lightness = random(20,40);
    //     colors.push("hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)");
    // }
    return colors
}


function swatches(canvas, context, ) {
	let colors = colorsGenerator();
    let radius = 70;
    let colorsPos = canvas.height/2/2
    let gradPos = canvas.height/2
	let gap = 30;
	let x = radius + gap;
	Object.keys(colors).forEach(color=>{
        // //Rect
        // context.beginPath();
        // context.fillStyle = colors[color];
        // context.rect(x-radius, vertical-radius-gap*2, radius*2, 20);
        // context.fill();
		// Circle
        context.beginPath();
        context.fillStyle = colors[color];
		context.arc(x, colorsPos, radius, 0, 360);
		context.fill();
		// Title
        context.beginPath();
        context.fillStyle = '#ddd';
        context.font = '16px sans-serif';
        context.textAlign = "center";
		context.fillText(color, x, colorsPos+radius+gap, radius*2);
		context.fill();
		x = x + radius*2 + gap;
     });
    
    // Gradients
    context.beginPath();
    let gradient = context.createLinearGradient(0,0,0,300);
    gradient.addColorStop(0, colors.gradientTop);
    gradient.addColorStop(1, colors.gradientBottom);
    context.translate(gap,gradPos)
    context.fillStyle = gradient;
    context.fillRect(0, 0, 200, 300);
   
    // context.fill();
}



function palette() {
	let canvas = document.getElementById('palette');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	swatches(canvas, context);
};