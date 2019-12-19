<template>
	<div class="table-container">
		<div class="total-cash">
			<div class="value good">$</div>
		</div>
		<div class="table-title">Assault Rifles</div>
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
				<tr v-for="(weapon, index) in arr" :key="index">
					<td>
						<button
							:id="weapon.properties.name"
							class="table-btn"
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
						${{
							formatPrice(
								weapon.properties.roundCost * weapon.properties.shots +
									(weapon.properties.shots / weapon.properties.magSize) *
										weapon.properties.magCost
							)
						}}
					</td>
				</tr>
			</tbody>
		</table>
		//Modal
		<fireable-modal
			v-show="isModalVisible"
			:arr="arr"
			:obj="obj"
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
		}
	},
	data() {
		return {
			isModalVisible: false,
			selected: {}
		};
	},
	created() {
		this.console = window.console; //Testing
		//this.combineObjects(); // Combines API data and Local Metadata
	},
	methods: {
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
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

			this.console.log(cat);
			this.console.log(wid);
			//this.selected = this.itemDataSmg[wid].properties;
			//this.console.log(this.itemDataSmg[wid].properties);

			this.selected = this.arr[wid].properties;
		}
	}
};
</script>
<style lang="scss" scoped>
</style>