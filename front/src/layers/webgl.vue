<template lang="pug">
canvas.layer.webgl(ref="webgl")
</template>

<script>
import { ref, onMounted } from "vue"
import { random } from "~/utils"
// import * as BABYLON from 'babylonjs';
import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, Mesh, LensRenderingPipeline } from 'babylonjs'
export default {
	setup() {
		const webgl = ref(null)

		

		onMounted(() => {
			var canvas = webgl.value
			// Load the 3D engine
			var engine = new Engine(canvas, true, {
				preserveDrawingBuffer: true,
				stencil: true
			});
			
			const createScene = () => {
				// Create a basic BJS Scene object
				var scene = new Scene(engine);
				// Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}

				var parameters = {
					grain_amount: 1,
					// dof_focus_distance: 1,
					// dof_aperture: 1
				};
				var camera = new FreeCamera('camera', new Vector3(0, 1, -3), scene);
				camera.inputs.addMouseWheel();
				// var lensEffect = new LensRenderingPipeline('lensEffects', parameters, scene, 1.0, camera);
				// Target the camera to scene origin
				camera.setTarget(Vector3.Zero());
				// Attach the camera to the canvas
				camera.attachControl(canvas, false);
				// Create a basic light, aiming 0, 1, 0 - meaning, to the sky
				let mainLight = new HemisphericLight('mainLight', new Vector3(.5, -1, 1), scene);
				mainLight.intensity = 0.5
				
				for (let i = 0; i < 1; i++) {
					let diameter = 5
					// name, segment, diameter, scene, updatable, sideOrientation
					let moon = Mesh.CreateSphere('moon'+i, 128, diameter, scene, false, Mesh.FRONTSIDE)
					moon.position.y = 0
					moon.position.x = 0
					moon.position.z = 21
				}
				
				
				// Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
				Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
				// Return the created scene
				return scene;
			}
			// call the createScene function
			var scene = createScene();
			// run the render loop
			engine.runRenderLoop(function(){
				scene.render();
			});

			
			// the canvas/window resize event handler
			// window.addEventListener('resize', function(){
			// 	engine.resize();
			// });
		})

		// const updateScene = () => {
		// 	createScene()
		// }

		return { webgl }
	}
}
</script>

<style lang="stylus" scoped>
.webgl
	background: #111
	z-index: 4
	// opacity: 0.100
</style>