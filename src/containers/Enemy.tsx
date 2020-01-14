import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';
// import {} from '../store/actions';

import Enemy from '../components/Enemy';

const EnemyContainer: React.FC<StoreState> = (props) => {
	const { enemy, vamp } = props;
	return (
		<div>
			<Enemy enemy={enemy} vamp={vamp} />
		</div>
	);
};

const mapStateToProps = (store: StoreState) => {
	const { vamp, enemy } = store;
	return { vamp, enemy };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(EnemyContainer);
