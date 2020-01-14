import { CHANGE_VAMP_HP, ADD_100_HP } from '../constants/';

const initialState = {
	name: 'Vamp',
	maxHp: 110,
	hp: 100,
	attack: 10,
	def: 2
};

const vamp = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_VAMP_HP:
			const hp = action.hp >= 0 ? action.hp : 0;
			return { ...state, hp };
		case ADD_100_HP:
			const addhp = 100 + state.hp;
			return { ...state, hp: addhp };
		default:
			return state;
	}
};

export default vamp;
