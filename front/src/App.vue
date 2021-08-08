<template lang="pug">
.app-container(id="container" @click="updateScene()")
</template>

<script>
import { onMounted } from "vue"
import {
	WebGLRenderer,
	Scene,
	Color,
	PerspectiveCamera,
	Object3D,
	PCFSoftShadowMap,
	ACESFilmicToneMapping,
	sRGBEncoding
} from "three"
// import Stats from "stats-js"

import { generateStar, generateMoons } from "~/helpers/starSystem"

// Objects
import Terrain from "~/objects/Terrain.js"
import Star from "~/objects/_Star.js"
import Moon from "~/objects/_Moon.js"

export default {
	setup() {
		let scene, camera, renderer, star, planet, time = 10
		let generatedStar = generateStar()
		let generatedMoons = generateMoons()



		function init() {
			let container = document.getElementById('container')
			renderer = new WebGLRenderer()
			let width = window.innerWidth
			let height = window.innerHeight
			renderer.setClearColor(0x444444)
			renderer.shadowMap.enabled = true
			renderer.shadowMap.type = PCFSoftShadowMap
			renderer.toneMapping = ACESFilmicToneMapping
			renderer.toneMappingExposure = .5
			renderer.physicallyCorrectLights = true
			renderer.gammaFactor = 2.2
			renderer.outputEncoding = sRGBEncoding
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(width, height)
			container.appendChild(renderer.domElement)
			scene = new Scene()
			
			// Camera
			camera = new PerspectiveCamera(45, width/height, 0.1, 10000)
			camera.position.set(0, 800, -2000)
			camera.lookAt(0, 550, 0)
			
			// Camera Orbit
			// controls = new OrbitControls(camera, renderer.domElement)
			// controls.addEventListener('change', () => {
			// 	renderer.render( scene, camera )
			// })

			scene.background = new Color(0x160016)

			planet = new Terrain().Mesh
			scene.add(planet)

			let starPivot = new Object3D()
			starPivot.name = "starPivot"
			planet.add(starPivot)
			starPivot.position.set(0, 0, 0)
			star = new Star({radius:generatedStar.radius, position:generatedStar.position}).Mesh
			starPivot.add(star)

			generatedMoons.forEach(moon => {
				let moonPivot = new Object3D()
				moonPivot.name = "moonPivot"
				planet.add(moonPivot)
				moon = new Moon({radius:moon.radius, position:moon.position}).Mesh
				moonPivot.add(moon)
			})
			renderer.render(scene, camera)
		}
		
		function runSystem() {
			time += 0.0005
			planet.children.forEach((planetItem, index) => {
				if(planetItem.name == "starPivot") {
					planetItem.rotation.y = time * 5
				} else if(planetItem.name == "moonPivot") {
					planetItem.rotation.z = time * 3 * (index+1)
				} else return
			})
		}

		function animate() {
			requestAnimationFrame(animate)
			runSystem()
			renderer.render(scene, camera)
		}

		const updateScene = () => init()
		
		onMounted(() => {
			init()
			animate()
		})
		return { updateScene }
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
.update
	position: absolute
	top: 0
	right: 0
	padding: 0.5em
	font-size: 0.8em
	color: #fff
</style>