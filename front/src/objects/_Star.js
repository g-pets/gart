import { IcosahedronGeometry, MeshStandardMaterial, Mesh, PointLight } from "three"
import { random } from "~/utils"

let colors = [
	0x5ca0ff, 
	0xffffff,
	0xfffa5c,
	0xffa35c,
	0xff4747
]

let color = colors[random(0,colors.length-1)]

class Star {
	constructor({radius=30, position=[0,0,0]}) {
		this._geometry = this._createGeometry(radius)
		this._material = this._createMaterial()
		this._light = this._createLigh()
		let mesh = new Mesh(this._geometry, this._material)
		mesh.position.set(position[0], position[1], position[2])
		this._mesh = mesh
	}

	_createGeometry(radius) {
		const geometry = new IcosahedronGeometry(radius, 5)
		return geometry
	}

	_createLigh() {
		const light = new PointLight(color)
		light.power = 200000
		light.position.set(0, 0, 0)
		light.castShadow = true
		light.shadow.mapSize.width = 1024; // default
		light.shadow.mapSize.height = 1024; // default
		light.shadow.camera.near = 0.5; // default
		light.shadow.camera.far = 1000000; // default
		return light
	}

	_createMaterial() {
		const material = new MeshStandardMaterial({
			// vertexColors: true,
			// flatShading: true,
			color: color,
			emissive: color,
		})
		material.color.convertSRGBToLinear()
		return material
	}

	get Mesh() {
		let object = this._mesh
		object.add(this._light)
		return object
	}
}

export default Star