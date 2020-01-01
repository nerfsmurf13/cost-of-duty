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
@import "../styles/base.scss";
.adspace-container {
	color: black;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	flex: 1;
	justify-content: center;
	/* height: 100px; */
}

.adspace-top {
	background-color: lightgray;
	width: 320px;
	height: 100px;
	display: inline-block;
}

@media screen and (min-width: 468px) {
	.adspace-top {
		width: 468px;
	}
}
@media screen and (min-width: 1080px) {
	.adspace-top {
		width: 970px;
	}
}
</style>
