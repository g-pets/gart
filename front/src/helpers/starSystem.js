import { random } from "~/helpers/utils"


const generateMoons = () => {
	let moons = []
	for(let i = 1; i <= random(3,5); i++) {
		moons.push({
			radius: random(50,300),
			position: [random(1000,5000), random(100,500), random(3000,5000)]
		})
	}
	return moons
}




const generateStar = () => {
	return {
		radius: random(100,200),
		position: [0,1400,7000]
	}
}






export { generateStar, generateMoons }
