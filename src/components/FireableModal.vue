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
						<div class="flex">
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
						<div class="flex">
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
					</div>
				</section>
				<!-- BREAK -->
				<section class="modal-body-middle">
					<!-- ==========STAT SECTION========== -->
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
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.headShots }}</div>
						<div class="stats-title">Headshots</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.shots }}</div>
						<div class="stats-title">Shots</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">{{ obj.hits }}</div>
						<div class="stats-title">Hits</div>
					</div>
					<div class="stat-container-indv">
						<div class="stats-content">
							{{ Math.round((obj.hits / obj.shots + 0.00001) * 100) }}%
						</div>
						<div class="stats-title">Accuracy</div>
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
	name: "FireableModal",
	props: {
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

.stat-container-indv,
.cost-container-indv {
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
		//border-top: 2px solid $text-dark;
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
			//border-top: 2px solid $hilight;
		}
	}
}
.cost-container-indv {
	flex: 1;
}

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
.modal-body-middle {
	display: flex;
	justify-content: center;
	flex: 1;
	flex-wrap: wrap;
	position: relative;
	padding: 20px 10px;
}

.col {
	display: flex;
	flex-flow: column;
	justify-content: center;
}

.flex {
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	justify-content: center;
}
.pri {
	justify-content: center;
	.stats-cost {
		font-size: 2rem;
	}
}

.btn-close {
	border: none;
	font-size: 20px;
	padding: 20px;
	cursor: pointer;
	font-weight: bold;
	color: #4aae9b;
	background: transparent;
}

.btn-green {
	color: white;
	background: #4aae9b;
	border: 1px solid #4aae9b;
	border-radius: 2px;
}
</style>
