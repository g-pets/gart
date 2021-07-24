<template lang="pug">
.app-container
	canvas(ref="webgl" @click="updateScene()")
</template>

<script>
import { ref, onMounted } from "vue"
import {
	WebGLRenderer,
	sRGBEncoding,
	ACESFilmicToneMapping,
	PerspectiveCamera,
	Scene,
	Color,
	GridHelper,
	AmbientLight
} from "three"

import Terrain from '~/objects/terrain'
import Moon from '~/objects/moon'
import Star from '~/objects/star'
import { random } from "~/utils"

export default {
	setup() {
		const webgl = ref(null)


		function setup(canvas) {
			const renderer = new WebGLRenderer({ canvas, antialias: true })
			renderer.setSize(canvas.clientWidth, canvas.clientHeight)

			// Camera
			let cameraSettings = {
				fieldOfView: 45,
				aspectRatio: canvas.clientWidth / canvas.clientHeight,
				near: 0.1,
				far: 2000000
			}
			const camera = new PerspectiveCamera(cameraSettings.fieldOfView, cameraSettings.aspectRatio, cameraSettings.near, cameraSettings.far)
			camera.position.set(0, 800, -2000)
			camera.lookAt(0, 550, 0)

			const scene = new Scene()
			scene.background = new Color(0x160016)

			const ambientLight = new AmbientLight( 0xffffff, 0.03)
			scene.add(ambientLight)

			return { renderer, camera, scene }
		}

		function generateScene() {
			const canvas = webgl.value
			const { renderer, camera, scene } = setup(canvas)

			

			renderer.setPixelRatio( window.devicePixelRatio )
			renderer.setSize( window.innerWidth, window.innerHeight )
			renderer.outputEncoding = sRGBEncoding;
			renderer.toneMapping = ACESFilmicToneMapping;
			renderer.toneMappingExposure = .5;


			const terrain = new Terrain()
			scene.add(terrain.Mesh)

			
			// Local Star
			for (let i = 0; i < random(1,1); i++) Star(scene)

			// Moons
			for (let i = 0; i < random(1,3); i++) {
				let moon = new Moon()
				scene.add(moon.Mesh)
			}
			

			// Grid Helper
			// const helper = new GridHelper(10000, 30, 0xffffff, 0xffffff )
			// scene.add( helper )

			renderer.render(scene, camera)
			
		}

		onMounted(() => generateScene())
		const updateScene = () => generateScene()

		return { webgl, updateScene }
	}
}
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	width: 100vw
	height: 100vh
	overflow: hidden
	canvas
		width: 100%
		height: 100%
		cursor: pointer
</style>