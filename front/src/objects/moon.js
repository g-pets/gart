import { SphereGeometry, MeshStandardMaterial, Mesh } from "three"
import { random } from "~/generator/utils"

class Moon {
	constructor() {
        this._geometry = this._createGeometry()
        this._material = this._createMaterial()
        this._mesh = new Mesh(this._geometry, this._material)
		this._mesh.position.set(random(-2000,2000), random(1000,2000), random(3000,5000))
    }

	_createGeometry() {
        const geometry = new SphereGeometry(200, 50, 50, 50, Math.PI * 2, 0, Math.PI * 2)
		return geometry
	}

	_createMaterial() {
		const material = new MeshStandardMaterial({
            // flatShading: true,
			color: 0xffffff,
		})
		return material
		
	}

	get Mesh() {
        return this._mesh
    }
}

export default Moon
