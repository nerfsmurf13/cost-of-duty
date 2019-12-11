<template>
	<div id="app">
		<ad-top />
		<div class="wrapper">
			<app-navigation />
			<router-view />
		</div>
		<ad-bottom />
	</div>
</template>

<script>
import Navigation from "@/components/Navigation";
import AdspaceTop from "@/components/AdspaceTop";
import AdspaceBottom from "@/components/AdspaceBottom";
export default {
	name: "App",
	components: {
		"app-navigation": Navigation,
		"ad-top": AdspaceTop,
		"ad-bottom": AdspaceBottom
	}
};
</script>

<style>
@import "styles/normalize.css";
@import "https://fonts.googleapis.com/css?family=Roboto&display=swap";
@import "https://fonts.googleapis.com/css?family=Coda:800&display=swap";

#app {
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	/* background-color: #036704; */
	background-color: #000;
}
.wrapper {
	padding: 0 1rem;
}
</style>
