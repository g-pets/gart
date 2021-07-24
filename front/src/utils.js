
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


const canvasSize = (canvas, ctx) => {
	let parentWidth = canvas.offsetWidth
	let parentHeight = canvas.offsetHeight
	let ratio = window.devicePixelRatio
	
	if (ratio > 1) {
		canvas.width = parentWidth * ratio;
		canvas.height = parentHeight * ratio;
	} else {
		canvas.width = parentWidth;
		canvas.height = parentHeight;
	}
};

const getRandomGradient = () => {
	let color = this.getRandom(170,300);
	let hue = {
		top: color,
		bottom: color - 40
	}
	let saturation = {
		top: this.getRandom(50,60),
		bottom: this.getRandom(50,60)
	}
	let lightness = {
		top: this.getRandom(5,10),
		bottom: this.getRandom(10,20)
	}
	return {
		top: "hsl(" +hue.top+ ", " +saturation.top+ "%, " +lightness.top+ "%)",
		bottom: "hsl(" +hue.bottom+ ", " +saturation.bottom+ "%, " +lightness.bottom+ "%)"
	}
}

function hueShift(h,s) { 
    h+=s; while (h>=360.0) h-=360.0; while (h<0.0) h+=360.0; return h; 
}

// Palette Generator
const paletteGenerator = (paletteOptions) => {
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


const backgroundGradient = (ctx, width, height, c1, c2, c3) => {
	let gradient = ctx.createLinearGradient(0,0,0,width)
	gradient.addColorStop(0, c1)
	gradient.addColorStop(0.5, c2)
	gradient.addColorStop(1, c3)
	ctx.fillStyle = gradient
	ctx.fillRect(0, 0, width, height)
}

export { getRandom, random, canvasSize, getRandomGradient, paletteGenerator, backgroundGradient }