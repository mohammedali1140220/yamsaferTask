const state = {
	isLoading: true,
	productList: [
		 {
		 	id: 1,
		 	title: 'Sunrise Arabian Beach Resort',
		 	thumbnail_url: 'https://images.yamsafer.me/images/large/320271/SUNRISE%20Grand%20Select%20Arabian%20Beach%20Resort-Royal%20Club%20Villa.jpg',
		 	description: "It was a great experience, the room was clean and luxurious. Beach area was nice but small so at certain times it was crowded. The service was great and staff were so friendly and helpful. The best of the best was the food. Variety and taste and quality, it's very rare to find this quality in a hotel restaurant. Overall, I really enjoyed and definitely would come back.",
			checked: false,
			inWish: false,
		},
		{
		 id: 2,
		 title: 'The Marmara Antalya',
		 thumbnail_url: 'https://images.yamsafer.me/images/large/45313/1315243_109_z.jpg',
		 description: "We liked our stay.However the lights in the room were so less making rooms darker..lights should be there on seaside so u can view from your room at night. Breakfast was pretty decent.",
 		checked: false,
		inWish: false,
	 },
	 {
		id: 3,
		title: 'Amman Rotana',
		thumbnail_url: 'https://images.yamsafer.me/images/large/324098/Exterior-1.jpg',
		description: "We got a good deal and enjoyed our mid week stay here. The breakfast was excellent. The only down side was the taxi service outside. There was no proper rank and the ones there were trying to rip travellers off. A problem throughout Amman.",
		checked: false,
		inWish: false,
	},
	{
	 id: 4,
	 title: 'Tango Arjaan By Rotana',
	 thumbnail_url: 'https://images.yamsafer.me/aliens/228425/large/hotels/12000000/11300000/11294900/11294811/0967028d.jpg',
	 description: "Centrally located in Istanbul, Tango Arjaan By Rotana is convenient to Bostanci Port and Suadiye Beach. This family-friendly hotel is within the vicinity of Palladium Shopping Mall and Dock Square.",
	 checked: false,
	 inWish: false,
	}
	]
}

const mutations = {
	'UPDATE_PRODUCT_LIST' (state, productList) {
		//state.productList = productList;
		state.isLoading = false;
	}
}

const actions = {
}

const getters = {
	products: (state) => {
		return state.productList;
	},
}

export default {
	state,
	mutations,
	actions,
	getters
}
