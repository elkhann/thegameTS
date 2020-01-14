import { action } from 'typesafe-actions';
import * as constants from '../constants';

export const startFight = () => {
	action(constants.FIGHT_IS_STARTED);
};

export const endFight = () => {
	action(constants.FIGHT_IS_END);
};

export const errorFight = (error: string) => {
	action(constants.FIGHT_HAS_ERRORED, error);
};

export const changeVampHp = (hp: number) => {
	console.log(hp);
	action(constants.CHANGE_VAMP_HP, hp);
};

export const changeEnemyHp = (hp: number) => {
	console.log(hp);
	action(constants.CHANGE_ENEMY_HP, hp);
};

export const addHp = () => {
	action(constants.ADD_100_HP);
};

export const nextEnemy = () => {
	action(constants.CREATE_ENEMY);
};

export const setVDamage = (damage: number) => {
	action(constants.VDAMAGE, damage);
};

export const setEDamage = (damage: number) => {
	action(constants.EDAMAGE, damage);
};
