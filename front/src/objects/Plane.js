import { Mesh, MeshPhongMaterial, PlaneGeometry, Float32BufferAttribute } from "three"
import SimplexNoise from "simplex-noise"

class Plane {
	constructor() {
		this._geometry = this._createGeometry()
		this._material = new MeshPhongMaterial({
			// vertexColors: true,
			flatShading: true,
			shininess: 1
		})
		this._mesh = new Mesh(this._geometry, this._material)
	}

	_createGeometry() {
		const dimension = 50
		const segment = 100
		const geometry = new PlaneGeometry(dimension, dimension, segment, segment)
		geometry.rotateX(-Math.PI / 2)
		return geometry
	}

	get Mesh() {
		return this._mesh
	}
}

export default Plane