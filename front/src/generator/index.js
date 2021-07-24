import { ref } from "vue"

import { generatePalette } from "./palette"
import { generateMoons } from "./moons"
import { generateShapes } from "./shapes"



const palette = ref({})
const moons = ref([])
const shapes = ref([])

export default function generateArt() {
	const generate = () => {
		palette.value = generatePalette()
		moons.value = generateMoons()
		shapes.value = generateShapes()
	}
	return { palette, moons, shapes, generateMoons, generate }
}