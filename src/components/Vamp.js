import React from 'react';

const Vamp = ({ vamp }) => {
	return (
		<div>
			Vamp info:
			<div>Name: {vamp.name}</div>
			<div>HP:{`${vamp.hp}/${vamp.maxHp}`}</div>
			<div>Attack: {vamp.attack}</div>
			<div>Defence: {vamp.def}</div>
		</div>
	);
};

export default Vamp;
