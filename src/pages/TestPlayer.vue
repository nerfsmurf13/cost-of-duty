<template>
	<!-- Need to make error message if player not found -->

	<div>
		<div v-if="!loaded" class="loading-data">
			<div class="filler">One sec while we calculate your beautiful chaos!</div>
		</div>
		<div v-if="status == 'error' || status == '404'" class="loading-data">
			<div class="filler">
				<div>
					Username couldn't be found! <br /><br />
					Please double check your username! The most common cause for this
					error are incorrect numbers after the '#' symbol!
				</div>

				<div class="space">
					<a class="table-btn grid space" href="/">Try Again</a>
				</div>
			</div>
		</div>
		<!-- <div v-if="loaded" class="main"> -->
		<div v-if="status == 'success'" class="main">
			<div class="player-id-section">
				<div class="player-id-section-top">
					<div class="player-id">{{ stats.data.username.toUpperCase() }}</div>
					<div class="player-sys">
						{{ showSystem() }}
					</div>
				</div>
				<div class="player-id-section-bottom">
					<div class="player-level val1">Level: {{ stats.data.level }}</div>
					<div class="player-score val1">
						Score: {{ stats.data.lifetime.all.properties.score }}
					</div>
				</div>
				<!-- <div class="refresh-counter">Stat update in x:xx</div> -->
			</div>
			<div class="total-spent-container">
				<div class="total-spent">$ {{ formatPrice(allTotal) }}</div>
				<div>Check the tabs below for a cost breakdown!</div>
			</div>

			<!-- HORIZONTAL SCROLLING-->
			<!-- https://codepen.io/cssgrid/pen/pRXQzW -->
			<!-- <div class="player-nav">Overview | Firearms | Explosives | Killstreaks</div> -->
			<div class="tabs">
				<div class="title">
					<button
						:class="{ 'btn-active': tab == 1 }"
						class="btn tab grid"
						@click="tab = 1"
					>
						Overview
					</button>
					<button
						:class="{ 'btn-active': tab == 2 }"
						class="btn tab grid"
						@click="tab = 2"
					>
						Firearms
					</button>
					<button
						:class="{ 'btn-active': tab == 3 }"
						class="btn tab grid"
						@click="tab = 3"
					>
						Explosives
					</button>
					<button
						:class="{ 'btn-active': tab == 4 }"
						class="btn tab grid"
						@click="tab = 4"
					>
						Killstreaks
					</button>
				</div>
				<!-- Overview tab -->
				<!-- <div class="overview-tab"> -->
				<overview
					v-show="tab == 1"
					:stats="stats.data.lifetime.all.properties"
					:stats-accolade="stats.data.lifetime.accoladeData.properties"
				/>

				<!-- </div> -->
				<!-- Firearms tab -->
				<firearms
					v-show="tab == 2"
					:tab="2"
					:item-data-ar="stats.data.lifetime.itemData.weapon_assault_rifle"
					:item-data-smg="stats.data.lifetime.itemData.weapon_smg"
					:item-data-dmr="stats.data.lifetime.itemData.weapon_dmr"
					:item-data-sniper="stats.data.lifetime.itemData.weapon_sniper"
					:item-data-lmg="stats.data.lifetime.itemData.weapon_lmg"
					:item-data-pistol="stats.data.lifetime.itemData.weapon_pistol"
					:item-data-shotgun="stats.data.lifetime.itemData.weapon_shotgun"
					:cost-total="completeCost"
				/>
				<!-- Explosives tab -->
				<other
					v-show="tab == 3"
					:tab="3"
					:item-data-lethal="stats.data.lifetime.itemData.lethals"
					:item-data-tactical="stats.data.lifetime.itemData.tacticals"
					:item-data-launcher="stats.data.lifetime.itemData.weapon_launcher"
					:item-data-other="stats.data.lifetime.itemData.weapon_other"
					:item-data-melee="stats.data.lifetime.itemData.weapon_melee"
					:cost-total="completeCost"
				/>
				<!-- Killstreak tab -->
				<!-- <div v-show="tab == 4" class="stat-container"> -->
				<killstreaks
					v-show="tab == 4"
					:tab="4"
					:off-killstreak-object="
						stats.data.lifetime.scorestreakData.lethalScorestreakData
					"
					:supp-killstreak-object="
						stats.data.lifetime.scorestreakData.supportScorestreakData
					"
					:loaded="true"
					:cost-total="completeCost"
				/>
			</div>
		</div>
	</div>

	<!-- ujustgotowned#1241
theguero16#1389
phdinwhy#1462
supremeruler#11316
jmonster#1567
samfisher#1366 -->
</template>

<script>
import Overview from "@/components/Overview";
import Killstreaks from "@/components/Killstreaks";
import Firearms from "@/components/Firearms";
import Other from "@/components/Other";

export default {
	name: "Home",
	components: {
		Overview,
		Killstreaks,
		Firearms,
		Other
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
			status: "loading",
			completeCost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			// firearmTotal: 0,
			allTotal: 0
		};
	},
	created() {
		this.passParams();
		if (this.platform == "battle") {
			this.battleFormatter(this.username);
		}

		this.console = window.console; //Testing
	},
	mounted() {
		if (this.platform == "battle") {
			this.fetchBattlePlayer();
		} else {
			this.fetchPlayer();
		}
	},
	updated() {
		this.calcAll();
		// this.console.log("updated hook");
	},
	calculated: {},

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
			this.$http
				.get(baseURI)
				.then(result => {
					this.stats = result.data;
					this.loaded = true;
					this.status = this.stats.status;
				})
				.catch(error => {
					this.console.log(error.response.data.error);
					//this.console.log(error.response.status);
					// this.console.log(error.response.headers);
				});
		},
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		fetchPlayer() {
			let baseURI =
				this.url1 + this.platform + this.url2 + this.username + this.url3;
			this.$http
				.get(baseURI)
				.then(result => {
					this.stats = result.data;
					this.loaded = true;
					this.status = result.status;
				})
				.catch(error => {
					this.console.log(error.response.data.status);
					this.loaded = true;
					this.status = error.response.data.status;
					// this.console.log(error.response.status);
					// this.console.log(error.response.headers);
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
		// formatPrice(value) {
		// 	let val = (value / 1).toFixed(2).replace(",", ".");
		// 	return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		// },
		showSystem() {
			if (this.stats.data.platform == "battle") {
				return "on Battle.net";
			}
			if (this.stats.data.platform == "xbl") {
				return "on XBox Live";
			} else {
				return "on Playstation Network";
			}
		},
		calcFirearm() {
			this.firearmTotal =
				this.completeCost[0] +
				this.completeCost[1] +
				this.completeCost[2] +
				this.completeCost[3] +
				this.completeCost[4] +
				this.completeCost[5];
		},
		calcAll() {
			let tots =
				this.completeCost[0] +
				this.completeCost[1] +
				this.completeCost[2] +
				this.completeCost[3] +
				this.completeCost[4] +
				this.completeCost[5] +
				this.completeCost[6] +
				this.completeCost[7] +
				this.completeCost[8] +
				this.completeCost[9] +
				this.completeCost[10] +
				this.completeCost[11];
			this.console.log("calcAll Ran: " + tots);
			this.allTotal = tots;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

.total-spent {
	//border-bottom: 1px solid $selected-lite;
	margin-bottom: 0.5rem;
}
.total-spent-container {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.loading-data {
	font-size: 2rem;
	height: 70vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.filler {
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.space {
	display: flex;
	justify-content: center;
	font-size: 2rem;
	// width: 50%;
	margin-top: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}
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
.responsive-table {
	overflow-x: auto;
}
// table {
//  margin: auto;
//   border-collapse: collapse;
//   overflow-x: auto;
//   display: block;
//   width: fit-content;
//   max-width: 100%;
//   box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1);
// }

.player-id-section-top {
	display: flex;
	flex-direction: column;
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
.total-spent {
	color: #3e9c35;
	font-size: 2.5rem;
	font-weight: 500;
}
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
	margin-bottom: 0.5rem;
	// border-bottom: none;
	&-active {
		border-left: 2px solid transparent;
		border-right: 2px solid transparent;
		border-top: 2px solid $hilight;
		border-bottom: 2px solid $hilight;
	}
}
.tab {
	width: 40%;
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
