<template lang="pug">
.app-container(id="container")
</template>

<script>
import { onMounted } from "vue"
import { Object3D, Mesh, SphereGeometry, MeshBasicMaterial, Color } from "three"
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { controls } from '~/helpers/controls.js';
import { world } from '~/helpers/world.js';
// import { Planet } from '~/objects/Planet.js';
// import { textures } from '~/helpers/textures.js';


export default {
	setup() {
		let App
		class ProceduralWorld extends world.World {
			constructor() {super()}

			_OnInitialize() {
				// this._textures = new textures.TextureAtlas(this);
				// this._textures.onLoad = () => {};
				// this._CreateGUI();

				// this._userCamera = new Object3D()
				// this._userCamera.position.set(4100, 0, 0)
				// this._graphics.Camera.position.set(7000, 7000, 7000)

				// this._entities['_terrain'] = new Planet.TerrainChunkManager({
				// 	camera: this._userCamera,
				// 	scene: this._graphics.Scene,
				// 	// gui: this._gui,
				// 	// guiParams: this._guiParams,
				// });

				// this._entities['_controls'] = new controls.OrbitControls({
				// 	camera: this._graphics.Camera,
				// 	scene: this._graphics.Scene,
				// 	domElement: this._graphics._threejs.domElement,
				// 	// gui: this._gui,
				// 	// guiParams: this._guiParams,
				// })

				// this._focusMesh = new Mesh(
				// 	new SphereGeometry(25, 32, 32),
				// 	new MeshBasicMaterial({
				// 		color: 0xFFFFFF
				// 	})
				// );
				// this._focusMesh.castShadow = true;
				// this._focusMesh.receiveShadow = true;
				// this._graphics.Scene.add(this._focusMesh);

				this._totalTime = 0
				// this._LoadBackground()
			}

			// _CreateGUI() {
			// 	this._guiParams = {
			// 		general: {},
			// 	};
			// 	this._gui = new GUI();

			// 	const generalRollup = this._gui.addFolder('General');
			// 	this._gui.close();
			// }

			_LoadBackground() {
				this._graphics.Scene.background = new Color(0x000000)
			}

			_OnStep(timeInSeconds) {
				this._totalTime += timeInSeconds;

				// const x = Math.cos(this._totalTime * 0.025) * 4100;
				// const y = Math.sin(this._totalTime * 0.025) * 4100;
				// this._userCamera.position.set(x, 0, y);

				// this._focusMesh.position.copy(this._userCamera.position);
			}
		}


		const initWorld = () => App = new ProceduralWorld()
		onMounted(() => initWorld())
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
.switch-world
	position: absolute
	top: 0
	right: 0
	padding: 0.5em
	font-size: 0.8em
	color: #fff
	&:hover
		cursor: pointer
</style>