<template>
	<div class="stat-container">
		<table-component :arr="arArr" :obj="itemDataAr" :table-name="'table-ar'" />
		<div class="total-cash">
			<div class="value good">$</div>
		</div>
		<div class="table-title">Submachine Guns</div>
		<table id="table-smg">
			<thead>
				<tr class="tablehead">
					<th>Weapon</th>
					<th>Kills</th>
					<th>KD Ratio</th>
					<th>Deaths</th>
					<th>Headshots</th>
					<th>Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(smg, index) in itemDataSmg" :key="index">
					<td>
						<button
							:id="smg.properties.name"
							v-on:click="showModal"
							@click="clickEven"
							class="table-btn"
						>
							{{ smg.properties.name }}
						</button>
					</td>
					<td>{{ smg.properties.kills }}</td>
					<td>
						{{
							Math.round(
								(smg.properties.kills / smg.properties.deaths + 0.00001) * 100
							) / 100
						}}
					</td>
					<td>{{ smg.properties.deaths }}</td>
					<td>{{ smg.properties.headShots }}</td>
					<td id="smg-cost">
						${{
							formatPrice(
								smg.properties.roundCost * smg.properties.shots +
									(smg.properties.shots / smg.properties.magSize) *
										smg.properties.magCost +
									smg.properties.cost * smg.properties.deaths
							)
						}}
					</td>
				</tr>
			</tbody>
		</table>
		<div class="total-cash">
			<div class="value good">$ {{ totalDmrCost }}</div>
		</div>
		<div class="table-title">Designated Marksman Rifles</div>
		<table id="table-dmr">
			<thead>
				<tr class="tablehead">
					<th>Weapon</th>
					<th>Kills</th>
					<th>KD Ratio</th>
					<th>Deaths</th>
					<th>Headshots</th>
					<th>Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(dmr, index) in itemDataDmr" :key="index">
					<td>
						<button
							:id="dmr.properties.name"
							class="table-btn"
							@click="openDetails"
						>
							{{ dmr.properties.name }}
						</button>
					</td>
					<td>{{ dmr.properties.kills }}</td>
					<td>
						{{
							Math.round(
								(dmr.properties.kills / dmr.properties.deaths + 0.00001) * 100
							) / 100
						}}
					</td>
					<td>{{ dmr.properties.deaths }}</td>
					<td>{{ dmr.properties.headShots }}</td>
					<td id="dmr-cost">
						${{
							formatPrice(
								dmr.properties.roundCost * dmr.properties.shots +
									(dmr.properties.shots / dmr.properties.magSize) *
										dmr.properties.magCost +
									dmr.properties.cost * dmr.properties.deaths
							)
						}}
					</td>
				</tr>
			</tbody>
		</table>
		<modal v-show="isModalVisible" @close="closeModal">
			<template #header>
				{{ selected.nameFull }}
			</template>
			<template #body>
				<!-- Similar format to overview tab -->
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.kills }}</div>
					<div class="stats-title">Kills</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.deaths }}</div>
					<div class="stats-title">Deaths</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.headShots }}</div>
					<div class="stats-title">Headshots</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round((selected.kdRatio + 0.00001) * 100) / 100 }}
					</div>
					<div class="stats-title">KD</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.shots }}</div>
					<div class="stats-title">Shots</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.hits }}</div>
					<div class="stats-title">Hits</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ Math.round((selected.hits / selected.shots + 0.00001) * 100) }}
						%
					</div>
					<div class="stats-title">Accuracy</div>
				</div>
			</template>
			<template #cost>
				<!-- Similar format to overview tab -->
				<div class="stat-container-indv">
					<div class="stats-cost">
						$ {{ formatPrice(selected.roundCost * selected.shots) }}
					</div>
					<div class="stats-title">Ammo Fired</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-cost">
						{{
							formatPrice(
								selected.magCost * (selected.shots / selected.magSize)
							)
						}}
					</div>
					<div class="stats-title">Mags Tossed</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-cost">$ {{ selected.cost }}</div>
					<div class="stats-title">$/Weapon</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">
						{{ formatPrice(selected.cost * selected.deaths) }}
					</div>
					<div class="stats-title">$/Weapon Total</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.shots }}</div>
					<div class="stats-title">Shots</div>
				</div>
				<div class="stat-container-indv">
					<div class="stats-content">{{ selected.hits }}</div>
					<div class="stats-title">Hits</div>
				</div>
			</template>
		</modal>
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
						nameFull: "FAL",
						cost: 2200,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_mike4: {
					properties: {
						name: "iw8_ar_mike4",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 0.15,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_falpha: {
					properties: {
						name: "iw8_ar_falpha",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_mcharlie: {
					properties: {
						name: "iw8_ar_mcharlie",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_akilo47: {
					properties: {
						name: "iw8_ar_akilo47",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_kilo433: {
					properties: {
						name: "iw8_ar_kilo433",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_scharlie: {
					properties: {
						name: "iw8_ar_scharlie",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_ar_asierra12: {
					properties: {
						name: "iw8_ar_asierra12",
						nameFull: "FAL",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
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
						cost: 2200,
						roundCost: 0.2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_augolf: {
					properties: {
						name: "iw8_sm_augolf",
						nameFull: "AUG",
						cost: 2200,
						roundCost: 0.2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_papa90: {
					properties: {
						name: "iw8_sm_papa90",
						nameFull: "P90",
						cost: 2200,
						roundCost: 0.2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_mpapa5: {
					properties: {
						name: "iw8_sm_mpapa5",
						nameFull: "MP5",
						cost: 2200,
						roundCost: 0.1,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_beta: {
					properties: {
						name: "iw8_sm_beta",
						nameFull: "Beta???",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				},
				iw8_sm_uzulu: {
					properties: {
						name: "iw8_sm_uzulu",
						nameFull: "Uzi",
						cost: 2200,
						roundCost: 2,
						magCost: 10,
						magSize: 5
						//demoVar: magCost * shots
						//Fal
					}
				}
			},
			metaObjectDmr: {
				iw8_sn_kilo98: {
					properties: {
						name: "iw8_sn_kilo98",
						nameFull: "iw8_sn_kilo98",
						desc: "Enter description here",
						cost: 100,
						roundCost: 0.01,
						magCost: 5,
						magSize: 30
					}
				},
				iw8_sn_mike14: {
					properties: {
						name: "iw8_sn_mike14",
						nameFull: "iw8_sn_mike14",
						desc: "Enter description here",
						cost: 100,
						roundCost: 0.01,
						magCost: 5,
						magSize: 30
					}
				},
				iw8_sn_delta: {
					properties: {
						name: "iw8_sn_delta",
						nameFull: "iw8_sn_delta",
						desc: "Enter description here",
						cost: 100,
						roundCost: 0.01,
						magCost: 5,
						magSize: 30
					}
				}
			},
			arArr: [],
			smgArr: [],
			dmrArr: [],
			totalArCost: 0,
			totalSmgCost: 0,
			totalDmrCost: 0
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
			if (cat == "table-dmr") {
				this.selected = this.itemDataDmr[wid].properties;
			}
			if (cat == "table-smg") {
				this.selected = this.itemDataSmg[wid].properties;
			}
			if (cat == "table-ar") {
				this.selected = this.itemDataAr[wid].properties;
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
			this.totalDmrCostCalc();
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
