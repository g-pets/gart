<template lang="pug">
.app-container
	//- background
	//- stars
	//- moons
	//- shapes
	//- noise
	three
</template>

<script>
// import { onMounted } from "vue"
// import Generator from "~/generator"
// import background from "~/layers/background.vue"
// import stars from "~/layers/stars.vue"
// import moons from "~/layers/moons.vue"
// import shapes from "~/layers/shapes.vue"
// import noise from "~/layers/noise.vue"
// import webgl from "~/layers/webgl.vue"
import three from "~/layers/three.vue"

export default {
	components: { three },
	// setup() {
	// 	const { generate } = Generator()
	// 	onMounted(() => generate())
	// 	const updateArt = () => generate()
	// 	return { updateArt }
	// }
}
</script>

<style lang="stylus">
@import "./assets/styles/index.styl"
.app-container
	width: 100vw
	height: 100vh
	.layer
		overflow: hidden
		width: 100%
		height: 100%
		position: absolute
		top: 0
		left: 0
</style>