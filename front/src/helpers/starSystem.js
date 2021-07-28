import { random } from "~/helpers/utils"


const moons = (radius, position) => {
	let moons = []
	for(let i = 1; i <= random(10,10); i++) {
		moons.push({
			radius: random(10,30),
			position: [position[0],radius*2*i,0]
		})
	}
	return moons
}


const generatePlanets = (starRadius) => {
	let planets = []
	let ae = starRadius*2
	for(let i = 1; i <= random(10,10); i++) {
		let radius = random(100,300)
		ae = ae+radius*6
		let position = [ae, 0, 0]
		planets.push({
			radius: radius,
			position: position,
			moons: moons(radius, position)
		})
	}
	return planets
}


const generateStar = () => {
	return {
		radius: random(1000,5000),
		position: [0,0,0]
	}
}



const starSystem = () => {
	let star = generateStar()
	return {
		star: star,
		planets: generatePlanets(star.radius),
	}
}



export { starSystem }
