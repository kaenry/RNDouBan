'use strict';

import {
	FETCH_REPOS_REQUEST,
	FETCH_REPOS_SUCCESS,
	FETCH_REPOS_FAILURE,
} from './constant';

export function reposReducer(
	state = {
		isFetching: false,
		hasMore: false,
		repos: {
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
			return {
				...state,
				isFetching: false,
				repos: action.response
			}
		default:
			return state
	}
}
