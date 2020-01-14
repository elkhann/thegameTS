import { ActionType } from 'typesafe-actions';
import * as actions from '../store/actions';

export interface StoreState {
	vamp: {
		name: string;
		hp: number;
		maxHp: number;
		att: number;
		def: number;
		damage: number | null;
	};

	enemy: {
		name: string;
		hp: number;
		maxHp: number;
		att: number;
		def: number;
		damage: number | null;
	};
}

export type GameActions = ActionType<typeof actions>;
