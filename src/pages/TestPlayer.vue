<template>
	<div>
		<div v-show="false" class="loading-data">
			One sec while we calculate your beautiful chaos
		</div>
		<div class="main">
			<div class="player-id-section">
				<div class="player-id-section-top">
					<div class="player-id">DemoPayer6969</div>
					<div class="player-sys">PS</div>
				</div>
				<div class="player-id-section-bottom">
					<div class="player-level">Level: 999</div>
					<div class="player-score">Score: 9,999,999,999</div>
				</div>
				<div class="refresh-counter">Stat update in x:xx</div>
			</div>
			<div class="player-nav">Overview | Weapons | Killstreaks</div>
			<div class="tabs">
				<!-- Overview tab -->
				<div v-show="true" class="overview-tab">
					<div class="total-cash">
						<div class="value">$X,XXX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
					<div class="stat-container">
						<div class="stats-title">Stats</div>
						<div class="stats-content">kills deaths etc etc</div>
						<div class="stats-title">Gun Expenses</div>
						<div class="stats-content">kills deaths etc etc</div>
						<div class="stats-title">Killstreak Exspenses</div>
						<div class="stats-content">kills deaths etc etc</div>
					</div>
				</div>
				<!-- Weapons tab -->
				<div v-show="false" class="weapons-tab">
					<div class="total-cash">
						<div class="value">$XX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
					<div class="stat-container">
						<div class="stats-title">Stats</div>
						<div class="stats-content">kills deaths etc etc</div>
						<div class="stats-title">Gun Expenses</div>
						<div class="stats-content">kills deaths etc etc</div>
						<div class="stats-title">Killstreak Exspenses</div>
						<div class="stats-content">kills deaths etc etc</div>
					</div>
				</div>
				<!-- Killstreak tab -->
				<div v-show="false" class="killstreak-tab">
					<div class="total-cash">
						<div class="value">$XX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
					<div class="stat-container">
						<div class="stats-title">Stats</div>
						<div class="stats-content">kills deaths etc etc</div>
						<div class="stats-title">Gun Expenses</div>
						<div class="stats-content">kills deaths etc etc</div>
						<div class="stats-title">Killstreak Exspenses</div>
						<div class="stats-content">kills deaths etc etc</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player-id-section {
	display: flex;
	flex-flow: column;
}
.player-id-section-top {
	display: flex;
	flex-flow: row;
	justify-content: center;
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
}

/* Overview Tab */

.value {
	color: #3e9c35;
	font-size: 2.7rem;
	font-weight: 700;
}
</style>
