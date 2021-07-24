<template lang="pug">
canvas.layer.noise(ref="noise")
</template>

<script>
import { ref, onMounted } from "vue"
import { canvasSize, random } from "~/utils"
export default {
	setup() {
		const noise = ref(null)
		const generateNoise = (canvas, ctx) => {
			const idata = ctx.createImageData(canvas.width, canvas.height)
			const buffer32 = new Uint32Array(idata.data.buffer)
			const len = buffer32.length
			for (let i = 0; i < len; i++) {
				if (Math.random() < 0.3) buffer32[i] = 0x10000000
			}
			ctx.putImageData(idata, 0, 0)
		}

		onMounted(() => {
			let canvas = noise.value
			let ctx = canvas.getContext('2d')
			canvasSize(canvas, ctx)
			generateNoise(canvas, ctx)
		})
		return { noise }
	}
}
</script>

<style lang="stylus" scoped>
.noise
	z-index: 4
	// opacity: 0.100
</style>