<template lang="pug">
canvas.layer.webgl(ref="webgl" @click="updateScene()")
</template>

<script>
import { ref, onMounted } from "vue"
// import { random } from "~/utils"
// import * as THREE from "three"
import {
	WebGLRenderer,
	PerspectiveCamera,
	Scene,
	Color,
	DirectionalLight,
	AmbientLight
} from "three"
import Terrain from '~/objects/terrain.js'
import generateMoon from '~/objects/moon2.js'
import { random } from "~/generator/utils"
// import Water from '~/generator/water.js'
export default {
	setup() {
		const webgl = ref(null)


		function setup(canvas) {
			const renderer = new WebGLRenderer({ canvas, antialias: true })
			renderer.setSize(canvas.clientWidth, canvas.clientHeight)

			// Camera
			let cameraSettings = {
				fieldOfView: 35,
				aspectRatio: canvas.clientWidth / canvas.clientHeight,
				near: 0.1,
				far: 10000
			}
			const camera = new PerspectiveCamera(cameraSettings.fieldOfView, cameraSettings.aspectRatio, cameraSettings.near, cameraSettings.far)
			camera.position.set(100, 800, -2000)
			camera.lookAt(0, 550, 0)

			const scene = new Scene()
			scene.background = new Color(0x000000)
			

			const dirLight = new DirectionalLight(0xFFFFFF, 1)
			dirLight.position.set(0, -10, 10)
			scene.add(dirLight)

			

			const ambientLight = new AmbientLight( 0xffffff, 0.05)
			scene.add(ambientLight)

			return {
				renderer,
				camera,
				scene
			}
		}

		function animate(renderer, camera, scene) {
			renderer.render(scene, camera)
			// requestAnimationFrame(animate)
		}

		function generateScene() {
			const canvas = webgl.value
			const { renderer, camera, scene } = setup(canvas)

			const terrain = new Terrain()
			scene.add(terrain.Mesh)

			// Moons
			let moonsCount = random(1,3)
			for (let i = 0; i < moonsCount; i++) generateMoon(scene)


			animate(renderer, camera, scene)
		}

		
		

		onMounted(() => generateScene())

		const updateScene = () => {
			generateScene()
		}

		return { webgl, updateScene }
	}
}
</script>

<style lang="stylus" scoped>
.webgl
	background: #111
	z-index: 4
</style>