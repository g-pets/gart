<template lang="pug">
canvas.layer.stars(ref="stars")
</template>

<script>
import { ref, onMounted } from "vue"
import { canvasSize, random } from "~/utils"
export default {
	setup() {
		const stars = ref(null)
		const generateStars = (canvas, ctx) => {
			for (var i = 0; i < 200; i++) {
				let x = Math.random() * canvas.width
				let y = Math.random() * canvas.height
				let radius = Math.random() * 1.1
				ctx.beginPath()
				ctx.arc(x, y, radius, 0, 360)
				let colorrange = [0,60,240]
				let hue = colorrange[random(0,2)]
				let saturation = random(30,50)
				let lightness = random(55,70)
				ctx.fillStyle = "hsl(" +hue+ ", " +saturation+ "%, " +lightness+ "%)"
				ctx.fill()
			}
		}

		const generateMask = (canvas, ctx) => {
			let mask = ctx.createLinearGradient(0,0,0,canvas.height);
			mask.addColorStop(0, "transparent");
			mask.addColorStop(1, "#fff");
			ctx.fillStyle = mask;
			ctx.globalCompositeOperation = "destination-out";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}

		onMounted(() => {
			let canvas = stars.value
			let ctx = canvas.getContext('2d')
			canvasSize(canvas, ctx)
			generateStars(canvas, ctx)
			generateMask(canvas, ctx)
		})
		
		return { stars }
	}
}
</script>

<style lang="stylus" scoped>
.stars
	z-index: 1
</style>