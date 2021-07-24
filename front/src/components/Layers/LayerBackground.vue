<template lang="pug">
canvas(ref="LayerBackground")
</template>

<script>
import { ref, onMounted } from "vue"
import { canvasSize, paletteGenerator, backgroundGradient } from "~/utils"
export default {
	setup() {
		const LayerBackground = ref(null)

		function fillBackground(canvas, ctx) {	
			let paletteOptions = {
				hue: [1,360],
				saturation: [50,70],
				lightness: [80,80]
			}
			let colors = paletteGenerator(paletteOptions)
			backgroundGradient(ctx, canvas.width, canvas.height, colors.gradientTop, colors.gradientMiddle, colors.gradientBottom)
		}
		onMounted(() => {
			let ctx = LayerBackground.value.getContext('2d')
			canvasSize(LayerBackground.value, ctx)
			fillBackground(LayerBackground.value, ctx)
		})
		return { LayerBackground }
	}
}
</script>

<style lang="stylus" scoped>
</style>