<template lang="pug">
.layer.background(:style="backgroundGradient")
</template>

<script>
import { computed } from "vue"
import Generator from "~/generator"
export default {
	setup() {
		const { palette } = Generator()
		const backgroundGradient = computed(() => `background-image: linear-gradient(180deg, ${palette.value.gradientTop}, ${palette.value.gradientMiddle}, ${palette.value.gradientBottom})`)
		return { backgroundGradient }
	}
}
</script>

<style lang="stylus" scoped>
.background
	z-index: 0
</style>