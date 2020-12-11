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