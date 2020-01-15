import React from "react";
import { connect } from "react-redux";
import {
  startFight,
  endFight,
  addHp,
  nextEnemy,
  changeVampHp,
  changeEnemyHp,
  setVDamage,
  setEDamage
} from "../store/actions";
import { StoreState } from "../types";

import Fight from "../components/Fight";

export interface Props {
  vamp: {
    name: string;
    hp: number;
    maxHp: number;
    att: number;
    def: number;
    damage: number;
  };

  enemy: {
    name: string;
    hp: number;
    maxHp: number;
    att: number;
    def: number;
    damage: number;
  };

  addHp: () => void;
  nextEnemy: () => void;
  start: Function;
  end: () => void;
  changeVampHp: (hp: number) => void;
  changeEnemyHp: (hp: number) => void;
  setVDamage: (vdamage: number) => void;
  setEDamage: (edamage: number) => void;
  startFightHandle: (e: React.MouseEvent) => void;
}

const FightContainer = (props: any) => {
  const {
    vamp,
    enemy,
    nextEnemy,
    addHp,
    start,
    end,
    changeVampHp,
    changeEnemyHp,
    setVDamage,
    setEDamage
  } = props;
  const damage = (a: number, d: number) => {
    const rollDice = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const dice = rollDice(1, 7);
    let damage = 1;
    let fullDamage;
    if (a >= d) {
      damage = Math.floor(a * (1 + (a - d) * 0.05));
      const randomDamage = Math.floor(damage * (dice / 10));
      fullDamage = damage + randomDamage;
    } else {
      damage = Math.floor(a * (1 / (1 + (d - a) * 0.05)));
      const randomDamage = Math.floor(damage * (dice / 10));
      fullDamage = damage + randomDamage;
    }
    if (fullDamage < 1) fullDamage = 1;
    return fullDamage;
  };

  const attack = () => {
    start();

    let turn: number = 0;
    let side: boolean = true;
    let winner: "enemy" | "vamp" | "" = "";

    const vampAttack = (vamp: any, enemy: any) => {
      if (vamp.hp > 0 && enemy.hp > 0) {
        const vdamage = damage(vamp.att, enemy.def);
        setVDamage(vdamage);
        console.log(
          `Vamp[${vamp.hp}] наносит Enemy[${
            enemy.hp
          }] - ${vdamage} урона | Enemy[${Math.floor(
            (enemy.hp - vdamage) * 100
          ) / 100}]`
        );
        enemy.hp = Math.floor((enemy.hp - vdamage) * 100) / 100;
        changeEnemyHp(enemy.hp);
      }
    };

    const enemyAttack = (vamp: any, enemy: any) => {
      if (vamp.hp > 0 && enemy.hp > 0) {
        const edamage = damage(enemy.att, vamp.def);
        setEDamage(edamage);
        console.log(
          `Enemy[${enemy.hp}] наносит Vamp[${
            vamp.hp
          }] - ${edamage} урона | Vamp[${Math.floor((vamp.hp - edamage) * 100) /
            100}] `
        );
        vamp.hp = Math.floor((vamp.hp - edamage) * 100) / 100;
        changeVampHp(vamp.hp);
      }
    };

    const interval = setInterval(() => {
      if (vamp.hp <= 0 || enemy.hp <= 0) {
        setVDamage(0);
        setEDamage(0);
        if (vamp.hp <= 0) {
          winner = "enemy";
        } else if (enemy.hp <= 0) {
          winner = "vamp";
        }
        clearInterval(interval);
        console.log("End fight, winner:", winner);
        // console.log(vamp, enemy);
        end();
      } else {
        turn = turn + 1;
        // console.log(vamp, enemy);
        console.log("Ход:", turn);
        if (side) {
          side = !side;
          vampAttack(vamp, enemy);
          enemyAttack(vamp, enemy);
        } else {
          side = !side;
          enemyAttack(vamp, enemy);
          vampAttack(vamp, enemy);
        }
      }
    }, 1000);
  };

  return (
    <div>
      <Fight attack={attack} addHp={addHp} nextEnemy={nextEnemy} />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  const { vamp, enemy } = state;
  return { vamp, enemy };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    start: () => {
      dispatch(startFight());
    },
    end: () => {
      dispatch(endFight());
    },
    addHp: () => {
      dispatch(addHp());
    },
    nextEnemy: () => {
      dispatch(nextEnemy());
    },
    changeVampHp: (hp: number) => {
      dispatch(changeVampHp(hp));
    },
    changeEnemyHp: (hp: number) => {
      dispatch(changeEnemyHp(hp));
    },
    setVDamage: (damage: number) => {
      dispatch(setVDamage(damage));
    },
    setEDamage: (damage: number) => {
      dispatch(setEDamage(damage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FightContainer);
