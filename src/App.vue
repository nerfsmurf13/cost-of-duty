<template>
	<div id="app">
		<ad-top />
		<div class="wrapper-full">
			<div class="wrapper">
				<app-navigation />
				<router-view />
			</div>
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

<style lang="scss">
@import "./styles/base.css";
@import "styles/normalize.css";
@import "https://fonts.googleapis.com/css?family=Roboto&display=swap";
@import "https://fonts.googleapis.com/css?family=Coda:800&display=swap";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

$screen-med: 800px;
$screen-large: 1080px;

body {
	width: 100vw;
}

#app {
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100vw;
	/* justify-items: center; */
	justify-content: space-between;
	background-color: #000;
	background-image: url("./assets/bg-large.jpg");
	background-size: contain;
	/* min-height: 100vh; */
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--text-lite);
	/* background-color: #036704; */
	/* background-color: #000; */
	--bad: #871e1a;
	--good: #77b164;
	--background1: #000;
	--background2: #111;
	--selected-lite: #43677b;
	--selected-dark: #253c4b;
	/* --text-lite: #cccccc; */
	--text-lite: #fff;
	--text-med: #89ddff;
	--text-dark: #3e3e3e;
	--hilight: #f0a84b;
	--screen-med: 800px;
	--screen-large: 1080px;
	$bad: #871e1a;
	$good: #77b164;
	$background1: #000;
	$background2: #111;
	$selected-lite: #43677b;
	$selected-dark: #253c4b;
	/* --text-lite: #cccccc; */
	$text-lite: #fff;
	$text-med: #89ddff;
	$text-dark: #3e3e3e;
	$hilight: #f0a84b;
	$screen-med: 800px;
	$screen-large: 1080px;
}
input[type="text"] {
	background-color: var(--background2);
	color: var(--text-med);
	border: none;
	font-size: 2.5rem;
	border-bottom: 2px solid var(--selected-lite);
	width: 100%;
	text-align: center;
	outline: none;
	margin: 1rem 0;
}
input[type="text"]:focus {
	border: none;
	border-bottom: 2px solid var(--hilight);
}
.btn {
	margin: 0.1rem 0;
	-webkit-transition-duration: 0.2; /* Safari */
	transition-duration: 0.2s;
	font-size: 2rem;
	border: none;
	color: var(--text-lite);
	background: var(--background1);
	border: 2px solid var(--selected-lite);
	outline: none;
	cursor: pointer;
	padding: 0 0.5rem;
	&:hover {
		border-bottom: 2px solid var(--selected-lite);
		background-color: var(--background2);
	}
	&_selected {
		border-bottom: 2px solid var(--hilight);
	}
}

a {
	color: white;
	text-decoration: white;
}

.wrapper-full {
	display: flex;
	justify-content: center;
	width: 100%;
	.wrapper {
		margin: 0 1rem;
	}
}

.good {
	color: #77b164;
}

@media screen and (min-width: $screen-med + 100) {
	.wrapper {
		width: $screen-med;
	}
}
@media screen and (min-width: $screen-large + 100) {
	.wrapper {
		width: $screen-large;
	}
}
</style>
