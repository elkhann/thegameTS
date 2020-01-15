import * as constants from "../constants/";

export const startFight = () => {
  console.log("Start fight");
  return {
    type: constants.FIGHT_IS_STARTED
  };
};

export const endFight = () => {
  console.log("End fight");
  return {
    type: constants.FIGHT_IS_END
  };
};

export const errorFight = error => {
  return {
    type: constants.FIGHT_HAS_ERRORED,
    payload: error
  };
};

export const changeVampHp = hp => {
  return {
    type: constants.CHANGE_VAMP_HP,
    payload: hp
  };
};

export const changeEnemyHp = hp => {
  return {
    type: constants.CHANGE_ENEMY_HP,
    payload: hp
  };
};

export const addHp = () => {
  return {
    type: constants.ADD_100_HP
  };
};

export const nextEnemy = () => {
  return {
    type: constants.CREATE_ENEMY
  };
};

export const setVDamage = damage => {
  return {
    type: constants.VDAMAGE,
    payload: damage
  };
};

export const setEDamage = damage => {
  return {
    type: constants.EDAMAGE,
    payload: damage
  };
};
