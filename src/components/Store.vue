<template>
	<div class="container" :class="{loadingItem: loading}">
		<div class="row text-center" v-if="loading">
			<grid-loader :loading="loading" :color="loaderColor" :size="loaderSize"></grid-loader>
		</div>


		<div class="is-flex" v-if="!loading">
			<app-product-item v-for="(prod, idx) in products" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
		</div>

	</div>
</template>

<script>
	import ProductItem from './product/ProductItem.vue';
	import { mapActions } from 'vuex';
	import GridLoader from 'vue-spinner/src/GridLoader.vue';

	export default {
		data() {
			return {
				loaderColor: "#5cb85c",
				loaderSize: "50px",
				displayList: false
			}
		},
		computed: {
			products() {
				return this.$store.getters.products;
			},
			loading() {
				return this.$store.getters.isProductLoading;
			}
		},
		components: {
			appProductItem: ProductItem,
			GridLoader
		},
		methods: {
			changeDisplay(isList) {
				this.displayList = isList;
			}
		}
	}
</script>

<style>
	.is-flex {
    	display: flex;
    	flex-wrap: wrap;
	}

	.loadingItem {
		align-items: center;
  		justify-content: center;
  		display: flex;
	}

	.is-flex > [class*='col-'] {
	    display: flex;
	    flex-direction: column;
	}

	.action-panel {
		margin-bottom: 10px;
		margin-right: 5px;
	}
</style>
