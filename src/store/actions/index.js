import {
	FIGHT_IS_STARTED,
	FIGHT_HAS_ERRORED,
	FIGHT_IS_END,
	CHANGE_VAMP_HP,
	CHANGE_ENEMY_HP,
	ADD_100_HP,
	CREATE_ENEMY,
	VDAMAGE,
	EDAMAGE
} from '../constants/';

export const startFight = () => {
	console.log('Start fight');
	return {
		type: FIGHT_IS_STARTED
	};
};

export const endFight = () => {
	console.log('End fight');
	return {
		type: FIGHT_IS_END
	};
};

export const errorFight = (error) => {
	return {
		type: FIGHT_HAS_ERRORED,
		error: error
	};
};

export const changeVampHp = (hp) => {
	console.log(hp);
	return {
		type: CHANGE_VAMP_HP,
		hp
	};
};

export const changeEnemyHp = (hp) => {
	console.log(hp);
	return {
		type: CHANGE_ENEMY_HP,
		hp
	};
};

export const addHp = () => {
	return {
		type: ADD_100_HP
	};
};

export const nextEnemy = () => {
	return {
		type: CREATE_ENEMY
	};
};

export const setVDamage = (damage) => {
	return {
		type: VDAMAGE,
		payload: damage
	};
};

export const setEDamage = (damage) => {
	return {
		type: EDAMAGE,
		payload: damage
	};
};
