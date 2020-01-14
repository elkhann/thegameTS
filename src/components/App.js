import React from 'react';
import Vamp from '../containers/Vamp';
import Enemy from '../containers/Enemy';
import Fight from '../containers/Fight';

const App = () => {
	return (
		<div className="App">
			<Vamp />
			<hr />
			<Enemy />
			<hr />
			<Fight />
		</div>
	);
};

export default App;
