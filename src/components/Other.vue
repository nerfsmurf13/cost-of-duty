<template>
	<div class="stat-container">
		<!-- :item-data-lethals
					:item-data-tacticals
					:item-data-dmr
					:item-data-sniper -->
		<div class="cat-spend">
			<span class="value">$ {{ formatPrice(otherTotal) }}</span
			><br />spent on launchers, rockets, melee weapons and throwables!
		</div>
		<table-component
			:tab="1"
			:cat="6"
			:cost-total="costTotal"
			:display-headshots="false"
			:arr="launcherArr"
			:obj="itemDataLauncher"
			:table-name="'table-launcher'"
			:name="'Rocket Launchers'"
		/>

		<table-component
			:arr="lethalArr"
			:cat="7"
			:cost-total="costTotal"
			:calc-projectiles="2"
			:display-headshots="false"
			:display-deaths="false"
			:display-kd="false"
			:obj="itemDataLethal"
			:table-name="'table-lethal'"
			:name="'Lethal Equipment'"
		/>

		<table-component
			:arr="otherArr"
			:calc-projectiles="3"
			:cat="8"
			:cost-total="costTotal"
			:display-headshots="false"
			:obj="itemDataOther"
			:table-name="'table-other'"
			:name="'Other'"
		/>

		<table-component
			:arr="meleeArr"
			:cat="9"
			:cost-total="costTotal"
			:calc-projectiles="3"
			:display-headshots="false"
			:obj="itemDataMelee"
			:table-name="'table-melee'"
			:name="'Melee'"
		/>
		<!-- 
		<table-component
			:arr="shotgunArr"
			:obj="itemDataShotgun"
			:table-name="'table-shotgun'"
			:name="'Shotguns'"
		/>
		<table-component
			:arr="pistolArr"
			:obj="itemDataPistol"
			:table-name="'table-pistol'"
			:name="'Pistols'"
		/> -->
	</div>
</template>
<script>
import { stateMerge } from "vue-object-merge";
import Modal from "./Modal";
import TableComponent from "./TableComponent";

export default {
	name: "Other",
	components: {
		Modal,
		TableComponent
	},
	props: {
		costTotal: {
			type: Array,
			default: () => []
		},
		itemDataLethal: {
			type: Object,
			default: () => {}
		},
		itemDataTactical: {
			type: Object,
			default: () => {}
		},
		itemDataLauncher: {
			type: Object,
			default: () => {}
		},
		itemDataOther: {
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
			otherTotal: 0,
			debug: false,
			selected: {},
			metaObjectLethal: {
				equip_frag: {
					properties: {
						name: "equip_frag",
						nameFull: "equip_frag",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_thermite: {
					properties: {
						name: "equip_thermite",
						nameFull: "equip_thermite",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_semtex: {
					properties: {
						name: "equip_semtex",
						nameFull: "equip_semtex",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_claymore: {
					properties: {
						name: "equip_claymore",
						nameFull: "equip_claymore",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_c4: {
					properties: {
						name: "equip_c4",
						nameFull: "equip_c4",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_at_mine: {
					properties: {
						name: "equip_at_mine",
						nameFull: "equip_at_mine",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_throwing_knife: {
					properties: {
						name: "equip_throwing_knife",
						nameFull: "equip_throwing_knife",
						desc: "Enter description here",
						cost: 1
					}
				},
				equip_molotov: {
					properties: {
						name: "equip_molotov",
						nameFull: "equip_molotov",
						desc: "Enter description here",
						cost: 1
					}
				}
			},
			metaObjectLauncher: {
				iw8_la_gromeo: {
					properties: {
						name: "iw8_la_gromeo",
						nameFull: "iw8_la_gromeo-7",
						desc: "Enter description here",
						cost: 1000,
						roundCost: 1
					}
				},
				iw8_la_rpapa7: {
					properties: {
						name: "iw8_la_rpapa7",
						nameFull: "iw8_la_rpapa7",
						desc: "Enter description here",
						cost: 1000,
						roundCost: 1
					}
				},
				iw8_la_juliet: {
					properties: {
						name: "iw8_la_juliet",
						nameFull: "iw8_la_juliet",
						desc: "Enter description here",
						cost: 1000,
						roundCost: 1
					}
				},
				iw8_la_kgolf: {
					properties: {
						name: "iw8_la_kgolf",
						nameFull: "iw8_la_kgolf",
						desc: "Enter description here",
						cost: 1000,
						roundCost: 1
					}
				},
				iw8_la_mike32: {
					properties: {
						name: "iw8_la_mike32",
						nameFull: "iw8_la_mike32",
						desc: "Enter description here",
						cost: 1000,
						roundCost: 1
					}
				}
			},
			metaObjectOther: {
				iw8_me_riotshield: {
					properties: {
						name: "iw8_me_riotshield",
						nameFull: "iw8_me_riotshield",
						desc: "Enter description here",
						cost: 1000
					}
				}
			},
			metaObjectMelee: {
				iw8_knife: {
					properties: {
						name: "iw8_knife",
						nameFull: "iw8_knife",
						desc: "Enter description here",
						cost: 10
					}
				}
			},
			tacticalArr: [],
			totalTacticalCost: 0,
			lethalArr: [],
			totalLethalCost: 0,
			launcherArr: [],
			totalLauncherCost: 0,
			otherArr: [],
			totalOtherCost: 0,
			meleeArr: [],
			totalMeleeCost: 0
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
		//this.tacticalObjToArr(); // Convert piece of JSON to Array for easy cost addition and loops
		this.lethalObjToArr();
		this.otherObjToArr();
		this.launcherObjToArr();
		this.meleeObjToArr();
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
		clickEven(e) {
			let wid = e.toElement.id;
			let cat =
				e.target.parentElement.parentElement.parentElement.parentElement.id;
			//this.console.log(wid);
			//this.selected = this.itemDataSmg[wid].properties;
			//this.console.log(this.itemDataSmg[wid].properties);
			if (cat == "table-lethal") {
				this.selected = this.itemDataLethal[wid].properties;
			}
			// if (cat == "table-tactical") {
			// 	this.selected = this.itemDataTactical[wid].properties;
			// }
			if (cat == "table-other") {
				this.selected = this.itemDataOther[wid].properties;
			}
			if (cat == "table-melee") {
				this.selected = this.itemDataMelee[wid].properties;
			}
			if (cat == "table-launcher") {
				this.selected = this.itemDataLauncher[wid].properties;
			}
		},
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		combineObjects() {
			// Combines API data and Local Metadata
			stateMerge(this.itemDataLethal, this.metaObjectLethal);
			//stateMerge(this.itemDataTactical, this.metaObjectTactical);
			stateMerge(this.itemDataOther, this.metaObjectOther);
			stateMerge(this.itemDataMelee, this.metaObjectMelee);
			stateMerge(this.itemDataLauncher, this.metaObjectLauncher);
		},
		lethalObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.lethalArr = Object.keys(this.itemDataLethal).map(
				i => this.itemDataLethal[i]
			);
			//this.totalCostAdd()
		},
		otherObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.otherArr = Object.keys(this.itemDataOther).map(
				j => this.itemDataOther[j]
			);
			//this.totalCostAdd()
		},
		launcherObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.launcherArr = Object.keys(this.itemDataLauncher).map(
				j => this.itemDataLauncher[j]
			);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		meleeObjToArr() {
			// Convert piece of JSON to Array for easy cost addition and loops this.itemData_Ar
			this.meleeArr = Object.keys(this.itemDataMelee).map(
				j => this.itemDataMelee[j]
			);
			//this.totalDmrCostCalc();
			//this.totalCostAdd()
		},
		totalCat() {
			this.otherTotal =
				this.costTotal[6] +
				this.costTotal[7] +
				this.costTotal[8] +
				this.costTotal[9];
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
$bad: #871e1a;
$good: #77b164;
$background1: #000;
$background2: #111;
$selected-lite: #43677b;
$selected-dark: #253c4b;
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

.value {
	color: #3e9c35;
	font-size: 2rem;
	font-weight: 300;
}

.cat-spend {
	padding-bottom: 1rem;
}

.stat-container {
	font-size: 1.5rem;
	//border: 1px solid $selected-dark;
	display: flex;
	flex-flow: column;
	//background-color: $background1;
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
}
</style>
