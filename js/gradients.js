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
    let keyColor = this.getRandom(1,360);
    let hue = {
		top: keyColor,
		bottom: keyColor
    }
    
    let saturation = {
		top: this.getRandom(50,60),
		bottom: this.getRandom(40,50)
    }
    
	let lightness = {
		top: this.getRandom(1,10),
		bottom: this.getRandom(15,30)
    }
    
	return {
		top: "hsl(" +hue.top+ ", " +saturation.top+ "%, " +lightness.top+ "%)",
		bottom: "hsl(" +hue.bottom+ ", " +saturation.bottom+ "%, " +lightness.bottom+ "%)"
    }
}