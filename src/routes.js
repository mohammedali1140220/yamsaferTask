import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export const routes = [
	{path: '/', component: Store, name: 'mainpage'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '*', redirect: '/' }
];
