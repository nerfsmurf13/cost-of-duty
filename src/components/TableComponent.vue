<template>
	<div class="table-container">
		<div class="total-cash">
			<div class="value good">$ {{ formatPrice(totalCost) }}</div>
		</div>
		<div class="table-title">{{ name }}</div>
		<table :id="tableName">
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
				<tr v-for="(weapon, index) in sortedArray" :key="index">
					<td class="grid-bg">
						<button
							:id="weapon.properties.name"
							class="table-btn grid"
							@click="openDetails"
						>
							{{ weapon.properties.name }}
						</button>
					</td>
					<td>{{ weapon.properties.kills }}</td>
					<td>
						{{
							Math.round(
								(weapon.properties.kills / weapon.properties.deaths + 0.00001) *
									100
							) / 100
						}}
					</td>
					<td>{{ weapon.properties.deaths }}</td>
					<td>{{ weapon.properties.headShots }}</td>
					<td :id="weapon.properties.name">
						<button
							:id="weapon.properties.name"
							class="table-btn"
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
		}
	},
	data() {
		return {
			isModalVisible: false,
			selected: {},
			totalCost: 0
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
			return this.arr.sort(compare);
		}
	},
	created() {
		this.console = window.console; //Testing
		//this.combineObjects(); // Combines API data and Local Metadata
	},
	updated() {
		this.totalCostAdd();
	},
	methods: {
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		openDetails(e) {
			this.console.log("openDetails Running... " + e);
			this.console.log(
				"openDetails Running... " +
					e.target.parentElement.parentElement.parentElement.parentElement.id
			);
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
			let cat =
				e.target.parentElement.parentElement.parentElement.parentElement.id;

			this.console.log("clickEven " + cat);
			this.console.log("clickEven " + wid);
			this.console.log(this.obj[wid].properties);
			//this.selected = this.itemDataSmg[wid].properties;
			//this.console.log(this.itemDataSmg[wid].properties);

			this.selected = this.obj[wid].properties;
		},
		totalCostAdd() {
			//Reads the array created from objToArr() to add up costs
			let cost = 0;
			for (let i = 0; i < this.arr.length; i++) {
				let ammo =
					this.arr[i].properties.roundCost * this.arr[i].properties.shots;
				let gear = this.arr[i].properties.cost * this.arr[i].properties.deaths;
				let total = ammo + gear;
				cost += total;
				// this.console.log(total)
			}
			this.console.log(cost);
			this.totalCost = cost;
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

.table-container {
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-bottom: 2rem;
	border: 1px solid $selected-dark;
	background-color: $background1;

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
			color: black;
			font-weight: 600;
		}
	}
}
</style>