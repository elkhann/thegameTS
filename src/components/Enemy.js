import React from 'react';

const Enemy = ({ enemy }) => {
	return (
		<div>
			Enemy info:
			<div>Name: {enemy.name}</div>
			<div>HP:{`${enemy.hp}/${enemy.maxHp}`}</div>
			<div>Attack: {enemy.attack}</div>
			<div>Defence: {enemy.def}</div>
		</div>
	);
};

export default Enemy;
