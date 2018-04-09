<template>
	<div class="container">
		<table id="cart" class="table table-hover table-condensed">
			<thead>
				<tr>
					<th style="width:60%">Product</th>
					<th style="width:20%">Checked</th>
					<th style="width:20%">Delete</th>
				</tr>
			</thead>

			<transition-group name="list-shopping-cart" tag="tbody">
				<app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
			</transition-group>

			<tfoot>
				<tr class="visible-xs">
					<td class="text-center"><strong>Total {{ totalValue }}</strong></td>
				</tr>
				<tr>
					<td>
						<button class="btn btn-warning" @click="saveShoppingCartLocal">
							<i class="fa fa-angle-left"></i>Save and Continue Shopping
						</button>
					</td>
					<td colspan="2" class="hidden-xs"></td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import CartItem from './cart/CartItem.vue';
	export default {
		computed: {
			cartItemList() {
				return this.$store.getters.cartItemList;
			},
			totalValue() {
				let res = 0;
				this.cartItemList.map((item, idx) => {
					res += item.price * item.quantity;
				});
				return res;
			}
		},
		components: {
			appCartItem: CartItem
		},
		methods: {
			...mapActions(['saveShoppingCart', 'addMessage', 'saveToTransaction', 'clearCart']),
			checkValidCart(itemList, prodList) {
				let isValid = true;
				let message = "";

				itemList.map((item, idx) => {
					for (let prodIdx = 0; prodIdx < prodList.length; prodIdx++) {
						if (prodList[prodIdx].id == item.id) {
							if (prodList[prodIdx].quantity < item.quantity) {

								message = `Only ${prodList[prodIdx].quantity} ${item.title} available in stock`;
								isValid = false;
								return;
							}
							break;
						}
					}
				});
				return {
					isValid,
					message
				}
			},
			saveShoppingCartLocal() {
				let vm = this;
					let { isValid, message } = this.checkValidCart(this.$store.getters.cartItemList, this.$store.getters.products);

					if (isValid) {
						this.saveShoppingCart({
							cartItemList: vm.$store.getters.cartItemList,
						}).then(() => {
							this.addMessage({
								messageClass: 'success',
								message: 'Your shopping cart is saved successfully'
							});
							this.$router.push('/');
						});
					} else {
						this.addMessage({
							messageClass: 'danger',
							message: message
						});
					}
			},
		}
	}
</script>

<style scoped>
	.list-shopping-cart-leave-active {
	  transition: all 0.4s;
	}
	.list-shopping-cart-leave-to {
	  opacity: 0;
	  transform: translateX(50px);
	}
</style>
