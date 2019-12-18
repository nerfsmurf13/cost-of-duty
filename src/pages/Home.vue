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
				:class="{ btn_selected: platform == 'battle' }"
				type="button"
				class="btn"
				@click="platform = 'battle'"
			>
				PC
			</button>
			<button
				:class="{ btn_selected: platform == 'xbl' }"
				type="button"
				class="btn"
				@click="platform = 'xbl'"
			>
				XBOX
			</button>
			<button
				:class="{ btn_selected: platform == 'psn' }"
				type="button"
				class="btn"
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
		<button  class="btn go" @click="loadPlayer()"> Create Detail
		</button>
		<div class="others">
			<p>{User Count} players looked up a total of ${XXXX} in chaos!</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			platform: "",
			username: "",
		};
	},
	methods:{
		loadPlayer(){
		//makeBackendCall().then(detail=>{
			this.$router.push({
				name: 'Player',
				params: {
					username: this.username,
					platform: this.platform
            }
        //})
    })
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
	border-bottom: 2px solid var(--hilight);
}

.go {
	border-bottom: 2px solid var(--good);
	&:hover {
		border-bottom: 2px solid var(--good);
	}
}
</style>
