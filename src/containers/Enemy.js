import React from 'react';
import { connect } from 'react-redux';
// import {} from '../store/actions';

import Enemy from '../components/Enemy';

const EnemyContainer = ({ enemy }) => {
	return (
		<div>
			<Enemy enemy={enemy} />
		</div>
	);
};

const mapStateToProps = ({ enemy }) => {
	return { enemy };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(EnemyContainer);
