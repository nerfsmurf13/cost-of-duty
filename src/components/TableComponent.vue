<template>
	<div class="table-container">
		<div class="total-cash">
			<div class="value good">$ {{ formatPrice(totalCost) }}</div>
		</div>
		<div class="table-title">
			{{ name }}
			<button class="table-btn grid small-btn" @click="hideTable">
				{{ !hidden ? "Hide" : "Show" }}
			</button>
		</div>
		<table v-show="!hidden && !killstreakTable" :id="tableName">
			<thead>
				<tr class="tablehead">
					<th v-show="displayWeaponName" width="25%">Weapon</th>
					<th v-show="displayKills">Kills</th>
					<th v-show="displayKd">KD Ratio</th>
					<th v-show="displayDeaths">Deaths</th>
					<th v-show="displayHeadshots">Head Shots</th>
					<th v-show="displayCost" width="25%">Cost</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(weapon, index) in sortedArray" :key="index">
					<td>
						<button
							:id="weapon.properties.name"
							class="table-btn grid"
							@click="openDetails"
						>
							{{ weapon.properties.name }}
						</button>
					</td>
					<td v-show="displayKills">{{ weapon.properties.kills }}</td>
					<td v-show="displayKd">
						{{
							Math.round(
								((weapon.properties.kills + 1) /
									(weapon.properties.deaths + 1) +
									0.00001) *
									100
							) / 100
						}}
					</td>
					<td v-show="displayDeaths">{{ weapon.properties.deaths }}</td>
					<td v-show="displayHeadshots">{{ weapon.properties.headShots }}</td>
					<td
						v-show="displayCost && calcProjectiles == 1"
						:id="weapon.properties.name"
						class=""
					>
						<button
							:id="weapon.properties.name"
							class="table-btn grid"
							@click="openDetails"
						>
							${{
								formatPrice(
									weapon.properties.roundCost * weapon.properties.shots +
										weapon.properties.deaths * weapon.properties.cost
								)
							}}
						</button>
					</td>
					<td
						v-show="displayCost && calcProjectiles == 2"
						:id="weapon.properties.name"
						class=""
					>
						<button
							:id="weapon.properties.name"
							class="table-btn grid"
							@click="openDetails"
						>
							${{
								formatPrice(
									weapon.properties.kills * (weapon.properties.cost * 3)
								)
							}}
						</button>
					</td>
					<td
						v-show="displayCost && calcProjectiles == 3"
						:id="weapon.properties.name"
						class=""
					>
						<button
							:id="weapon.properties.name"
							class="table-btn grid"
							@click="openDetails"
						>
							${{
								formatPrice(weapon.properties.deaths * weapon.properties.cost)
							}}
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- Killstreak Table -->
		<table v-show="!hidden && killstreakTable" :id="tableName">
			<thead>
				<tr>
					<th width="25%">Kill Streak</th>
					<th>Awarded</th>
					<th>Uses</th>
					<th>Kills/Assists</th>
					<th>Costs</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(killstreak, index) in sortedArray" :key="index">
					<td>{{ killstreak.properties.name }}</td>
					<td>{{ killstreak.properties.awardedCount }}</td>
					<td>{{ killstreak.properties.uses }}</td>
					<td>{{ killstreak.properties.extraStat1 }}</td>
					<td class="killstreak-total" width="25%">
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
		<!-- //Modal -->
		<fireable-modal
			v-show="isModalVisible"
			:arr="arr"
			:obj="selected"
			@close="closeModal"
		/>
	</div>
</template>
<script>
import FireableModal from "./FireableModal";
export default {
	name: "TableComponent",
	components: {
		FireableModal
	},
	props: {
		arr: {
			type: Array,
			default: () => []
		},
		obj: {
			type: Object,
			default: () => {}
		},
		tableName: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: "Weapon Class"
		},
		costTotal: {
			type: Array,
			default: () => []
		},
		tab: {
			type: Number,
			default: 0
		},
		cat: {
			type: Number,
			default: 0
		},
		displayKills: {
			type: Boolean,
			default: true
		},
		displayKd: {
			type: Boolean,
			default: true
		},
		displayDeaths: {
			type: Boolean,
			default: true
		},
		displayHeadshots: {
			type: Boolean,
			default: true
		},
		displayWeaponName: {
			type: Boolean,
			default: true
		},
		displayCost: {
			type: Boolean,
			default: true
		},
		calcProjectiles: {
			type: Number,
			default: 1
		},
		killstreakTable: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isModalVisible: false,
			selected: {},
			totalCost: 0,
			hidden: false
		};
	},
	computed: {
		sortedArray: function() {
			function compare(a, b) {
				let acost =
					a.properties.cost * a.properties.deaths +
					a.properties.shots * a.properties.roundCost;
				let bcost =
					b.properties.cost * b.properties.deaths +
					b.properties.shots * b.properties.roundCost;
				if (acost < bcost) return 1;
				if (acost > bcost) return -1;
				return 0;
			}
			return this.arr.slice().sort(compare);
		}
	},
	created() {
		this.console = window.console; //Testing
		//this.combineObjects(); // Combines API data and Local Metadata
	},
	updated() {
		this.totalCostAdd();
	},
	// mounted() {
	// 	this.totalCostAdd2();
	// },
	methods: {
		hideTable() {
			if (this.hidden) {
				this.hidden = false;
			} else {
				this.hidden = true;
			}
		},
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		formatNumber(value) {
			//Formats number into readable number (INCOMPLETE)
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		openDetails(e) {
			// this.console.log("openDetails Running... " + e);
			// this.console.log(
			// 	"openDetails Running... " +
			// 		e.target.parentElement.parentElement.parentElement.parentElement.id
			// );
			this.clickEven(e);
			this.showModal();
		},
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		},
		clickEven(e) {
			let wid = e.toElement.id;
			// let cat =
			// 	e.target.parentElement.parentElement.parentElement.parentElement.id;

			// this.console.log("clickEven " + cat);
			// this.console.log("clickEven " + wid);
			// this.console.log(this.obj[wid].properties);
			//this.selected = this.itemDataSmg[wid].properties;
			//this.console.log(this.itemDataSmg[wid].properties);

			this.selected = this.obj[wid].properties;
		},
		totalCostAdd() {
			//Reads the array created from objToArr() to add up costs
			let cost = 0;
			for (let i = 0; i < this.arr.length; i++) {
				if (this.calcProjectiles == 1) {
					//Firearms
					let ammo =
						this.arr[i].properties.roundCost * this.arr[i].properties.shots;
					let gear =
						this.arr[i].properties.cost * this.arr[i].properties.deaths;
					let total = ammo + gear;
					cost += total;
					// this.console.log(total)
				}
				if (this.calcProjectiles == 2) {
					//Throwables
					let gear =
						this.arr[i].properties.cost * (this.arr[i].properties.kills * 3);
					let total = gear;
					cost += total;
					// this.console.log(total)
				}
				if (this.calcProjectiles == 3) {
					//Melee Items
					let gear =
						this.arr[i].properties.cost * this.arr[i].properties.deaths;
					let total = gear;
					cost += total;
					// this.console.log(total)
				}
				if (this.calcProjectiles == 4) {
					//Melee Items
					let gear = this.arr[i].properties.cost * this.arr[i].properties.uses;
					let total = gear;
					cost += total;
					// this.console.log(total)
				}
			}
			this.console.log(cost);
			this.totalCost = cost;
			this.totalCostAdd2();
		},
		totalCostAdd2() {
			this.costTotal[this.cat] = this.totalCost;
		}
	}
};
</script>
<style lang="scss" scoped>
$grid-color: #1e303c;
//$grid-filler: #2d516a;
$grid-filler: #2d516a;
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

.small-btn {
	max-width: 6rem;
	font-size: 1rem;
	margin-left: 1rem;
}

.table-container {
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-bottom: 2rem;
	border: 1px solid $selected-dark;
	background-color: $background1;
	.table-title {
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		display: flex;
		justify-content: center;
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
			.table-col-name {
				max-width: 25%;
			}
		}

		// tr {
		// 	// background: $selected-dark;
		// 	border-bottom: 1px solid $selected-dark;
		// 	padding: 0.2rem 0;
		// }
		// tr:hover {
		// 	background: $hilight;
		// 	color: black;
		// 	font-weight: 600;
		// }
	}
}
</style>