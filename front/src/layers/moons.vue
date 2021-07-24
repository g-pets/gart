<template lang="pug">
.layer.moons
	.moon(v-for="moon in moons" :style="moon")
</template>

<script>
import Generator from "~/generator"
export default {
	setup() {
		const { moons } = Generator()
		return { moons }
	}
}
</script>

<style lang="stylus" scoped>
.moons
	z-index: 2
	.moon
		position: absolute
		border-radius: 50%
		transform-origin: center
		transition: all 0.5s ease-in-out
</style>