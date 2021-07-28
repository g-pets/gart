import { IcosahedronGeometry, MeshPhongMaterial, Mesh, PointLight } from "three"
// import { simpleStarVertexShader } from "~/shaders/simpleStarVertexShader.js"
// import { simpleStarFragmentShader } from "~/shaders/simpleStarFragmentShader.js"


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
		const light = new PointLight(0xffffff)
		light.power = 3000000
		light.position.set(0, 0, 0)
		light.castShadow = true
		// light.shadow.mapSize.width = 512; // default
		// light.shadow.mapSize.height = 512; // default
		light.shadow.camera.near = 0.5; // default
		light.shadow.camera.far = 1000000; // default
		return light
	}

	_createMaterial() {
		const material = new MeshPhongMaterial({
			// vertexColors: true,
			flatShading: true,
			color: 0xff5500,
			shininess: 100,
			// emissive: 0xff5500,
		})
		material.color.convertSRGBToLinear()
		return material
	}

	get Mesh() {
		let object = this._mesh
		// object.add(this._light)
		return object
	}
}

export default Star