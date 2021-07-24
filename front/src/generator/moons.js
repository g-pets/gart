import { random } from "./utils"

const generateMoons = () => {
	let moons = []
	let lightSize = random(60,90)
	let lightPosition = {x: random(20,80), y: random(20,80)}
	for (let i = 0; i < 3; i++) {
		let size = random(7,15)
		let opacity = 1
		if (Math.random() < 0.5) {
			size = 0
			opacity = 0
		}
		moons.push({
			width: size+'em',
			height: size+'em',
			transform: `translate(${random(-10,80)}vw, ${random(-10,50)}vh)`,
			background: `radial-gradient(${lightSize}% ${lightSize}% at ${lightPosition.x}% ${lightPosition.y}%, #fff 0%, #000 100%)`,
			// filter: `blur(${i}px)`
			opacity: opacity
		})
	}
	return moons
}

export { generateMoons }