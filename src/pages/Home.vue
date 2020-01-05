<template>
	<div class="main">
		<div class="title">
			<picture>
				<img
					alt="Cost of Duty"
					srcset="
						../assets/logo-transparent-small.png   400w,
						../assets/logo-transparent-medium.png 1024w,
						../assets/logo-transparent-large.png  1920w
					"
					src="../assets/logo-transparent-medium.png"
			/></picture>
			<h2>
				Find out how much money you've used in Call of Duty's multiplayer!
			</h2>
			<p>1. Pick the platform you want to search.</p>
			<p>2. Enter player's ID/Tag.</p>
			<p>
				3. Hit "Go" to see how much money has been used if online matches were
				real!
			</p>
		</div>
		<div class="sys-select">
			<button
				:class="{ 'home-btn-active': platform == 'battle' }"
				type="button"
				class="home-btn btn grid"
				@click="platform = 'battle'"
			>
				PC
			</button>
			<button
				:class="{ 'home-btn-active': platform == 'xbl' }"
				type="button"
				class="home-btn btn grid"
				@click="platform = 'xbl'"
			>
				XBOX
			</button>
			<button
				:class="{ 'home-btn-active': platform == 'psn' }"
				type="button"
				class="home-btn btn grid"
				@click="platform = 'psn'"
			>
				PS4
			</button>
		</div>

		<input
			v-model="username"
			type="text"
			placeholder="MrPoopyButthole"
			name=""
		/>
		<!-- <router-link :to="{name: 'Player', params: { username: username, platform: platform }}">
		<button type="button" class="btn go" >Go</button>
		</router-link> -->
		<button class="home-btn go btn grid " @click="loadPlayer()">Go!</button>
		<div class="others">
			<!-- <p>{User Count} players looked up a total of ${XXXX} in chaos!</p> -->
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			platform: "battle",
			username: "phdinwhy#1462"
		};
	},
	methods: {
		loadPlayer() {
			//makeBackendCall().then(detail=>{
			this.$router.push({
				name: "Player",
				params: {
					username: this.username,
					platform: this.platform
				}
				//})
			});
		}
		// 	assembleQuery(){
		// 	},
		// submitPlayer(){
		// 	router.push({ path: `/mw/stats/${platform}/${username}` }) // -> /user/123
		// }
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/tab-styles.scss";

input[type="text"] {
	background-color: $background2;
	color: $text-med;
	border: none;
	font-size: 2.5rem;
	border-bottom: 2px solid $selected-lite;
	width: 100%;
	text-align: center;
	outline: none;
	margin: 1rem 0;
}
input[type="text"]:focus {
	border: none;
	border-bottom: 2px solid $hilight;
}

// .btn {
// 	margin: 0.1rem 0;
// 	-webkit-transition-duration: 0.2; /* Safari */
// 	transition-duration: 0.2s;
// 	font-size: 2rem;
// 	border: none;
// 	color: $text-lite;
// 	background: $background1;
// 	border: 1px solid $selected-lite;
// 	outline: none;
// 	cursor: pointer;
// 	padding: 0 0.5rem;
// 	&:hover {
// 		border-bottom: 1px solid $selected-lite;
// 		background-color: $background2;
// 	}
// 	&_selected {
// 		border-bottom: 1px solid $hilight;
// 	}
// }

h1 {
	font-size: 2.9rem;

	font-family: "Coda", cursive;
}
span {
	font-size: 1.5rem;
}

.main {
	width: 100%;
}
.title img {
	width: 100%;
}
.sys-select {
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: space-around;
}

.btn_selected {
	//border-bottom: 2px solid var(--hilight);
}
.home-btn {
	font-size: 2rem;
	margin-bottom: 0.5rem;

	// border-bottom: none;
	&-active {
		border-left: 2px solid transparent;
		border-right: 2px solid transparent;
		border-top: 2px solid $hilight;
		border-bottom: 2px solid $hilight;
	}
}

.go {
	border-bottom: 2px solid var(--good);
	&:hover {
		border-bottom: 2px solid var(--good);
	}
}
</style>
