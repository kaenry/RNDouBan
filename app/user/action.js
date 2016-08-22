'use strict';

import Api from '../common/api';
import Util from '../common/util';

import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
} from './constant';

export function fetchUser(name='kaenry') {
	let url = name ? (Api.users + '/' + name) : Api.users;
	return {
		// Types of actions to emit before and after
		types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
		// Perform the fetching:
		callAPI: () => Util.get(url),
		// Arguments to inject in begin/end actions
		payload: {
			name
		}
	}
}
