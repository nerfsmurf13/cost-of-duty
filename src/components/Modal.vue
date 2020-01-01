<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div
				class="modal"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription"
			>
				<header id="modalTitle" class="modal-header">
					<div class="stats-content">{{ obj.nameFull }}</div>
				</header>
				<section id="modalDescription" class="modal-body-top">
					<!-- ========== COST SECTION ========== -->
					<div class="col">
						<!-- COST FIREARM -->
						<div
							v-show="obj.type == 'firearm' || obj.type == 'launcher'"
							class="flex"
						>
							<div class="cost-container-indv pri">
								<div class="stats-cost">
									$
									{{
										formatPrice(
											obj.cost * obj.deaths + obj.roundCost * obj.shots
										)
									}}
								</div>
								<div class="stats-title">Total</div>
							</div>
						</div>
						<div
							v-show="obj.type == 'firearm' || obj.type == 'launcher'"
							class="flex"
						>
							<div class="cost-container-indv">
								<div class="stats-cost">
									$ {{ formatPrice(obj.roundCost * obj.shots) }}
								</div>
								<div class="stats-title">Ammo Used</div>
							</div>
							<div class="cost-container-indv">
								<div class="stats-cost">
									$ {{ formatPrice(obj.cost * obj.deaths) }}
								</div>
								<div class="stats-title">Weapon Lost</div>
							</div>
						</div>
						<div
							v-show="obj.type == 'firearm' || obj.type == 'launcher'"
							class="flex"
						>
							<div class="cost-container-indv">
								<div class="stats-cost">
									$
									{{ formatPrice((obj.roundCost * obj.shots) / obj.kills) }}
								</div>
								<div class="stats-title">$/Kill (Ammo)</div>
							</div>
							<div class="cost-container-indv">
								<div class="stats-cost">
									$
									{{
										formatPrice(
											(obj.cost * obj.deaths + obj.roundCost * obj.shots) /
												obj.kills
										)
									}}
								</div>
								<div class="stats-title">$/Kill (Total)</div>
							</div>
						</div>
						<div
							v-show="obj.type == 'firearm' || obj.type == 'launcher'"
							class="flex"
						>
							<div class="cost-container-indv">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.roundCost) }}
								</div>
								<div class="stats-title">$/Round</div>
							</div>
							<div class="cost-container-indv">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost) }}
								</div>
								<div class="stats-title">$/Weapon</div>
							</div>
						</div>
						<!-- COST Killstreak -->
						<div v-show="obj.type == 'killstreak'" class="flex row">
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost * obj.uses) }}
								</div>
								<div class="stats-title">$/Total</div>
							</div>
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost) }}
								</div>
								<div class="stats-title">$/Each</div>
							</div>
						</div>
						<!-- COST SUPPORT Killstreak -->
						<div v-show="obj.type == 'tkillstreak'" class="flex row">
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost * obj.uses) }}
								</div>
								<div class="stats-title">$/Total</div>
							</div>
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost) }}
								</div>
								<div class="stats-title">$/Each</div>
							</div>
						</div>
						<!-- COST LETHAL THROWABLE -->
						<div v-show="obj.type == 'lThrowable'" class="flex row">
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost * (obj.kills * 4)) }}
								</div>
								<div class="stats-title">$/Total</div>
							</div>
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost) }}
								</div>
								<div class="stats-title">$/Each</div>
							</div>
						</div>
						<!-- COST Melee THROWABLE -->
						<div v-show="obj.type == 'melee'" class="flex row">
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost * obj.kills) }}
								</div>
								<div class="stats-title">$/Total</div>
							</div>
							<div class="cost-container-wide pri">
								<div class="stats-cost">
									$
									{{ formatPrice(obj.cost) }}
								</div>
								<div class="stats-title">$/Each</div>
							</div>
						</div>
					</div>
				</section>

				<!-- ==========FIREARM STAT SECTION========== -->
				<section
					v-show="obj.type == 'firearm' || obj.type == 'launcher'"
					class="modal-body-middle"
				>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.kills }}</div>
						<div class="stats-title">Kills</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.deaths }}</div>
						<div class="stats-title">Deaths</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">
							{{ Math.round((obj.kdRatio + 0.00001) * 100) / 100 }}
						</div>
						<div class="stats-title">KD</div>
					</div>
					<div v-show="obj.type == '!firearm'" class="stat-container-indv">
						<div class="stats-content">{{ obj.headShots }}</div>
						<div class="stats-title">Headshots</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.shots }}</div>
						<div class="stats-title">Shots</div>
					</div>
					<div v-show="obj.type == '!firearm'" class="stat-container-indv">
						<div class="stats-content">{{ obj.hits }}</div>
						<div class="stats-title">Hits</div>
					</div>
					<div v-show="obj.type == 'firearm'" class="stat-container-indv">
						<div class="stats-content">
							{{ Math.round((obj.hits / obj.shots + 0.00001) * 100) }}%
						</div>
						<div class="stats-title">Accuracy</div>
					</div>
					<div v-show="obj.type == 'launcher'" class="stat-container-indv">
						<div class="stats-content">
							{{ Math.round((obj.hits / obj.shots + 0.00001) * 100) }}%
						</div>
						<div class="stats-title">Accuracy</div>
					</div>
				</section>

				<!-- ==========KILLSTREAK STAT SECTION========== -->
				<section v-show="obj.type == 'killstreak'" class="modal-body-desc">
					{{ obj.desc }}
				</section>
				<section v-show="obj.type == 'killstreak'" class="modal-body-middle">
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.uses }}</div>
						<div class="stats-title">Uses</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.awardedCount }}</div>
						<div class="stats-title">Awarded</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.extraStat1 }}</div>
						<div class="stats-title">Kills/Assists</div>
					</div>
				</section>
				<!-- ==========SUPPORT KILLSTREAK STAT SECTION========== -->
				<section v-show="obj.type == 'tkillstreak'" class="modal-body-middle">
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.uses }}</div>
						<div class="stats-title">Uses</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.awardedCount }}</div>
						<div class="stats-title">Awarded</div>
					</div>
				</section>
				<!-- ==========LETHAL THROWABLE STAT SECTION========== -->
				<section v-show="obj.type == 'lThrowable'" class="modal-body-middle">
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.kills }}</div>
						<div class="stats-title">Kills</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.deaths }}</div>
						<div class="stats-title">Deaths</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.cost * (obj.kills * 4) }}</div>
						<div class="stats-title">Est. Used</div>
					</div>
				</section>

				<!-- ==========MELEE STAT SECTION========== -->
				<section v-show="obj.type == 'melee'" class="modal-body-middle">
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.kills }}</div>
						<div class="stats-title">Kills</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.deaths }}</div>
						<div class="stats-title">Deaths</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">
							{{ Math.round((obj.kdRatio + 0.00001) * 100) / 100 }}
						</div>
						<div class="stats-title">KD</div>
					</div>
				</section>
				<footer class="modal-footer">
					<slot name="footer">
						<button type="button" class="btn" aria-label="Close" @click="close">
							Close
						</button>
					</slot>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Modal",
	props: {
		modalType: {
			//deprecated
			type: String,
			//firearm, killstreak, lThrowable, tThrowable, melee

			default: "firearm"
		},
		arr: {
			type: Array,
			default: () => []
		},
		obj: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		close() {
			this.$emit("close");
		},
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/tab-styles.scss";

.modal-backdrop {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	max-height: 100vh;
	overflow-y: auto;
	// background-attachment: fixed;
	background: #000;
	background-size: contain;
	background-image: url("../assets/bg-large.jpg");
	box-shadow: 2px 2px 20px 1px;
	overflow-x: auto;
	display: flex;
	flex-direction: column;
}

.modal-header,
.modal-footer {
	padding: 15px;
	display: flex;
}

.modal-header {
	border-bottom: 1px solid #eeeeee;
	color: $text-med;
	justify-content: center;
}

.modal-footer {
	border-top: 1px solid #eeeeee;
	justify-content: center;
}

.modal-body-top,
.modal-body-middle,
.modal-body-desc {
	display: flex;
	justify-content: center;
	flex: 1;
	flex-wrap: wrap;
	position: relative;
	padding: 10px 10px;
}

.modal-body-desc {
	font-size: 1rem;
}

// .col {
// 	display: flex;
// 	flex-flow: column;
// 	justify-content: center;
// 	flex: 1;
// }

// .row {
// 	display: flex;
// 	flex-flow: column;
// 	justify-content: center;
// }

// .flex {
// 	display: flex;
// 	flex-wrap: wrap;
// 	flex: 1;
// 	justify-content: center;
// }
// .pri {
// 	justify-content: center;
// 	background-image: url("../assets/corners_266_75.png");
// 	.stats-cost {
// 		font-size: 2rem;
// 	}
// }

// .btn-close {
// 	border: none;
// 	font-size: 20px;
// 	padding: 20px;
// 	cursor: pointer;
// 	font-weight: bold;
// 	color: #4aae9b;
// 	background: transparent;
// }

// .btn-green {
// 	color: white;
// 	background: #4aae9b;
// 	border: 1px solid #4aae9b;
// 	border-radius: 2px;
// }
</style>
