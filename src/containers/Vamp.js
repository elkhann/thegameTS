import React from 'react';
import { connect } from 'react-redux';
// import {} from '../store/actions';

import Vamp from '../components/Vamp';

const VampContainer = ({ vamp }) => {
	return (
		<div>
			<Vamp vamp={vamp} />
		</div>
	);
};

const mapStateToProps = ({ vamp }) => {
	return { vamp };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(VampContainer);
