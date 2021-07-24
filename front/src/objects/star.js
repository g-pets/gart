import { SphereGeometry, MeshStandardMaterial, Mesh, PointLight } from "three"
import { random } from "~/utils"

let colors = [
	0x5ca0ff, 
	0xffffff,
	0xfffa5c,
	0xffa35c,
	0xff4747
]

const Star = (scene) => {
	let color = colors[random(0,colors.length-1)]
	let size = random(100,2000)
	let x = random(-5000,-1000)
	let y = random(-2000,2000)
	let z = random(10000,20000)
	var pointLight = new PointLight(color);
	pointLight.position.set(x, y, z);
	pointLight.add(new Mesh(
		new SphereGeometry(size, 100, 100),
		new MeshStandardMaterial({
			color: color,
			emissive: color,
		})))
	scene.add(pointLight)
	return pointLight
}

export default Star