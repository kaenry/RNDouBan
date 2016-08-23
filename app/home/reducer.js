'use strict';

import {
	FETCH_REPOS_REQUEST,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_FAILURE,
} from './constant';

export function reposReducer(
	state = {
		isFetching: false,
		q: 'react-native',
		repos: {
			page: 1,
			per_page: 15,
			items: [],
		}
	}, action
) {
	switch (action.type) {
		case FETCH_REPOS_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case FETCH_REPOS_FAILURE:

			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case FETCH_REPOS_SUCCESS:
			const resp = action.response;
			return {
				...state,
				isFetching: false,
				repos: {
					page: action.page,
					per_page: action.per_page,
					items: action.page === 1 ? resp.items : [].concat(state.repos.items, resp.items),
				}
			}
		default:
			return state
	}
}
