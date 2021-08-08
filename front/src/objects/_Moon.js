import { IcosahedronGeometry, MeshPhongMaterial, Mesh } from "three"

class Moon {
	constructor({radius=10, position=[0,0,0]}) {
		this._geometry = this._createGeometry(radius)
		this._material = this._createMaterial()
		let mesh = new Mesh(this._geometry, this._material)
		mesh.position.set(position[0], position[1], position[2])
		this._mesh = mesh
	}

	_createGeometry(radius) {
		const geometry = new IcosahedronGeometry(radius, 1)
		return geometry
	}

	_createMaterial() {
		const material = new MeshPhongMaterial({
			// vertexColors: true,
			flatShading: true,
			color: 0x888888,
			shininess: 0,
			
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

export default Moon