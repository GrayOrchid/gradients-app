export default (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {
				...state,
				favorite: [action.payload, ...state.favorite],
			}

		case 'REMOVE_ITEM':
			return {
				...state,
				favorite: state.favorite.filter(
					gradient => gradient.name !== action.payload
				),
			}
		default:
			return state
	}
}
