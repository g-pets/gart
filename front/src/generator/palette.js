import { random, hueShift } from "./utils"


const generatePalette = (paletteOptions) => {
	let shift = 30
	paletteOptions = paletteOptions || {}
	let options = {
		hue: paletteOptions.hue || [1,360],
		saturation: paletteOptions.saturation || [40,50],
		lightness: paletteOptions.lightness || [30,70]
	}

	let palette = {}
	// Generate Base Color
	let hueBase = random(options.hue[0],options.hue[1]);
	let huePrev = hueShift(hueBase,-shift)
	let hueNext = hueShift(hueBase,shift)
	let saturationBase = random(options.saturation[0],options.saturation[1]);
	let lightnessBase = random(options.lightness[0],options.lightness[1]);    
	
	palette.base = "hsl(" +hueBase+ ", 100%, 50%)";
	palette.primary = "hsl(" +hueBase+ ", " +saturationBase+ "%, " +lightnessBase+ "%)";
	palette.pastel = "hsl(" +hueBase+ ", 30%, 70%)";
	palette.prev = "hsl(" +huePrev+ ", " +saturationBase+ "%, " +lightnessBase+ "%)";
	palette.next = "hsl(" +hueNext+ ", " +saturationBase+ "%, " +lightnessBase+ "%)";
	palette.complementary = "hsl(" +hueShift(hueBase,180)+ ", 100%, 50%)";
	palette.gradientTop = "hsl(" +hueNext+ ", 50%, 10%)";
	palette.gradientMiddle = "hsl(" +hueBase+ ", 50%, 20%)";
	palette.gradientBottom = "hsl(" +huePrev+ ", 50%, 30%)";

	return palette
}

export { generatePalette }