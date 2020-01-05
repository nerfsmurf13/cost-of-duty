<template>
	<div class="stat-container">
		<div class="cat-spend">
			<span class="value">$ {{ formatPrice(firearmTotal) }}</span
			><br />spent on firearms and ammunition!
		</div>

		<table-component
			:cat="0"
			:cost-total="costTotal"
			:arr="arArr"
			:obj="itemDataAr"
			:table-name="'table-ar'"
			:name="'Assault Rifles'"
		/>
		<table-component
			:cat="1"
			:cost-total="costTotal"
			:arr="smgArr"
			:obj="itemDataSmg"
			:table-name="'table-smg'"
			:name="'Submachine Guns'"
		/>
		<table-component
			:cat="2"
			:cost-total="costTotal"
			:arr="lmgArr"
			:obj="itemDataLmg"
			:table-name="'table-lmg'"
			:name="'Light Machine Guns'"
		/>
		<table-component
			:cat="3"
			:cost-total="costTotal"
			:arr="dmrArr"
			:obj="itemDataDmr"
			:table-name="'table-dmr'"
			:name="'DMRs'"
		/>
		<table-component
			:cat="4"
			:cost-total="costTotal"
			:arr="sniperArr"
			:obj="itemDataSniper"
			:table-name="'table-sniper'"
			:name="'Snipers'"
		/>
		<table-component
			:cat="5"
			:cost-total="costTotal"
			:arr="shotgunArr"
			:obj="itemDataShotgun"
			:table-name="'table-shotgun'"
			:name="'Shotguns'"
		/>
		<table-component
			:cat="6"
			:cost-total="costTotal"
			:arr="pistolArr"
			:obj="itemDataPistol"
			:table-name="'table-pistol'"
			:name="'Pistols'"
		/>
	</div>
</template>
<script>
import { stateMerge } from "vue-object-merge";
import Modal from "./Modal";
import TableComponent from "./TableComponent";

export default {
	name: "Firearms",
	components: {
		Modal,
		TableComponent
	},
	props: {
		tab: {
			type: Number,
			default: 0
		},
		cat: {
			type: Number,
			default: 0
		},
		costTotal: {
			type: Array,
			default: () => []
		},
		itemDataAr: {
			type: Object,
			default: () => {}
		},
		itemDataSmg: {
			type: Object,
			default: () => {}
		},
		itemDataDmr: {
			type: Object,
			default: () => {}
		},
		itemDataSniper: {
			type: Object,
			default: () => {}
		},
		itemDataTacticals: {
			type: Object,
			default: () => {}
		},
		itemDataLethals: {
			type: Object,
			default: () => {}
		},
		itemDataLmg: {
			type: Object,
			default: () => {}
		},
		itemDataLauncher: {
			type: Object,
			default: () => {}
		},
		itemDataPistol: {
			type: Object,
			default: () => {}
		},
		itemDataOther: {
			type: Object,
			default: () => {}
		},
		itemDataShotgun: {
			type: Object,
			default: () => {}
		},
		itemDataMelee: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			isModalVisible: false,
			debug: false,
			selected: {}, //
			metaObjectAr: {
				iw8_ar_falima: {
					properties: {
						name: "iw8_ar_falima",
						nameFull: "FN FAL",
						desc: "Enter description here",
						cost: 1499,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_mike4: {
					properties: {
						name: "iw8_ar_mike4",
						nameFull: "M4A1",
						desc: "Enter description here",
						cost: 700,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_falpha: {
					properties: {
						name: "iw8_ar_falpha",
						nameFull: "FAMAS",
						desc: "Enter description here",
						cost: 6500,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_mcharlie: {
					properties: {
						name: "iw8_ar_mcharlie",
						nameFull: "M13",
						desc: "Enter description here",
						cost: 2995,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_akilo47: {
					properties: {
						name: "iw8_ar_akilo47",
						nameFull: "AK-47",
						desc: "Enter description here",
						cost: 1200,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_kilo433: {
					properties: {
						name: "iw8_ar_kilo433",
						nameFull: "Kilo 141",
						desc: "Enter description here",
						cost: 2795,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_scharlie: {
					properties: {
						name: "iw8_ar_scharlie",
						nameFull: "FN Scar",
						desc: "Enter description here",
						cost: 2995,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_asierra12: {
					properties: {
						name: "iw8_ar_asierra12",
						nameFull: "ODIN wip",
						desc: "Enter description here",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				}
			},
			metaObjectSmg: {
				iw8_sm_mpapa7: {
					properties: {
						name: "iw8_sm_mpapa7",
						nameFull: "MP-7",
						desc: "Enter description here",
						cost: 1799.95,
						roundCost: 0.48,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_augolf: {
					properties: {
						name: "iw8_sm_augolf",
						nameFull: "AUG",
						desc: "Enter description here",
						cost: 1899,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_papa90: {
					properties: {
						name: "iw8_sm_papa90",
						nameFull: "P90",
						desc: "Enter description here",
						cost: 1751,
						roundCost: 0.5,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_mpapa5: {
					properties: {
						name: "iw8_sm_mpapa5",
						nameFull: "MP5",
						desc: "Enter description here",
						cost: 2150,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_beta: {
					properties: {
						name: "iw8_sm_beta",
						nameFull: "PP19 Bizon",
						desc: "Enter description here",
						cost: 1751,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_uzulu: {
					properties: {
						name: "iw8_sm_uzulu",
						nameFull: "Uzi",
						desc: "Enter description here",
						cost: 4985,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				}
			},
			metaObjectDmr: {
				iw8_sn_kilo98: {
					properties: {
						name: "iw8_sn_kilo98",
						nameFull: "Kar98k",
						desc: "Enter description here",
						cost: 699,
						roundCost: 0.3,
						magCost: 5,
						magSize: 30,
						type: "firearm"
					}
				},
				iw8_sn_mike14: {
					properties: {
						name: "iw8_sn_mike14",
						nameFull: "EBR-14",
						desc: "Enter description here",
						cost: 3549,
						roundCost: 0.18,
						magCost: 5,
						magSize: 30,
						type: "firearm"
					}
				},
				iw8_sn_delta: {
					properties: {
						name: "iw8_sn_delta",
						nameFull: "Mk2 Carbine",
						desc: "Enter description here",
						cost: 8500,
						roundCost: 1.35,
						magCost: 5,
						magSize: 30,
						type: "firearm"
					}
				}
			},
			metaObjectSniper: {
				iw8_sn_sbeta: {
					properties: {
						name: "iw8_sn_sbeta",
						nameFull: "Dragunov",
						desc: "Enter description here",
						cost: 6500,
						roundCost: 0.18,
						magCost: 5,
						magSize: 30,
						type: "sniper"
					}
				},
				iw8_sn_alpha50: {
					properties: {
						name: "iw8_sn_alpha50",
						nameFull: "AX50",
						desc: "Enter description here",
						cost: 11082,
						roundCost: 3.5,
						magCost: 5,
						magSize: 30,
						type: "sniper"
					}
				},
				iw8_sn_hdromeo: {
					properties: {
						name: "iw8_sn_hdromeo",
						nameFull: "HDR",
						desc: "Enter description here",
						cost: 7000,
						roundCost: 3.1,
						magCost: 5,
						magSize: 30,
						type: "sniper"
					}
				}
			},
			metaObjectPistol: {
				iw8_pi_golf21: {
					properties: {
						name: "iw8_pi_golf21",
						nameFull: "X16",
						desc: "Enter description here",
						cost: 655,
						roundCost: 0.22,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_pi_papa320: {
					properties: {
						name: "iw8_pi_papa320",
						nameFull: "M19",
						desc: "Enter description here",
						cost: 529,
						roundCost: 0.22,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_pi_mike1911: {
					properties: {
						name: "iw8_pi_mike1911",
						nameFull: "1911",
						desc: "Enter description here",
						cost: 521,
						roundCost: 0.22,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_pi_decho: {
					properties: {
						name: "iw8_pi_decho",
						nameFull: "Desert Eagle",
						desc: "Enter description here",
						cost: 1742,
						roundCost: 1.2,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_pi_cpapa: {
					properties: {
						name: "iw8_pi_cpapa",
						nameFull: ".357",
						desc: "Enter description here",
						cost: 1340,
						roundCost: 0.24,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				}
			},
			metaObjectShotgun: {
				iw8_sh_charlie725: {
					properties: {
						name: "iw8_sh_charlie725",
						nameFull: "725",
						desc: "Enter description here",
						cost: 1899,
						roundCost: 0.5,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sh_dpapa12: {
					properties: {
						name: "iw8_sh_dpapa12",
						nameFull: "R9-0",
						desc: "Enter description here",
						cost: 1400,
						roundCost: 0.5,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sh_oscar12: {
					properties: {
						name: "iw8_sh_oscar12",
						nameFull: "Origin 12",
						desc: "Enter description here",
						cost: 2800,
						roundCost: 0.5,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sh_romeo870: {
					properties: {
						name: "iw8_sh_romeo870",
						nameFull: "Model 680",
						desc: "Enter description here",
						cost: 549,
						roundCost: 0.5,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				}
			},
			metaObjectLmg: {
				iw8_lm_dblmg: {
					properties: {
						name: "iw8_lm_dblmg",
						nameFull: "iw8_lm_dblmg",
						desc: "Enter description here",
						cost: 2200,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_lm_kilo121: {
					properties: {
						name: "iw8_lm_kilo121",
						nameFull: "M91",
						desc: "Enter description here",
						cost: 17435,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_lm_lima86: {
					properties: {
						name: "iw8_lm_lima86",
						nameFull: "SA87",
						desc: "Enter description here",
						cost: 4495,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_lm_mgolf34: {
					properties: {
						name: "iw8_lm_mgolf34",
						nameFull: "MG34",
						desc: "Enter description here",
						cost: 12500,
						roundCost: 0.3,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_lm_pkilo: {
					properties: {
						name: "iw8_lm_pkilo",
						nameFull: "PKM",
						desc: "Enter description here",
						cost: 2750,
						roundCost: 0.18,
						magCost: 10,
						magSize: 5,
						type: "firearm"
						//demoVar: magCost * shots
						//Fal
					}
				}
			},
			firearmTotal: 0,
			arArr: [],
			totalArCost: 0,
			smgArr: [],
			totalSmgCost: 0,
			dmrArr: [],
			totalDmrCost: 0,
			lmgArr: [],
			totalLmgCost: 0,
			sniperArr: [],
			totalSniperCost: 0,
			pistolArr: [],
			totalPistolCost: 0,
			shotgunArr: [],
			totalShotgunCost: 0
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
		this.smgObjToArr(); // Convert piece of JSON to Array for easy cost addition and loops
		this.arObjToArr();
		this.dmrObjToArr();
		this.sniperObjToArr();
		this.pistolObjToArr();
		this.shotgunObjToArr();
		this.lmgObjToArr();
	},
	updated() {
		this.totalCat();
	},
	methods: {
		openDetails(e) {
			this.showModal();
			this.clickEven(e);
			this.console.log(e);
			this.console.log(
				e.target.parentElement.parentElement.parentElement.parentElement.id
			);
		},
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		},
		totalCat() {
			this.firearmTotal =
				this.costTotal[0] +
				this.costTotal[1] +
				this.costTotal[2] +
				this.costTotal[3] +
				this.costTotal[4] +
				this.costTotal[5] +
				this.costTotal[6];
		},
		clickEven(e) {
			let wid = e.toElement.id;
			let cat =
				e.target.parentElement.parentElement.parentElement.parentElement.id;
			//this.console.log(wid);
			//this.selected = this.itemDataSmg[wid].properties;
			//this.console.log(this.itemDataSmg[wid].properties);
			if (cat == "table-dmr") {
				this.selected = this.itemDataDmr[wid].properties;
			}
			if (cat == "table-smg") {
				this.selected = this.itemDataSmg[wid].properties;
			}
			if (cat == "table-ar") {
				this.selected = this.itemDataAr[wid].properties;
			}
			if (cat == "table-pistol") {
				this.selected = this.itemDataPistol[wid].properties;
			}
			if (cat == "table-shotgun") {
				this.selected = this.itemDataShotgun[wid].properties;
			}
			if (cat == "table-lmg") {
				this.selected = this.itemDataLmg[wid].properties;
			}
			if (cat == "table-sniper") {
				this.selected = this.itemDataSniper[wid].properties;
			}
		},
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		combineObjects() {
			// Combines API data and Local Metadata
			stateMerge(this.itemDataSmg, this.metaObjectSmg);
			stateMerge(this.itemDataAr, this.metaObjectAr);
			stateMerge(this.itemDataDmr, this.metaObjectDmr);
			stateMerge(this.itemDataPistol, this.metaObjectPistol);
			stateMerge(this.itemDataShotgun, this.metaObjectShotgun);
			stateMerge(this.itemDataLmg, this.metaObjectLmg);
			stateMerge(this.itemDataSniper, this.metaObjectSniper);
		},
		arObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.arArr = Object.keys(this.itemDataAr).map(i => this.itemDataAr[i]);
			//this.totalCostAdd()
		},
		smgObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.smgArr = Object.keys(this.itemDataSmg).map(j => this.itemDataSmg[j]);
			//this.totalCostAdd()
		},
		dmrObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.dmrArr = Object.keys(this.itemDataDmr).map(j => this.itemDataDmr[j]);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		sniperObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.sniperArr = Object.keys(this.itemDataSniper).map(
				j => this.itemDataSniper[j]
			);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		pistolObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.pistolArr = Object.keys(this.itemDataPistol).map(
				j => this.itemDataPistol[j]
			);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		shotgunObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.shotgunArr = Object.keys(this.itemDataShotgun).map(
				j => this.itemDataShotgun[j]
			);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		lmgObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.lmgArr = Object.keys(this.itemDataLmg).map(j => this.itemDataLmg[j]);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		totalDmrCostCalc() {
			let val = 0;
			for (let i = 0; i < this.dmrArr.length; i++) {
				let ammo =
					this.dmrArr[i].properties.roundCost * this.dmrArr[i].properties.shots;
				let gear =
					this.dmrArr[i].properties.cost * this.dmrArr[i].properties.deaths;
				let total = ammo + gear;
				val += total;
				this.console.log(ammo);
				this.console.log(gear);
				this.console.log(val);
			}
			this.totalDmrCost = val;
		}
		// totalCostAdd() {
		// 	//Reads the array created from objToArr() to add up costs
		// 	let totalCost = 0;
		// 	for (let i = 0; i < this.offKsArr.length; i++) {
		// 		this.console.log(this.offKsArr[i].properties.totalCost)
		// 		totalCost += this.offKsArr[i].properties.totalCost;
		// 		this.console.log(totalCost)
		// 	}
		// 	this.totalKillstreakCost = totalCost;
		// },
	}
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/tab-styles.scss";
// .value {
// 	color: #3e9c35;
// 	font-size: 2rem;
// 	font-weight: 300;
// }

// .cat-spend {
// 	padding-bottom: 1rem;
// }

// .table-title {
// 	width: 100%;
// 	font-size: 1rem;
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
