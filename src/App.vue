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
	display: flex;
	flex: 1;
	min-height: 100vh;
	// width: 100vw;
}
$grid-filler: #2d516a;
$background2: #111;

#app {
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100vw;
	/* justify-items: center; */
	justify-content: space-between;
	background-color: #000;
	background-image: url("./assets/bg-large.jpg");
	background-attachment: fixed;
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
}
$grid-color: #1e303c;

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
	border: 1px solid var(--selected-lite);
	outline: none;
	cursor: pointer;
	padding: 0 0.5rem;
	&:hover {
		border-bottom: 1px solid var(--selected-lite);
		background-color: var(--background2);
	}
	&_selected {
		border-bottom: 1px solid var(--hilight);
	}
}

.table-btn {
	//margin: 0.1rem 0;
	-webkit-transition-duration: 0.2; /* Safari */
	transition-duration: 0.2s;
	//font-size: 1rem;
	width: 100%;
	border: none;
	color: var(--text-lite);
	background: none;
	//border: 2px solid var(--selected-lite);
	outline: none;
	cursor: pointer;
	padding: 0 0.5rem;
	&:hover {
		//border-bottom: 2px solid var(--selected-lite);

		background-color: var(--background2);
	}
	// &_selected {
	// 	border-bottom: 2px solid var(--hilight);
	// }
}

tr:nth-child(even) {
	background-color: $background2;
}

a {
	color: white;
	text-decoration: white;
}

.wrapper-full {
	display: flex;
	justify-content: center;
	flex: 1;
	.wrapper {
		margin: 0 1rem;
	}
}

.good {
	color: #77b164;
}

//Call of Duty Esque Buttons
$grid-on: #1e303c;
$grid-off: #000;
$gridbg-on: #2d516a;
$gridbg-off: #121212;
$grid-hi: #3c93ca;
.grid {
	//background-color: $grid-filler;
	border: 2px solid $grid-on;
	background-image: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			$grid-off 2px,
			$grid-off 3px
		),
		repeating-linear-gradient(
			-90deg,
			transparent,
			transparent 2px,
			$grid-off 2px,
			$grid-off 3px
		);
	background-size: 3px 3px;
	&:hover {
		background-color: $gridbg-on;
		$grid-color: #1e303c;
		//$grid-filler: #2d516a;
		$grid-filler: #2d516a;
		border-left: 2px solid transparent;
		border-right: 2px solid transparent;
		border-top: 2px solid $text-med;
		border-bottom: 2px solid $text-med;
		//padding-bottom: 5px;
		// background: /* gradient can be an image */ linear-gradient(
		// 		to left,
		// 		rgba(0, 0, 0, 0.01) 0%,
		// 		rgba(60, 147, 202, 1) 50%,
		// 		rgba(0, 0, 0, 0.01) 100%
		// 	)
		// 	left bottom $grid-hi no-repeat;
		// background-size: 100% 5px; /* if linear-gradient, we need to resize it */
		background-image: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				$grid-on 2px,
				$grid-on 3px
			),
			repeating-linear-gradient(
				-90deg,
				transparent,
				transparent 2px,
				$grid-on 2px,
				$grid-on 3px
			);
	}
}
.grid-bg {
	background-color: $gridbg-off;
	&:hover {
		background-color: $gridbg-on;
	}
}

@media screen and (min-width: $screen-med) {
	.wrapper {
		width: $screen-med;
	}
	tr {
		font-size: 1rem;
	}
}
@media screen and (min-width: $screen-large) {
	.wrapper {
		width: $screen-large;
	}
	tr {
		font-size: 1.5rem;
	}
}
</style>
