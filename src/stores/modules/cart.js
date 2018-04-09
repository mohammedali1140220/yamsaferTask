const state = {
	cartItemList: [
	]
}

const mutations = {
	'UPDATE_CART' (state, {item, quantity, isAdd}) {
		const record = state.cartItemList.find(element => element.id == item.id);
		if (!record) {
			state.cartItemList.push({
				...item,
			});
		}
	},
	'UPDATE_CHECK' (state, {item, checked}) {
		const record = state.cartItemList.find(element => element.id == item.id);
		console.log(record)
		if (record) {
				record.checked = true;
		}
	},
	'REMOVE_CART_ITEM' (state, {item}) {
		const record = state.cartItemList.find(element => element.id == item.id);
		state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
	}
}

const getters = {
	cartItemList: (state) => {
		return state.cartItemList;
	},
}

export default {
	state,
	mutations,
	getters
}
