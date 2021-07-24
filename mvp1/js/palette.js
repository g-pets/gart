// Utils
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
	} else {
		canvas.width = parentWidth;
		canvas.height = parentHeight;
	}
};


function hueShift(h,s) { 
    h+=s; while (h>=360.0) h-=360.0; while (h<0.0) h+=360.0; return h; 
}

// Palette Generator
function paletteGenerator(paletteOptions) {
    // Basic Options
    let shift = 30;
    paletteOptions = paletteOptions || {}
    let options = {
        hue: paletteOptions.hue || [1,360],
        saturation: paletteOptions.saturation || [40,50],
        lightness: paletteOptions.lightness || [30,70]
    }
    let colors = {};

    // Generate Base Color
    let hueBase = random(options.hue[0],options.hue[1]);
    let huePrev = hueShift(hueBase,-shift)
    let hueNext = hueShift(hueBase,shift)
    let saturationBase = random(options.saturation[0],options.saturation[1]);
    let lightnessBase = random(options.lightness[0],options.lightness[1]);    
    
    colors.base = "hsl(" +hueBase+ ", 100%, 50%)";
    colors.primary = "hsl(" +hueBase+ ", " +saturationBase+ "%, " +lightnessBase+ "%)";
    colors.pastel = "hsl(" +hueBase+ ", 30%, 70%)";
    colors.prev = "hsl(" +huePrev+ ", " +saturationBase+ "%, " +lightnessBase+ "%)";
    colors.next = "hsl(" +hueNext+ ", " +saturationBase+ "%, " +lightnessBase+ "%)";
    colors.complementary = "hsl(" +hueShift(hueBase,180)+ ", 100%, 50%)";
    colors.gradientTop = "hsl(" +hueNext+ ", 50%, 10%)";
    colors.gradientMiddle = "hsl(" +hueBase+ ", 50%, 20%)";
    colors.gradientBottom = "hsl(" +huePrev+ ", 50%, 30%)";
   
    return colors
}


function swatches(canvas, context, ) {
    // Options
    let paletteOptions = {
        hue: [1,360],
        saturation: [50,70],
        lightness: [30,80]
    }
	let colors = paletteGenerator(paletteOptions);
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
    // context.beginPath();
    // let gradient = context.createLinearGradient(0,0,0,300);
    // gradient.addColorStop(0, colors.gradientTop);
    // gradient.addColorStop(1, colors.gradientBottom);
    // context.translate(gap,gradPos)
    // context.fillStyle = gradient;
    // context.fillRect(0, 0, 200, 300);
   
    // context.fill();
}



function palette() {
	let canvas = document.getElementById('palette');
	let context = canvas.getContext('2d');
	canvasSize(canvas, context);
	swatches(canvas, context);
};