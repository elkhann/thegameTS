import React from 'react';

const Fight = ({ addHp, nextEnemy, attack }) => {
	const startFightHandle = () => {
		attack();
	};

	return (
		<div>
			<h1>Fight</h1>
			<button onClick={() => startFightHandle()}>Fight</button>
			<button onClick={() => addHp()}>Add hp</button>
			<button onClick={() => nextEnemy()}>Next enemy</button>
		</div>
	);
};

export default Fight;
