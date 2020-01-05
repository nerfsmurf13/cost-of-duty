<template>
	<div class="adspace-container">
		<div class="adspace-top">
			<!-- <div
				id="adsgoeshere"
				style="background: #1d1f29; padding-top:60px; text-align: center;"
				v-html="adsenseContent"
			></div> -->
			<!-- <Adsense
				root-class="adspace-top"
				data-ad-client="ca-pub-8318488452444586"
				data-ad-slot="6448065455"
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
			adsenseContent: ""
		};
	},
	mounted() {
		// this.adsenseContent = document.getElementById(
		// 	"divadsensedisplaynone"
		// ).innerHTML;
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/base.scss";
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

.adspace-top {
	background-color: lightgray;
	width: 320px;
	height: 60px;
	display: flex;
	align-items: center;
	/* height: 90px; */
}

a {
	color: black;
	text-decoration: white;
	width: 100%;
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
