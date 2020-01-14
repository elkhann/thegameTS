import React from 'react';

interface Props {
	addHp: Function;
	nextEnemy: Function;
	attack: Function;
}

const Fight: React.FC<Props> = (props) => {
	const { addHp, nextEnemy, attack } = props;

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
