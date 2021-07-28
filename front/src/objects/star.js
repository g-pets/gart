import { SphereBufferGeometry, Mesh, ShaderMaterial, Vector4, PointLight } from "three"
import { starVertexShader } from "~/shaders/starVertexShader.js"
import { starFragmentShader } from "~/shaders/starFragmentShader.js"

class Star {
	constructor({radius=30, distance=5}) {
		this._geometry = this._createGeometry(radius)
		this._material = this._createMaterial()
		this._light = this._createLigh()
		let mesh = new Mesh(this._geometry, this._material)
		mesh.position.set(distance, 0, 0)
		this._mesh = mesh
	}

	_createGeometry(radius) {
		const geometry = new SphereBufferGeometry(radius, 50, 50)
		return geometry
	}
	

	_createMaterial() {
		const material = new ShaderMaterial({
			uniforms: {
				time: { value: 0 },
				resolution: { value: new Vector4() }
			},
			vertexShader: starVertexShader,
			fragmentShader: starFragmentShader,
		})
		return material
	}

	_createLigh() {
		const light = new PointLight(0xffffff)
		light.power = 30000
		light.position.set(0, 0, 0)
		light.castShadow = true
		// light.shadow.mapSize.width = 512; // default
		// light.shadow.mapSize.height = 512; // default
		light.shadow.camera.near = 0.5; // default
		light.shadow.camera.far = 1000; // default
		return light
	}

	get Mesh() {
		let object = this._mesh
		object.add(this._light)
		return object
	}
}

export default Star