<template>
	<tr>
		<td data-th="Product">
			<div class="row">
				<div class="col-sm-2 hidden-xs">
					<img :src="cartItem.thumbnail_url" alt="..." class="img-responsive"/>
					</div>
				<div class="col-sm-10">
					<h4 class="nomargin">{{ cartItem.title }}</h4>
					<p>{{ cartItem.description }}</p>
				</div>
			</div>
		</td>
		<td data-th="CheckBox">
			<input type="checkbox" class="form-check-input"
				:checked="cartItem.checked"
				@click="checkClicked"
				min="0">
		</td>
		<td class="actions" data-th="">
			<button class="btn btn-danger btn-sm" @click="removeItem" ><i class="fa fa-trash-o"></i></button>
		</td>
	</tr>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		props: ['cartItem'],
		computed: {
			subtotal() {
				return this.cartItem.quantity * this.cartItem.price;
			},
			// itemQuantity: {
			// 	get() {
			// 		return
			// 	}
			// }
		},
		methods: {
			...mapActions(['updateCheck', 'removeItemInCart']),
			removeItem() {
				let vm = this;
				this.removeItemInCart({
					item: vm.cartItem
				});
			},
			checkClicked(event)	{
			console.log("===========")
				let vm = this;
				this.updateCheck({
					item: vm.cartItem,
					checked: true,
					isAdd: false
				});
			},
		}
	}
</script>
