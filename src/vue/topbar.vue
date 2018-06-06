<template lang="html">
<div class="topbar">
    {{ message }}
</div>
</template>

<script>
export default {
	data () {
		return {
			message: '照服秘笈'
		}
	}
}
</script>

<style lang="scss" scoped>
$color: red;
.topbar {
	color: $color;
}
</style>