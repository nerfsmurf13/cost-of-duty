<template>
	<div class="adspace-container">
		<div class="adspace-bottom">
			<!-- <Adsense
				data-ad-client="ca-pub-8318488452444586"
				data-ad-slot="6590986947"
				data-ad-format="horizontal"
			>
			</Adsense> -->
			<a href="mailto:business@costofduty.com" target="_blank"
				>Advertise Here!</a
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "AdspaceTop",
	data() {
		return {
			// Data here!
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/base.scss";
a {
	color: black;
	text-decoration: white;
	width: 100%;
}
.adspace-container {
	/* height: 90px; */
	color: black;
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	flex: 1 0 auto;
	justify-content: center;
	/* height: 100px; */
}

.adspace-bottom {
	background-color: lightgray;
	width: 320px;
	height: 60px;
	display: flex;
	align-items: center;
	/* height: 90px; */
}

@media screen and (min-width: 468px) {
	.adspace-bottom {
		width: 468px;
	}
}
@media screen and (min-width: 1080px) {
	.adspace-bottom {
		width: 970px;
	}
}
</style>
