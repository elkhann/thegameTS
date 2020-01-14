import React from 'react';
import { connect } from 'react-redux';
import {
	startFight,
	endFight,
	addHp,
	nextEnemy,
	changeVampHp,
	changeEnemyHp
} from '../store/actions';

import Fight from '../components/Fight';

const FightContainer = ({
	vamp,
	enemy,
	nextEnemy,
	addHp,
	start,
	end,
	changeVampHp,
	changeEnemyHp
}) => {
	const attack = () => {
		start();

		let turn = 0;
		let side = true;
		let winner = false;

		const damage = (a, d) => {
			let damage = 1;
			if ((a) => d) {
				damage = Math.floor(a * (1 + (a - d) * 0.05));
			} else {
				damage = Math.floor(a * (1 / (1 + (d - a) * 0.05)));
			}
			if (damage < 1) damage = 1;
			return damage;
		};

		const vdamage = damage(vamp.attack, enemy.def);
		const edamage = damage(enemy.attack, vamp.def);

		const vampAttack = (vamp, enemy) => {
			if (vamp.hp > 0 && enemy.hp > 0) {
				console.log(
					`Vamp[${vamp.hp}] наносит Enemy[${enemy.hp}] - ${vdamage} урона | Enemy[${Math.floor(
						(enemy.hp - vdamage) * 100
					) / 100}]`
				);
				enemy.hp = Math.floor((enemy.hp - vdamage) * 100) / 100;
				changeEnemyHp(enemy.hp);
			}
		};
		const enemyAttack = (vamp, enemy) => {
			if (vamp.hp > 0 && enemy.hp > 0) {
				console.log(
					`Enemy[${enemy.hp}] наносит Vamp[${vamp.hp}] - ${edamage} урона | Vamp[${Math.floor(
						(vamp.hp - edamage) * 100
					) / 100}] `
				);
				vamp.hp = Math.floor((vamp.hp - edamage) * 100) / 100;
				changeVampHp(vamp.hp);
			}
		};

		const interval = setInterval(() => {
			if (vamp.hp <= 0 || enemy.hp <= 0) {
				if (vamp.hp <= 0) {
					winner = 'enemy';
				} else if (enemy.hp <= 0) {
					winner = 'vamp';
				}
				clearInterval(interval);
				console.log('End fight, winner:', winner);
				end();
			} else {
				turn = turn + 1;

				console.log('Ход:', turn);
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
		}, 300);
	};

	return (
		<div>
			<Fight attack={attack} addHp={addHp} nextEnemy={nextEnemy} />
		</div>
	);
};

const mapStateToProps = ({ vamp, enemy }) => {
	return { vamp, enemy };
};

const mapDispatchToProps = (dispatch) => {
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
		changeVampHp: (hp) => {
			dispatch(changeVampHp(hp));
		},
		changeEnemyHp: (hp) => {
			dispatch(changeEnemyHp(hp));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FightContainer);
