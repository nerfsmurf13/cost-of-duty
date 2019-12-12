<template>
	<div class="adspace-container">
		<div class="adspace-bottom">Advertisement Here!!!</div>
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
	/* border: 10px dashed white; */
	color: black;
	display: flex;
	flex: 1;
	justify-content: center;
	height: 50px;
}

.adspace-bottom {
	background-color: lightgray;
	width: 320px;
	height: 50px;
}
</style>
