<template>
	<div class="adspace-container">
		<div class="adspace-top">Advertisement Here!!!</div>
	</div>
</template>

<script>
export default {
	name: "AdspaceTop",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adspace-container {
	color: black;
	display: flex;
	flex: 1;
	justify-content: center;
	height: 50px;
}

.adspace-top {
	background-color: lightgray;
	width: 320px;
	height: 50px;
}
</style>
