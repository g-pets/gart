import { SphereGeometry, MeshStandardMaterial, Mesh, PointLight } from "three"
import { random } from "~/generator/utils"

const generateMoon = (scene) => {
	let color = 0xff0000
	let size = random(10,200)
	let x = random(-2000,2000)
	let y = random(1000,2000)
	let z = random(3000,5000)
	var pointLight = new PointLight(color, 0.5);
	pointLight.position.set(x, y, z);
	pointLight.add(new Mesh(
		new SphereGeometry(size, 100, 100),
		new MeshStandardMaterial({
			color: color,
			flatShading: true
		})));
	scene.add(pointLight)
	return pointLight
}

export default generateMoon