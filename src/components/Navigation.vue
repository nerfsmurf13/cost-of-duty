<template>
	<div class="nav-wrapper">
		<div class="left">
			<div class="logo nav">
				<a href="/"
					><img
						src="../assets/logo-transparent-small.png"
						alt="Cost of Duty"
						srcset=""
				/></a>
			</div>
		</div>
		<!-- <div class="middle nav"></div> -->
		<div class="right">
			<!-- <div class="about nav"><a href="#">About</a></div> -->
			<!-- <div
				class="fb-share-button"
				data-href="https://www.costofduty.com"
				data-layout="button_count"
			></div> -->
			<!-- |
			<div class="share nav "><a href="#">Share</a></div> -->
			<!-- | -->
			<div class="search nav"><a href="/">Search Another Player</a></div>
		</div>
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
<style lang="scss" scoped>
@import "../styles/base.scss";

a {
	color: white;
	text-decoration: white;
}

.logo {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: flex-start;
	width: 200px;
}
.logo img {
	width: 100%;
	max-width: 200px;
}

.nav-wrapper {
	margin: 1rem 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	flex: 1;
	flex-basis: 1 0 0%;
	flex-flow: column;
	justify-content: space-between;
	border-top: 1px solid $hilight;
	border-bottom: 1px solid $hilight;
	align-items: center;
	.nav {
		//margin: 0 1rem;
		font-size: 1rem;
	}

	.left {
		flex: 2;
		justify-content: flex-start;
	}

	.right {
		flex: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;

		flex-flow: row;
		justify-content: flex-end;
		height: 100%;
		a {
			margin: 0.2rem;
		}
	}
}

@media screen and (min-width: 500px) {
	.nav-wrapper {
		flex-flow: row;
		.nav {
			font-size: 1rem;
		}
	}
}
@media screen and (min-width: $screen-large) {
	.nav-wrapper {
		.nav {
			font-size: 1.5rem;
		}
	}
}
</style>