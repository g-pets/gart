<template lang="pug">
canvas.layer.background(ref="background")
</template>

<script>
import { ref, computed, onMounted } from "vue"
import { canvasSize, random } from "~/utils"
import Generator from "~/generator"
export default {
	setup() {
		const background = ref(null)
		const { palette } = Generator()
		const generateBackground = async (canvas, ctx) => {
			let colors = palette.value 
			let backgroundGradient = ctx.createLinearGradient(0,0,0,canvas.height)
			backgroundGradient.addColorStop(0, colors.gradientTop)
			backgroundGradient.addColorStop(0.5, colors.gradientMiddle)
			backgroundGradient.addColorStop(1, colors.gradientBottom)
			ctx.beginPath()
			ctx.fillStyle = backgroundGradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}


		onMounted(() => {
			let canvas = background.value
			let ctx = canvas.getContext('2d')
			canvasSize(canvas, ctx)
			generateBackground(canvas, ctx)
		})

		
		return { background, palette }
	}
}
</script>

<style lang="stylus" scoped>
.background
	z-index: 0
</style>