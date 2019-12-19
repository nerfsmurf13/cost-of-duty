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
					<slot name="header">
						This is the default tile!

						<button
							type="button"
							class="btn-close"
							aria-label="Close modal"
							@click="close"
						>
							x
						</button>
					</slot>
				</header>
				<section id="modalDescription" class="modal-body-top">
					<slot name="body">
						I'm the default body!
					</slot>
				</section>
				<section class="modal-body-middle">
					<slot name="cost">
						I'm the default body!
					</slot>
				</section>
				<footer class="modal-footer">
					<slot name="footer">
						<button
							type="button"
							class="btn-green"
							aria-label="Close"
							@click="close"
						>
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
	background: #000;
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
	color: #4aae9b;
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
