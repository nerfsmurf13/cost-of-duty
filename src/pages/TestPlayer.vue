<template>
	<div>
		<div v-show="false" class="loading-data">
			One sec while we calculate your beautiful chaos
		</div>
		<div class="main">
			<div class="player-id-section">
				<div class="player-id-section-top">
					<div class="player-id">DemoPayer6969</div>
					<div class="player-sys">PSN</div>
				</div>
				<div class="player-id-section-bottom">
					<div class="player-level val1">Level: 999</div>
					<div class="player-score val1">Score: 9,999,999,999</div>
				</div>
				<div class="refresh-counter">Stat update in x:xx</div>
			</div>
			<!-- <div class="player-nav">Overview | Firearms | Explosives | Killstreaks</div> -->
			<div class="tabs">
				<!-- Overview tab -->
				<div v-show="true" class="overview-tab">
					
					<div class="title">
	<button class="btn">Overview</button>
	<button class="btn">Firearms</button>
	<button class="btn">Explosives</button>
	<button class="btn">Killstreaks</button>
	</div>
					<div class="stat-container">
<div class="title">
	<div class="total-cash">
						<div class="value">$X,XXX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
</div>
						<div class="stat-container-indv">
						<div class="stats-content">230/440</div>
						<div class="stats-cost">$9,999,999</div>
						<div class="stats-title">Wins</div>
						</div><div class="stat-container-indv">
							
						<div class="stats-content">230/440</div>
						<div class="stats-title">Losses</div>
						</div><div class="stat-container-indv">
							
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
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
						<div class="stat-container-indv">
						<div class="stats-content">230</div>
						<div class="stats-title">Acc</div>
						</div>
					</div>
				</div>
				<!-- Firearms tab -->
				<div v-show="true" class="weapons-tab">
					<div class="total-cash">
						<div class="value">$XX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
					<div class="stat-container">
						<table>
							<thead>
								<tr>
									<th>Weapon</th>
									<th>Kills</th>
									<th>KD Ratio</th>
									<th>Deaths</th>
									<th>Headshots</th>
									<th>Lost Guns Cost</th>
									<th>Ammo/Mag Cost</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>M1</th>
									<th>99</th>
									<th>1.5</th>
									<th>2</th>
									<th>99</th>
									<th>$35,000</th>
									<th>$35,000</th>
								</tr>
								<tr>
									<th>M1</th>
									<th>99</th>
									<th>1.5</th>
									<th>2</th>
									<th>99</th>
									<th>$35,000</th>
									<th>$35,000</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- Explosives tab -->
				<div v-show="true" class="weapons-tab">
					<div class="total-cash">
						<div class="value">$XX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
					<div class="stat-container">
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
				</div>
				<!-- Killstreak tab -->
				<div v-show="true" class="killstreak-tab">
					<div class="total-cash">
						<div class="value">$XX,XXX,XXX</div>
						<div class="value-bottom">spent in {#matches} matches!</div>
						<div class="value-gdp">Thats the GDP of {whatever!}</div>
					</div>
					<div class="stat-container">
						<table>
							<thead>
								<tr>
									<th>Kill Streak</th>
									<th>Awarded</th>
									<th>Uses</th>
									<th>Kills/Assists</th>
									<th>Costs</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>Tomahawk</th>
									<th>10</th>
									<th>10</th>
									<th>20</th>
									<th>$15,000,000</th>
								</tr>
								<tr>
									<th>Support Helo</th>
									<th>1</th>
									<th>1</th>
									<th>20</th>
									<th>$40,000,000</th>
								</tr>
							</tbody>
						</table>
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
<style lang="scss" scoped>
.main{
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
	&-top
	{
		display: flex;
		flex-flow: row;
		justify-content: center;
		.player-id{
			font-size: 2rem;
		}
	}
	.player-sys{
		font-size: 1rem;
	}
}

.player-id-section-top {
	margin: .3rem 0;
}
.player-id-section-bottom {
	margin: .3rem 0;
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

.refresh-counter{
	font-size: .75rem;
	font-weight: 200;
	margin: .3rem 0;
}

/* Overview Tab */

.value {
	color: #3e9c35;
	font-size: 2.7rem;
	font-weight: 700;
}

.wrapper-full {
	display: flex;
	justify-content: center;
	width:100%;
	.wrapper {
		margin: 0 1rem;
	}
}

.val1{
	padding: 0 .2rem;
border-bottom: 1px solid $selected-lite;
}

// Stat Container
.stat-container{
	font-size: 1.5rem;
	border-radius: 1rem;
	border: 1px solid $selected-dark;
	display: flex;
	background-color: $background1;
	margin:1rem;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 1rem;
	.stat-container-indv{
		background-color: $background2;
		background-image: url("../assets/corners.png");
		background-size:cover;
		background-repeat: no-repeat;
		width: 125px;
		margin: .5rem;
		// border: 1px solid lightgray;
		//border-radius: .5rem;
		
		.stats-content{
			padding:.3rem;
			color: $text-lite;
		}
		.stats-cost{
			padding:.3rem;
			border-top: 2px solid $text-dark;
			font-size: 1rem;
			color: $good;
			}
		.stats-title{
			padding:.3rem;
			border-top: 2px solid $text-dark;
			font-size: 1rem;
			color: $text-med;
		}
		&:hover{
			background-color: $selected-dark;
			.stats-title{
				border-top: 2px solid $hilight;
				color:$hilight;
			}
			.stats-cost{
				border-top: 2px solid $hilight;
			}
		}
	}
	.title{
		width:100%;
		margin-bottom:.5rem;
	}
	table{
		font-size: .75rem;
		font-weight: 100;
		width:100%;
	}
	
}

@media screen and (min-width: --screen-med) {
	.wrapper {
		width: --screen-med;
	}
}
@media screen and (min-width: --screen-large) {
	.wrapper {
		width: --screen-large;
	}
}
</style>
