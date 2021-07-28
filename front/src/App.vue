<template lang="pug">
.app-container(id="container")
.update(@click="updateScene()") Update
</template>

<script>
import { onMounted } from "vue"
import {
	WebGLRenderer,
	Scene,
	Color,
	PerspectiveCamera,
	Object3D,
	GridHelper,
	AmbientLight,
	PointLight,
	PointLightHelper,
	Vector2,
	PCFSoftShadowMap,
	ACESFilmicToneMapping,
	sRGBEncoding
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls"
import Stats from "stats-js"

import { starSystem } from "~/helpers/starSystem"


// Objects
import Star from "~/objects/_Star.js"
import Planet from "~/objects/_Planet.js"
import Moon from "~/objects/_Moon.js"

export default {
	setup() {
		let scene, renderer, camera, controls, stats, star, planet, moon
		let time = 0
		let clock
		let effects = []

		let planetMesh, moonMesh, starMesh

		let system = starSystem()
		// console.log(starSystem().stars)

		// let systemConfig = {
		// 	// Sizes 1unit = 1000km
		// 	// starRadius: 695.5,
		// 	// planetRadius: 6.3,
		// 	// moonRadius: 1.7,
		// 	// starDistance: 149597,
		// 	// moonDistance: 384
		// 	starRadius: 60,
		// 	planetRadius: 10,
		// 	moonRadius: 2,
		// 	starDistance: 100,
		// 	moonDistance: 30
		// }

		const mouse = new Vector2()
		const target = new Vector2()
		const windowHalf = new Vector2( window.innerWidth / 2, window.innerHeight / 2 )

		function createStats() {
			stats = new Stats()
			stats.setMode(0)
			stats.domElement.style.position = 'absolute'
			stats.domElement.style.left = '0'
			stats.domElement.style.top = '0'
			return stats
		}


		function init() {
			let container = document.getElementById('container')
			renderer = new WebGLRenderer()
			let width = window.innerWidth
			let height = window.innerHeight
			renderer.setClearColor(0x444444)
			renderer.shadowMap.enabled = true
			renderer.shadowMap.type = PCFSoftShadowMap
			renderer.toneMapping = ACESFilmicToneMapping
			renderer.toneMappingExposure = 0.1
			renderer.physicallyCorrectLights = true
			renderer.gammaFactor = 2.2
			renderer.outputEncoding = sRGBEncoding
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(width, height)
			container.appendChild(renderer.domElement)
			scene = new Scene()

			stats = createStats()
      		container.appendChild(stats.domElement)
			
			// Camera
			camera = new PerspectiveCamera(50, width/height, 1, 10000000)
			camera.position.set(0, 1000, 100000)
			// camera.lookAt(0, 5, 5)
			// camera.updateProjectionMatrix()
			
			// Camera Orbit
			controls = new OrbitControls(camera, renderer.domElement)
			controls.addEventListener('change', () => {
				renderer.render( scene, camera )
			});

			controls = new PointerLockControls( camera, document.body );
			controls.addEventListener( 'lock', function () {
				menu.style.display = 'none';
			});

			controls.addEventListener( 'unlock', function () {
				menu.style.display = 'block';
			});

			// Grid
			// const grid = new GridHelper(10000, 100, 0x00ff00, 0x555555 )
			// scene.add(grid)

			// Light
			const light = new PointLight(0xffffff)
			light.power = 40000000
			light.position.set(0, 100000, 0)
			scene.add(light)
			const pointLightHelper = new PointLightHelper( light, 100 );
			scene.add( pointLightHelper );

			scene.background = new Color(0x444444)

			star = new Star({radius:system.star.radius, position:system.star.position}).Mesh
			scene.add(star)
			system.planets.forEach(planet => {
				let planetPivot = new Object3D()
				star.add(planetPivot)
				planetMesh = new Planet({radius:planet.radius, position:planet.position}).Mesh
				planetPivot.add(planetMesh)
				planet.moons.forEach(moon => {
					let moonPivot = new Object3D()
					planetPivot.add(moonPivot)
					moonMesh = new Moon({radius:moon.radius, position:moon.position}).Mesh
					moonPivot.add(moonMesh)
				})
			})

				

			
		
			renderer.render(scene, camera)

			// document.addEventListener( 'mousemove', onMouseMove, false )

		}

		// function onMouseMove( event ) {
		// 	mouse.x = ( event.clientX - windowHalf.x )
		// 	mouse.y = ( event.clientY - windowHalf.x )
		// }
		
		function runSystem() {
			time += 0.005
			// star.rotation.y += 0.005
			// star.material.uniforms.time.value = time
			// planetMesh.rotation.y = time * 0.05

			
			star.children.forEach((planet, pi) => {
				planet.rotation.y = time * 0.5 / pi
				planet.children.forEach((moon, index) => {
					if(moon.type !== "Object3D") return
					moon.rotation.x = time * 0.5 / index
				})
			})
			
			// moon.rotateY(0.005)
			// moon.translateX(.5)
			// planet.rotation.y += 0.005
		}

		function animate() {
			requestAnimationFrame(animate)
			
			// if(star) star.material.uniforms.time.value = time
			// controls.update()
			// Mouse=Camera
			// target.x = ( 1 - mouse.x ) * 0.002;
			// target.y = ( 1 - mouse.y ) * 0.002;
			// camera.rotation.x += 0.5 * ( target.y - camera.rotation.x );
			// camera.rotation.y += 0.5 * ( target.x - camera.rotation.y );
			// 
			// runSystem()
			
			// renderer.render(scene, camera)
			stats.update()
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
	&:hover
		cursor: pointer
</style>