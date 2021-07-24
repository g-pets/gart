import { Mesh, MeshPhongMaterial, PlaneGeometry, Float32BufferAttribute } from "three"
import SimplexNoise from "simplex-noise"

class Terrain {
	constructor() {
		this._geometry = this._createGeometry()
		this._material = new MeshPhongMaterial({
			vertexColors: true,
			flatShading: true,
			shininess: 1
		})

		this._mesh = new Mesh(this._geometry, this._material)
	}

	_createGeometry() {
		const dimension = 5000
		const segment = 100
		const vertices = segment + 1
		const simplex = new SimplexNoise()
		const geometry = new PlaneGeometry(dimension, dimension, segment, segment)
		geometry.rotateX(-Math.PI / 2)

		const colors = []

		for (let i = 0; i < vertices; i++) {
			for (let j = 0; j < vertices; j++) {
				const idx = i * vertices + j
				const ni = i / vertices - 0.5
				const nj = j / vertices - 0.5
				const fVal = (simplex.noise2D(ni, nj) + 1) / 2
				const sVal = (0.5 * simplex.noise2D(ni * 2, nj * 2) + 1) / 2
				const tVal = (0.25 * simplex.noise2D(ni * 4, nj * 4) + 1) / 2
				const vtx = (fVal + sVal + tVal) / 2

				geometry.attributes.position.setY(idx, Math.pow(vtx, 5) * 500)
				if (vtx > 0.8) {
					colors.push(0.83, 0.73, 0.26)
				} else if (vtx < 0.8 && vtx > 0.65) {
					colors.push(0.83, 0.73, 0.26)
				} else {
					colors.push(0.55, 0.95, 0.35)
				}
			}
		}

		geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
		geometry.computeVertexNormals()
		return geometry
	}

	get Mesh() {
		return this._mesh
	}
}

export default Terrain