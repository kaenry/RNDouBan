'use strict';

import Api from '../common/api';
import Util from '../common/util';

import {
	FETCH_REPOS_REQUEST,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_FAILURE,
} from './constant';

export function fetchRepos(q = 'react-native', page = 1, per_page = 15) {
	return {
		// Types of actions to emit before and after
		types: [FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE],
		// Perform the fetching:
		callAPI: () => Util.get(Api.repositories, {
			q,
			page,
			per_page,
		}),
		// Arguments to inject in begin/end actions
		payload: {
			q,
			page,
			per_page,
		}
	}
}
