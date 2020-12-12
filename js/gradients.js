let gradients = {
    top: [
        '#262649',
        '#280088',
        '#192169'
    ],
    bottom: [
        '#7A2E57',
        '#1C79A7',
        '#C96346'
    ],
};




function randomGradient() {
    return {
        top: gradients.top[Math.floor(Math.random() * gradients.top.length)],
        bottom: gradients.bottom[Math.floor(Math.random() * gradients.bottom.length)],
    }
}


function palette(hs, he) {
    let hueStart = hs || [1,360];
    let hueEnd = he || [1,360];
    // let hueRange = hr || [1,360];
    // let saturationRange = sr || [0,100];
    // let lightnessRange = lr || [0,100];
    let swatches = random(2,6);
    let colors = [];
    for (var i = 0; i < swatches; i++) {
        let hue = random(hueStart,hueEnd);
        let saturation = random(30,60);
        let lightness = random(20,40);
        colors.push("hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)");
    }
    console.log(colors)
    return colors;
}

function gradientGenerator() {

    let keyColor = getRandom(180,300);
    let hue = {
		top: keyColor,
		bottom: keyColor + getRandom(0,40)
    }
    
    let saturation = {
		top: getRandom(60,70),
		bottom: getRandom(40,60)
    }
    
	let lightness = {
		top: this.getRandom(5,10),
		bottom: this.getRandom(15,25)
    }
    
	return {
		top: "hsl(" +hue.top+ ", " +saturation.top+ "%, " +lightness.top+ "%)",
		bottom: "hsl(" +hue.bottom+ ", " +saturation.bottom+ "%, " +lightness.bottom+ "%)"
    }
}