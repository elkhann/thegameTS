import { CHANGE_ENEMY_HP, CREATE_ENEMY, EDAMAGE } from '../constants/';

const initialState = {
	name: 'EnemyVamp',
	maxHp: 100,
	hp: 70,
	att: 10,
	def: 2,
	damage: null
};

const enemy = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ENEMY_HP:
			const hp = action.hp >= 0 ? action.hp : 0;
			return { ...state, hp };
		case CREATE_ENEMY:
			const randomInteger = (min, max) => {
				let rand = min + Math.random() * (max + 1 - min);
				rand = Math.floor(rand);
				return rand;
			};
			const randomMaxHp = randomInteger(70, 100);
			const randomHp = randomInteger(70, randomMaxHp);
			const randomAtt = randomInteger(1, 20);
			const randomDef = randomInteger(1, 20);
			const newEnemy = {
				name: 'EnemyVamp',
				maxHp: randomMaxHp,
				hp: randomHp,
				att: randomAtt,
				def: randomDef
			};
			return { ...newEnemy };
		case EDAMAGE:
			return { ...state, damage: action.payload };
		default:
			return state;
	}
};

export default enemy;
