<template>
	<div class="nav-wrapper">
		<div class="left">
			<div class="logo nav">
				<img
					src="../assets/logo-transparent-small.png"
					alt="Cost of Duty"
					srcset=""
				/>
			</div>
		</div>
		<!-- <div class="middle nav"></div> -->
		<div class="right">
			<div class="about nav"><a href="#">About</a></div>
			<div class="share nav "><a href="#">Share</a></div>
			<div class="search nav"><a href="#">Search</a></div>
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
.logo {
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
	display: flex;
	flex: 1;
	flex-flow: column;
	justify-content: space-between;
	//background-color: var(--background2);
	border-top: 1px solid var(--hilight);
	border-bottom: 1px solid var(--hilight);
	align-items: center;
	.nav {
		margin: 0 1rem;
		font-size: 1rem;
	}

	.left {
		flex: 2;
		justify-content: flex-start;
	}
	// .middle {
	// 	flex: 2;
	// }
	.right {
		flex: 1;
		display: flex;
		flex-flow: row;
		justify-content: flex-end;
		height:100%;
	}
}

@media screen and (min-width: 400px) {
	.nav-wrapper {
		flex-flow: row;
		.nav {
		margin: 0 .2rem;
		font-size: 1rem;
		}
	}
}
@media screen and (min-width: --screen-large) {
	.nav-wrapper {
		.nav {
		margin: 0 .2rem;
		font-size: 2rem;
	}
	}
}
</style>