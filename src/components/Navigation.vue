<template>
	<div class="nav-wrapper">
		<div class="logo"><span class="_impact">CO$T of DUTY</span></div>
		<div>About</div>
		<div class="share">Share</div>
	</div>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
			collapsed: true
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-wrapper {
	display: flex;
	flex-flow: row;
	justify-content: space-between;
}
._impact {
	font-family: "Coda", cursive;
}
</style>
