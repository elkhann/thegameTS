import { CHANGE_VAMP_HP, ADD_100_HP, VDAMAGE } from '../constants/';

const initialState = {
	name: 'Vamp',
	maxHp: 110,
	hp: 100,
	att: 10,
	def: 2,
	damage: null
};

const vamp = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_VAMP_HP:
			const hp = action.hp >= 0 ? action.hp : 0;
			return { ...state, hp };
		case ADD_100_HP:
			const addhp = 100 + state.hp;
			return { ...state, hp: addhp };
		case VDAMAGE:
			return { ...state, damage: action.payload };
		default:
			return state;
	}
};

export default vamp;
