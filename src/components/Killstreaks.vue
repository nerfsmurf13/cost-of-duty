<template>
	<div class="stat-container">
		<div class="total-cash">
			<div class="value good">$ {{ formatPrice(totalCostAdd) }}</div>
		</div>
		<div class="table-title">Lethal Killstreaks</div>
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
				<tr v-for="(killstreak, index) in offKillstreakObject" :key="index">
					<td>{{ killstreak.properties.name }}</td>
					<td>{{ killstreak.properties.awardedCount }}</td>
					<td>{{ killstreak.properties.uses }}</td>
					<td>{{ killstreak.properties.extraStat1 }}</td>
					<td class="killstreak-total">
						{{
							formatPrice(
								(killstreak.properties.totalCost =
									killstreak.properties.uses * killstreak.properties.cost)
							)
						}}
					</td>
				</tr>
			</tbody>
		</table>
		<div class="table-title">Non-Lethal Killstreaks</div>
		<table>
			<thead>
				<tr class="tablehead">
					<th>Kill Streak</th>
					<th>Awarded</th>
					<th>Uses</th>
					<th>Kills/Assists</th>
					<th>Costs</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(killstreak, index) in tactKillstreakObject" :key="index">
					<td>{{ killstreak.properties.name }}</td>
					<td>{{ killstreak.properties.awardedCount }}</td>
					<td>{{ killstreak.properties.uses }}</td>
					<td>{{ killstreak.properties.extraStat1 }}</td>
					<td :id="killstreak.properties.name">
						${{
							formatPrice(
								killstreak.properties.cost * killstreak.properties.uses
							)
						}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import { stateMerge } from "vue-object-merge";

export default {
	name: "Killstreaks",
	props: {
		offKillstreakObject: {
			type: Object,
			default: () => {}
		},
		tactKillstreakObject: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			totalKillstreakCost: 0,
			debug: false,
			metaObject: {
				bradley: {
					properties: {
						name: "Bradley",
						nameFull: "Bradley Full",
						cost: 3166000
						// totalCost: computed("uses", "cost", function() {
						// 	return this.uses * this.cost;
						// }),
					}
				},
				hover_jet: {
					properties: {
						name: "Hover Jet",
						nameFull: "AV-8",
						cost: 1500000
					}
				},
				precision_airstrike: {
					properties: {
						name: "precision_airstrike",
						nameFull: "Cluster Mortars",
						cost: 1
					}
				},
				chopper_support: {
					properties: {
						name: "chopper_support",
						nameFull: "AV-8",
						cost: 1
					}
				},
				pac_sentry: {
					properties: {
						name: "pac_sentry",
						nameFull: "AV-8",
						cost: 1
					}
				},
				juggernaut: {
					properties: {
						name: "juggernaut",
						nameFull: "AV-8",
						cost: 1
					}
				},
				nuke: {
					properties: {
						name: "nuke",
						nameFull: "AV-8",
						cost: 1
					}
				},
				sentry_gun: {
					properties: {
						name: "sentry_gun",
						nameFull: "AV-8",
						cost: 1
					}
				},
				gunship: {
					properties: {
						name: "gunship",
						nameFull: "AV-8",
						cost: 1
					}
				},
				toma_strike: {
					properties: {
						name: "toma_strike",
						nameFull: "Tomahawk Land Attack Missile",
						cost: 1400000
					}
				},
				cruise_predator: {
					properties: {
						name: "cruise_predator",
						nameFull: "Tomahawk Land Attack Missile",
						cost: 1400000
					}
				},
				manual_turret: {
					properties: {
						name: "manual_turret",
						nameFull: "Tomahawk Land Attack Missile",
						cost: 1400000
					}
				},
				white_phosphorus: {
					properties: {
						name: "white_phosphorus",
						nameFull: "Tomahawk Land Attack Missile",
						cost: 1400000
					}
				},
				chopper_gunner: {
					properties: {
						name: "chopper_gunner",
						nameFull: "Tomahawk Land Attack Missile",
						cost: 1400000
					}
				}
			},
			metaTactObject: {
				airdrop: {
					properties: {
						name: "airdrop",
						nameFull: "airdrop",
						cost: 3,
						totalCost: 0
					}
				},
				radar_drone_overwatch: {
					properties: {
						name: "radar_drone_overwatch",
						nameFull: "radar_drone_overwatch",
						cost: 1,
						totalCost: 0
					}
				},
				scrambler_drone_guard: {
					properties: {
						name: "scrambler_drone_guard",
						nameFull: "Cluster Mortars",
						cost: 1,
						totalCost: 0
					}
				},
				uav: {
					properties: {
						name: "uav",
						nameFull: "AV-8",
						cost: 1,
						totalCost: 0
					}
				},
				airdrop_multiple: {
					properties: {
						name: "airdrop_multiple",
						nameFull: "AV-8",
						cost: 1,
						totalCost: 0
					}
				},
				directional_uav: {
					properties: {
						name: "directional_uav",
						nameFull: "AV-8",
						cost: 1,
						totalCost: 0
					}
				}
			}
		};
	},
	computed: {
		// sortedObject() {
		// 	return Object.values(this.offKillstreakObject).sort();
		// },
		objToArr() {
			return Object.keys(this.offKillstreakObject).map(
				i => this.offKillstreakObject[i]
			);
		},
		totalCostAdd() {
			let totalCost = 0;
			for (let i = 0; i < this.objToArr.length; i++) {
				totalCost += this.objToArr[i].properties.totalCost;
			}
			return totalCost;
		},
		allKillstreakCost() {
			let costs = document.body.querySelectorAll("totalKillstreakCost");
			let total = 0;
			for (let i = 0; i < costs.length; i++) {
				total += i;
			}
			return total;
		}
		// totalCost() {
		// 	let totalCost = 0;
		// 	for (let i = 0; i < Object.keys(offKillstreakObject).length; i++) {
		// 		i;
		// 	}
		// }
	},
	mounted() {
		this.combineObjects();
	},
	methods: {
		formatPrice(value) {
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		combineObjects() {
			stateMerge(this.offKillstreakObject, this.metaObject);
			stateMerge(this.tactKillstreakObject, this.metaTactObject);
		}

		// sortedCost() {
		//   return this.killstreakObject.sort((a, b) => { return b.cost - a.cost;});
		// }
	}
};
</script>

<style lang="scss" scoped>
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

.table-title {
	width: 100%;
	font-size: 1rem;
}

.stat-container {
	font-size: 1.5rem;
	border: 1px solid $selected-dark;
	display: flex;
	background-color: $background1;
	margin: 1rem 0;
	margin-top: 0;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 0;
	.value {
		padding: 0.5rem 0;
	}
	.stat-container-indv {
		background-color: $background2;
		background-image: url("../assets/corners.png");
		background-size: cover;
		background-repeat: no-repeat;
		width: 125px;
		margin: 0.5rem;

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
		border-collapse: collapse;
		font-weight: 100;
		width: 100%;
		th {
			border-top: 1px solid $hilight;
			border-bottom: 1px solid $hilight;
			// background-color: $good;
		}
		tr {
			// background: $selected-dark;
			border-bottom: 1px solid $selected-dark;
			padding: 0.2rem 0;
		}
		tr:hover {
			background: $hilight;
		}
	}
}
</style>
