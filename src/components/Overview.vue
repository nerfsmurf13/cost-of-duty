

<template>
	<div>
		<div class="overview-container">
			<div class="overview-section-title">General Stats</div>
			<div class="stat-container row flex">
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.kills) }}</div>
					<div class="stats-title">Kills</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.suicides) }}</div>
					<div class="stats-title">Suicides</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.deaths) }}</div>
					<div class="stats-title">Deaths</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round((stats.kdRatio + 0.00001) * 100) / 100 }}
					</div>
					<div class="stats-title">K:D Ratio</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.assists) }}</div>
					<div class="stats-title">Assists</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.gamesPlayed) }}</div>
					<div class="stats-title">Games Played</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.wins) }}</div>
					<div class="stats-title">Wins</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.ties) }}</div>
					<div class="stats-title">Draws</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.losses) }}</div>
					<div class="stats-title">Losses</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round((stats.winLossRatio + 0.00001) * 100) / 100 }}
					</div>
					<div class="stats-title">W:L Ratio</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.totalShots) }}</div>
					<div class="stats-title">Shots</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.hits) }}</div>
					<div class="stats-title">Shots Hit</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.misses) }}</div>
					<div class="stats-title">Shots Missed</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round((stats.accuracy + 0.00001) * 100) / 100 }}
					</div>
					<div class="stats-title">Accuracy</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ stats.headshots }}</div>
					<div class="stats-title">Headshots</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round(stats.timePlayedTotal / 60 / 60) }}
					</div>
					<div class="stats-title">Hours Played</div>
				</div>
			</div>
		</div>
		<!-- BESTS -->
		<div class="overview-container">
			<div class="overview-section-title">Personal Bests</div>
			<div class="stat-container row flex">
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ formatNumber(stats.recordLongestWinStreak) }}
					</div>
					<div class="stats-title">Win Streak</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestSPM) }}</div>
					<div class="stats-title">Best SPM</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestScore) }}</div>
					<div class="stats-title">Best Score</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ formatNumber(stats.bestKillStreak) }}
					</div>
					<div class="stats-title">Best Killstreak</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestKills) }}</div>
					<div class="stats-title">Best Kills</div>
				</div>
				<!-- <div class="stat-container-indv">
					<div class="stats-content">{{ stats.bestKillsAsSurvivor }}</div>
					<div class="stats-title">Best Surv. Kills</div>
				</div> -->
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round((stats.bestKD + 0.00001) * 100) / 100 }}
					</div>
					<div class="stats-title">Best KD</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestDeaths) }}</div>
					<div class="stats-title">Most Deaths</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestAssists) }}</div>
					<div class="stats-title">Best Assists</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ formatNumber(stats.bestCaptures) }}
					</div>
					<div class="stats-title">Best Captures</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ formatNumber(stats.bestConfirmed) }}
					</div>
					<div class="stats-title">Best Confimed</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestDefends) }}</div>
					<div class="stats-title">Defends</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestDefuses) }}</div>
					<div class="stats-title">Defuses</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestDenied) }}</div>
					<div class="stats-title">Denied</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ formatNumber(stats.bestRescues) }}</div>
					<div class="stats-title">Rescues</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Overview",
	components: {
		//asd
	},
	props: {
		stats: {
			type: Object,
			default: () => {}
		},
		statsAccolade: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		formatNumber(value) {
			//Formats number into readable number
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}
};
</script>
<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/tab-styles.scss";
// .stat-container-indv,
// .cost-container-indv {
// 	background-color: $background2;
// 	background-image: url("../assets/corners_125_58.png");
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	width: 125px;
// 	height: 58px;
// 	margin: 0.5rem;
// 	.stats-content {
// 		padding: 0.3rem;
// 		color: $text-lite;
// 	}
// 	.stats-cost {
// 		padding: 0.3rem;
// 		//border-top: 2px solid $text-dark;
// 		font-size: 1rem;
// 		color: $good;
// 	}
// 	.stats-title {
// 		padding: 0.3rem;
// 		border-top: 2px solid $text-dark;
// 		font-size: 1rem;
// 		color: $text-med;
// 	}
// 	&:hover {
// 		background-color: $selected-dark;
// 		.stats-title {
// 			border-top: 2px solid $hilight;
// 			color: $hilight;
// 		}
// 		.stats-cost {
// 			//border-top: 2px solid $hilight;
// 		}
// 	}
// }
// .cost-container-indv {
// 	flex: 1;
// }

// .stat-container {
// 	display: flex;
// 	flex-direction: row;
// }

// .overview-section-title {
// 	font-size: 1.5rem;
// 	padding-bottom: 0.5rem;
// }

// .overview-container {
// 	display: flex;
// 	flex: 1;
// 	flex-direction: column;
// 	margin-bottom: 2rem;
// 	border: 1px solid $selected-dark;
// 	padding-top: 1rem;
// 	padding-bottom: 1rem;
// }

// .col {
// 	display: flex;
// 	flex-flow: column;
// 	justify-content: center;
// }

// .flex {
// 	display: flex;
// 	flex-wrap: wrap;
// 	flex: 1;
// 	justify-content: center;
// }
// .pri {
// 	justify-content: center;
// 	.stats-cost {
// 		font-size: 2rem;
// 	}
// }

// .btn-close {
// 	border: none;
// 	font-size: 20px;
// 	padding: 20px;
// 	cursor: pointer;
// 	font-weight: bold;
// 	color: #4aae9b;
// 	background: transparent;
// }

// .btn-green {
// 	color: white;
// 	background: #4aae9b;
// 	border: 1px solid #4aae9b;
// 	border-radius: 2px;
// }
</style>