<template>
	<div>
		<div v-if="!loaded" class="loading-data">
			One sec while we calculate your beautiful chaos!
		</div>
		<div  v-if="loaded" class="main">
			<div class="player-id-section">
				<div class="player-id-section-top">
					<div class="player-id">{{ stats.data.username.toUpperCase() }}</div>
					<div class="player-sys">{{ stats.data.platform }}</div>
				</div>
				<div class="player-id-section-bottom">
					<div class="player-level val1">Level: {{ stats.data.level }}</div>
					<div class="player-score val1">Score: {{ stats.data.totalXp }}</div>
				</div>
				<div class="refresh-counter">Stat update in x:xx</div>
			</div>
			<!-- <div class="player-nav">Overview | Firearms | Explosives | Killstreaks</div> -->
			<div class="tabs">
				<div class="title">
					<button
						:class="{ 'btn-active': tab == 1 }"
						class="btn tab"
						@click="tab = 1"
					>
						Overview
					</button>
					<button
						:class="{ 'btn-active': tab == 2 }"
						class="btn tab"
						@click="tab = 2"
					>
						Firearms
					</button>
					<button
						:class="{ 'btn-active': tab == 3 }"
						class="btn tab"
						@click="tab = 3"
					>
						Explosives
					</button>
					<button
						:class="{ 'btn-active': tab == 4 }"
						class="btn tab"
						@click="tab = 4"
					>
						Killstreaks
					</button>
				</div>
				<!-- Overview tab -->
				<!-- <div class="overview-tab"> -->
				<div v-show="tab == 1" class="stat-container">
					<div class="title">
						<div class="total-cash">
							<div class="value">$X,XXX,XXX,XXX</div>
							<!-- <div class="value-bottom">spent in {#matches} matches!</div>
							<div class="value-gdp">Thats the GDP of {whatever!}</div> -->
						</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">230/440</div>
						<div class="stats-cost">$9,999,999</div>
						<div class="stats-title">Wins</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">230/440</div>
						<div class="stats-title">Losses</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Shots</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">2%</div>
						<div class="stats-title">Accuracy</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">7605</div>
						<div class="stats-title">Kills</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">5964</div>
						<div class="stats-title">Deaths</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Headshots</div>
					</div>
				</div>
				<!-- </div> -->
				<!-- Firearms tab -->
				<firearms
					v-show="tab == 2"
					:item-data-ar="
						stats.data.lifetime.itemData.weapon_assault_rifle
					"
					:item-data-smg="
						stats.data.lifetime.itemData.weapon_smg
					"
				/>
				<!-- Explosives tab -->
				<div v-show="tab == 3" class="stat-container">
					<div class="total-cash">
						<div class="value">$XX,XXX,XXX</div>
						<!-- <div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div> -->
					</div>

					<table>
						<thead>
							<tr>
								<th>Weapon</th>
								<th>Kills</th>
								<th>Uses</th>
								<th>Headshots</th>
								<th>Ammo/Mag Cost</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Frag Grenade</th>
								<th>99</th>
								<th>1.5</th>
								<th>2</th>
								<th>$35,000</th>
							</tr>
							<tr>
								<th>M1</th>
								<th>99</th>
								<th>1.5</th>
								<th>2</th>
								<th>$35,000</th>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- Killstreak tab -->
				<!-- <div v-show="tab == 4" class="stat-container"> -->
				<killstreaks
					v-show="tab == 4"
					:off-killstreak-object="
						stats.data.lifetime.scorestreakData.lethalScorestreakData
					"
					:tact-killstreak-object="
						stats.data.lifetime.scorestreakData.supportScorestreakData
					"
					:loaded=true
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Killstreaks from "@/components/Killstreaks";
import Firearms from "@/components/Firearms";

export default {
	name: "Home",
	components: {
		Killstreaks,
		Firearms
	},
	data() {
		return {
			tab: 1,
			url1:
				"https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/",
			url2: "/gamer/",
			hash: "%23",
			url3: "/profile/type/mp",
			platform: "",
			username: "",
			name1: "",
			name2: "",
			stats: [],
			loaded: false,
		};
	},
	created() {
		this.passParams();
		if (this.platform == "battle") {
			this.battleFormatter(this.username);
		}
	},
	mounted() {
		if (this.platform == "battle") {
			this.fetchBattlePlayer();
		} else {
			this.fetchPlayer();
		}
	},
	methods: {
		fetchBattlePlayer() {
			let baseURI =
				this.url1 +
				this.platform +
				this.url2 +
				this.name1 +
				this.hash +
				this.name2 +
				this.url3;
			this.$http.get(baseURI).then(result => {
				this.stats = result.data;
				this.loaded = true;
			});
		},
		fetchPlayer() {
			let baseURI =
				this.url1 + this.platform + this.url2 + this.username + this.url3;
			this.$http.get(baseURI).then(result => {
				this.stats = result.data;
				this.loaded = true;
			});
		},
		battleFormatter(x) {
			let name = x;
			let part = 1;
			for (let i = 0; i < x.length; i++) {
				if (name[i] == "#") {
					part = 2;
				} else if (part == 1) {
					this.name1 += name[i];
				} else {
					this.name2 += name[i];
				}
			}
		},
		passParams() {
			this.platform = this.$route.params.platform;
			this.username = this.$route.params.username;
		},
		populateLocalObject() {},
		formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
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

.player-id-section {
	display: flex;
	flex-flow: column;
	&-top {
		display: flex;
		flex-flow: row;
		justify-content: center;
		.player-id {
			font-size: 2rem;
		}
	}
	.player-sys {
		font-size: 1rem;
	}
}

.player-id-section-top {
	margin: 0.3rem 0;
}
.player-id-section-bottom {
	margin: 0.3rem 0;
}
.player-id {
	font-size: 1.5rem;
}
.player-sys {
	font-size: 1.5rem;
}

.player-id-section-bottom {
	display: flex;
	flex-flow: row;
	justify-content: space-around;
}
.player-id {
	margin: 0;
}

.refresh-counter {
	font-size: 0.75rem;
	font-weight: 200;
	margin: 0.3rem 0;
}

/* Overview Tab */

.value {
	color: #3e9c35;
	font-size: 2.5rem;
	font-weight: 500;
}

.wrapper-full {
	display: flex;
	justify-content: center;
	width: 100%;
	.wrapper {
		margin: 0 1rem;
	}
}

.val1 {
	padding: 0 0.2rem;
	border-bottom: 1px solid $selected-lite;
}

.btn {
	font-size: 1rem;
	border-width: 1px;
	margin-bottom: 0.5rem;
	// border-bottom: none;
	&-active {
		border-color: $hilight;
	}
}
.tab {
	width: 40%;
}
// Stat Container
.stat-container {
	font-size: 1.5rem;
	// border-radius: 1rem;
	border: 1px solid $selected-dark;
	display: flex;
	background-color: $background1;
	margin: 1rem 0;
	margin-top: 0;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 0.5rem 0;
	.stat-container-indv {
		background-color: $background2;
		background-image: url("../assets/corners.png");
		background-size: cover;
		background-repeat: no-repeat;
		width: 125px;
		margin: 0.5rem;
		// border: 1px solid lightgray;
		//border-radius: .5rem;

		.stats-content {
			padding: 0.3rem;
			color: $text-lite;
		}
		.stats-cost {
			padding: 0.3rem;
			border-top: 2px solid $text-dark;
			font-size: 1rem;
			color: $good;
		}
		.stats-title {
			padding: 0.3rem;
			border-top: 2px solid $text-dark;
			font-size: 1rem;
			color: $text-med;
		}
		&:hover {
			background-color: $selected-dark;
			.stats-title {
				border-top: 2px solid $hilight;
				color: $hilight;
			}
			.stats-cost {
				border-top: 2px solid $hilight;
			}
		}
	}
	.title {
		width: 100%;
		margin-bottom: 0.5rem;
	}

	table {
		font-size: 0.75rem;
		font-weight: 100;
		width: 100%;
	}
}

@media screen and (min-width: $screen-med) {
	.wrapper {
		width: $screen-med;
	}
	.btn {
		font-size: 1.5rem;
	}
}
@media screen and (min-width: $screen-large) {
	.wrapper {
		width: $screen-large;
	}
	.btn {
		font-size: 1.5rem;
	}
}
</style>
