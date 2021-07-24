<template lang="pug">
.layer.shapes
	svg.shape(v-for="shape in shapes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
		path(:d="shape.path")

</template>

<script>
import Generator from "~/generator"
export default {
	setup() {
		const { shapes } = Generator()
		return { shapes }
	}
}
</script>

<style lang="stylus" scoped>
.shapes
	z-index: 3
	.shape
		position: absolute
		bottom: 0
		left: 0
		stroke: red
</style>