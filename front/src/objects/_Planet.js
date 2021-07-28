import { IcosahedronGeometry, MeshPhongMaterial, Mesh } from "three"

class Planet {
	constructor({radius=10, position=[0,0,0]}) {
		this._geometry = this._createGeometry(radius)
		this._material = this._createMaterial()
		let mesh = new Mesh(this._geometry, this._material)
		mesh.position.set(position[0], 0, 0)
		this._mesh = mesh
	}

	_createGeometry(radius) {
		const geometry = new IcosahedronGeometry(radius, 5)
		return geometry
	}

	_createMaterial() {
		const material = new MeshPhongMaterial({
			// vertexColors: true,
			flatShading: true,
			color: 0x00ff00,
			shininess: 100,
			// emissive: 0x00ff00,
			
		})
		material.color.convertSRGBToLinear()
		return material
	}

	get Mesh() {
		let mesh = this._mesh
		mesh.castShadow = true
		mesh.receiveShadow = true
		return mesh
	}
}

export default Planet