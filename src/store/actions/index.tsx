import * as constants from "../constants";
import { createAction, createAsyncAction } from "typesafe-actions";

// https://codesandbox.io/s/github/piotrwitek/typesafe-actions/tree/master/codesandbox

export const startFight = createAsyncAction(
  constants.FIGHT_IS_STARTED,
  constants.FIGHT_IS_STARTED,
  constants.FIGHT_HAS_ERRORED
)();

// export const startFight = createAction(constants.FIGHT_IS_STARTED)();
export const endFight = createAction(constants.FIGHT_IS_END)();

export const addHp = createAction(constants.ADD_100_HP)();
export const nextEnemy = createAction(constants.CREATE_ENEMY)();

export const errorFight = createAction(
  constants.FIGHT_HAS_ERRORED,
  (error: any) => ({ payload: error })
)();

export const changeVampHp = createAction(
  constants.CHANGE_VAMP_HP,
  (hp: any) => ({ payload: hp })
)();

export const changeEnemyHp = createAction(
  constants.CHANGE_ENEMY_HP,
  (hp: any) => ({ payload: hp })
)();

export const setVDamage = createAction(constants.VDAMAGE, (damage: number) => ({
  payload: damage
}))();

export const setEDamage = createAction(constants.EDAMAGE, (damage: number) => ({
  payload: damage
}))();
