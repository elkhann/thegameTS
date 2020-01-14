import { combineReducers } from 'redux';

import vamp from './vamp';
import enemy from './enemy';
import fight from './fight';

export default combineReducers({
	vamp,
	enemy,
	fight
});
