<template>
	<div class="stat-container">
		<div class="cat-spend">
			<span class="value">$ {{ formatPrice(otherTotal) }}</span
			><br />spent on killstreaks!!
		</div>
		<table-component
			:tab="1"
			:cat="11"
			:calc-projectiles="4"
			:cost-total="costTotal"
			:killstreak-table="true"
			:display-headshots="false"
			:arr="offKsArr"
			:obj="offKillstreakObject"
			:table-name="'table-off-killstreaks'"
			:name="'Offensive Killstreaks'"
		/>
		<table-component
			:tab="1"
			:cat="12"
			:calc-projectiles="4"
			:cost-total="costTotal"
			:display-headshots="false"
			:killstreak-table="true"
			:arr="suppKsArr"
			:obj="suppKillstreakObject"
			:table-name="'table-supp-killstreaks'"
			:name="'Support Killstreaks'"
		/>
	</div>
</template>
<script>
import { stateMerge } from "vue-object-merge";
import Modal from "./Modal";
import TableComponent from "./TableComponent";

export default {
	name: "Killstreaks",
	components: {
		Modal,
		TableComponent
	},
	props: {
		costTotal: {
			type: Array,
			default: () => []
		},
		offKillstreakObject: {
			type: Object,
			default: () => {}
		},
		suppKillstreakObject: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			totalKillstreakCost: 0,
			debug: false,
			metaObjectOffKs: {
				bradley: {
					properties: {
						name: "bradley",
						nameFull: "Bradley",
						cost: 3166000,
						desc: "Description Here",
						idName: "bradley",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
						//Wheelson is close to TALON
						//TALON is 6,000,000
						//Bradley 3,166,000
						//AVG between the 2 = 4583000
					}
				},
				hover_jet: {
					properties: {
						name: "hover_jet",
						nameFull: "Hover Jet",
						cost: 23700000 + 2799 * 4 + 2194,
						desc: "Price estimated based on AV-8 Harrier and rocket salvo",
						idName: "hover_jet",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
						//AV-8 Cost 23700000
						//Assuming the rocket salvo is LAU-5003 pod - CRV7 missiles
						//and it fires 4 (need to confirm) 2799 each
						//300 rounds of 25mm ammo = 2194
					}
				},
				precision_airstrike: {
					properties: {
						name: "precision_airstrike",
						nameFull: "Precision Airstrike",
						cost: 20000000 + 71084,
						desc:
							"A-10 Strafing Run. Price estimated on 2x A-10s and 4 seconds of GAU-8 fire",
						idName: "precision_airstrike",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
						//2x A-10s 2x strikes
						// GAU price each 136.70
						// Strafing duration 2 seconds
						//3900rpm
						//17771 dollars per burst, times 4
					}
				},
				chopper_support: {
					properties: {
						name: "chopper_support",
						nameFull: "Chopper Support",
						cost: 35000000,
						desc: "Estimated price of a Pavelow helicopter",
						idName: "chopper_support",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				pac_sentry: {
					properties: {
						name: "pac_sentry",
						nameFull: "Wheelson",
						cost: 250000,
						desc: "Description Here",
						idName: "pac_sentry",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				juggernaut: {
					properties: {
						name: "juggernaut",
						nameFull: "Juggernaut",
						cost: 255000,
						desc: "Price estimated on Heavy Armour Suit and M134 Minigun",
						idName: "juggernaut",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				nuke: {
					properties: {
						name: "nuke",
						nameFull: "Tactical Nuke",
						cost: 35500000,
						desc: "Description Here",
						idName: "nuke",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				sentry_gun: {
					properties: {
						name: "sentry_gun",
						nameFull: "Sentry Gun",
						cost: 250000,
						desc: "Description Here",
						idName: "sentry_gun",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				gunship: {
					properties: {
						name: "gunship",
						nameFull: "Gunship",
						cost: 190000000 + 2194 + 4000 + 380,
						desc: "Cost estimation based on a fully loaded AC-130U Spooky II",
						idName: "gunship",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
						//190000000 Unit Cost
						//105mm = 400
						//25mm *300 = 2194
						//40mm * 40 = 380
					}
				},
				toma_strike: {
					properties: {
						name: "toma_strike",
						nameFull: "Cluster Mortar Strike",
						cost: 2190,
						desc: "Cost estimation of mortar shells fired",
						idName: "toma_strike",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
						//Aparently Toma_Strike is Mortar/Cluster Strike
						//6 shots
					}
				},
				cruise_predator: {
					properties: {
						name: "cruise_predator",
						nameFull: "Cruise Missile",
						cost: 1400000,
						desc: "Cost estimation of Tomahawk missiles",
						idName: "cruise_predator",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				manual_turret: {
					properties: {
						name: "manual_turret",
						nameFull: "Shield Turret",
						cost: 16000,
						desc:
							"Cost estimation based on a sheilded and mounted Browning M2 HMG",
						idName: "manual_turret",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				white_phosphorus: {
					properties: {
						name: "white_phosphorus",
						nameFull: "White Phosphorous WIP",
						cost: 1,
						desc: "Description Here",
						idName: "white_phosphorus",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				chopper_gunner: {
					properties: {
						name: "chopper_gunner",
						nameFull: "Chopper Gunner",
						cost: 35500000,
						desc: "Cost based on AH-64 helicopter",
						idName: "chopper_gunner",
						type: "killstreak" //firearm, killstreak, lThrowable, tThrowable, melee
						//8 Hellfires
						//300 Cannon Rounds
					}
				}
			},
			metaObjectSuppKs: {
				airdrop: {
					properties: {
						name: "airdrop",
						nameFull: "Airdrop WIP",
						cost: 3,
						totalCost: 0,
						desc: "Description Here",
						idName: "airdrop",
						type: "tkillstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				radar_drone_overwatch: {
					properties: {
						name: "radar_drone_overwatch",
						nameFull: "Personal Radar",
						cost: 14600000,
						totalCost: 0,
						desc: "Description Here",
						idName: "radar_drone_overwatch",
						type: "tkillstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				scrambler_drone_guard: {
					properties: {
						name: "scrambler_drone_guard",
						nameFull: "WIP",
						cost: 1,
						totalCost: 0,
						desc: "Description Here",
						idName: "scrambler_drone_guard",
						type: "tkillstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				uav: {
					properties: {
						name: "uav",
						nameFull: "UAV",
						cost: 15900000,
						totalCost: 0,
						desc: "Cost based on MQ-9 Predator",
						idName: "uav",
						type: "tkillstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				airdrop_multiple: {
					properties: {
						name: "airdrop_multiple",
						nameFull: "Emergency Airdrop WIP",
						cost: 1,
						totalCost: 0,
						desc: "Description Here",
						idName: "airdrop_multiple",
						type: "tkillstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				},
				directional_uav: {
					properties: {
						name: "directional_uav",
						nameFull: "X47 WIP",
						cost: 1,
						totalCost: 0,
						desc: "Description Here",
						idName: "directional_uav",
						type: "tkillstreak" //firearm, killstreak, lThrowable, tThrowable, melee
					}
				}
			},
			offKsArr: [],
			offKsCost: 0,
			suppKsArr: [],
			suppKsCost: 0,
			totalKillstreakCostFormatted: 0,
			otherTotal: 0
		};
	},
	computed: {
		//Removed
	},
	created() {
		this.console = window.console; //Testing
		this.combineObjects(); // Combines API data and Local Metadata
	},
	mounted() {
		this.offKsObjToArr(); // Convert piece of JSON to Array for easy cost addition and loops
		this.suppKsObjToArr(); // Convert piece of JSON to Array for easy cost addition and loops
		// this.totalKillstreakCostFormatted = this.formatPrice(
		// 	this.totalKillstreakCost
		// ); //Formats Cost of OFF Killstreak (adds commas and cents)
	},
	updated() {
		this.totalCat();
	},
	methods: {
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		combineObjects() {
			// Combines API data and Local Metadata
			stateMerge(this.offKillstreakObject, this.metaObjectOffKs);
			stateMerge(this.suppKillstreakObject, this.metaObjectSuppKs);
		},
		offKsObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops
			this.offKsArr = Object.keys(this.offKillstreakObject).map(
				i => this.offKillstreakObject[i]
			);
			this.totalCostAdd();
		},
		suppKsObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops
			this.suppKsArr = Object.keys(this.suppKillstreakObject).map(
				i => this.suppKillstreakObject[i]
			);
			this.totalCostAdd();
		},
		totalCostAdd() {
			//Reads the array created from objToArr() to add up costs
			let totalCost = 0;
			for (let i = 0; i < this.offKsArr.length; i++) {
				//this.console.log(this.offKsArr[i].properties.totalCost)
				totalCost += this.offKsArr[i].properties.totalCost;
				//this.console.log(totalCost)
			}
			this.totalKillstreakCost = totalCost;
		},
		totalCat() {
			this.otherTotal = this.costTotal[10] + this.costTotal[11];
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/tab-styles.scss";
// .table-title {
// 	width: 100%;
// 	font-size: 1rem;
// }

// .value {
// 	color: #3e9c35;
// 	font-size: 2rem;
// 	font-weight: 300;
// }

// .cat-spend {
// 	padding-bottom: 1rem;
// }

// .stat-container {
// 	font-size: 1.5rem;
// 	display: flex;
// 	flex-flow: column;
// 	margin: 1rem 0;
// 	margin-top: 0;
// 	flex-wrap: wrap;
// 	justify-content: space-evenly;
// 	padding: 0;
// 	.value {
// 		padding: 0.5rem 0;
// 	}
// 	.stat-container-indv {
// 		background-color: $background2;
// 		background-image: url("../assets/corners.png");
// 		background-size: cover;
// 		background-repeat: no-repeat;
// 		width: 125px;
// 		margin: 0.5rem;
// 		.stats-content {
// 			padding: 0.3rem;
// 			color: $text-lite;
// 		}
// 		.stats-cost {
// 			padding: 0.3rem;
// 			border-top: 2px solid $text-dark;
// 			font-size: 1rem;
// 			color: $good;
// 		}
// 		.stats-title {
// 			padding: 0.3rem;
// 			border-top: 2px solid $text-dark;
// 			font-size: 1rem;
// 			color: $text-med;
// 		}
// 		&:hover {
// 			background-color: $selected-dark;
// 			.stats-title {
// 				border-top: 2px solid $hilight;
// 				color: $hilight;
// 			}
// 			.stats-cost {
// 				border-top: 2px solid $hilight;
// 			}
// 		}
// 	}
// 	.title {
// 		width: 100%;
// 		margin-bottom: 0.5rem;
// 	}
// }
</style>
