import { CHANGE_ENEMY_HP, CREATE_ENEMY } from '../constants/';

const initialState = {
	name: 'EnemyVamp',
	maxHp: 100,
	hp: 70,
	attack: 10,
	def: 2
};

const enemy = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ENEMY_HP:
			const hp = action.hp >= 0 ? action.hp : 0;
			return { ...state, hp };
		// case ADD_100_HP:
		// 	const addhp = 100 + state.hp;
		// 	return { ...state, hp: addhp };
		case CREATE_ENEMY:
			const randomInteger = (min, max) => {
				let rand = min + Math.random() * (max + 1 - min);
				rand = Math.floor(rand);
				return rand;
			};
			const randomMaxHp = randomInteger(70, 100);
			const randomHp = randomInteger(70, randomMaxHp);
			const randomAttack = randomInteger(1, 20);
			const randomDef = randomInteger(1, 20);
			const newEnemy = {
				name: 'EnemyVamp',
				maxHp: randomMaxHp,
				hp: randomHp,
				attack: randomAttack,
				def: randomDef
			};
			return { ...newEnemy };
		default:
			return state;
	}
};

export default enemy;
