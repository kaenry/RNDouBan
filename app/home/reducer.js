'use strict';

import {
	FETCH_REPO_REQUEST,
	FETCH_REPO_SUCCESS,
	FETCH_REPO_FAILURE,

	SEARCH_REPOS_SUCCESS,
	SEARCH_REPOS_REQUEST,
	SEARCH_REPOS_FAILURE,

	CHANGE_SEARCH_TEXT,
} from './constant';

export function searchReposReducer(
	state = {
		isFetching: false,
		q: 'react-native',
		repos: {
			page: 1,
			per_page: 15,
			incomplete: false,
			items: [],
		}
	}, action
) {
	switch (action.type) {
		case SEARCH_REPOS_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case SEARCH_REPOS_FAILURE:

			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case SEARCH_REPOS_SUCCESS:
			const resp = action.response;
			return {
				...state,
				isFetching: false,
				repos: {
					page: action.page,
					per_page: action.per_page,
					incomplete: resp.incomplete_results,
					items: action.page === 1 ? resp.items : [].concat(state.repos.items, resp.items),
				}
			}
		case CHANGE_SEARCH_TEXT:
			return {
				...state,
				q: action.text,
			}
		default:
			return state
	}
}

export function repoReducer(
	state = {
		isFetchingRepo: false,
		name: 'RNGitHub',
		owner: 'kaenry',
		repo: {}
	}, action
) {
	switch (action.type) {
		case FETCH_REPO_REQUEST:
			return {
				...state,
				isFetchingRepo: true,
			}
		case FETCH_REPO_FAILURE:

			return {
				...state,
				isFetchingRepo: false,
				error: action.error,
			}
		case FETCH_REPO_SUCCESS:
			return {
				...state,
				isFetchingRepo: false,
				repo: action.response,
			}
		default:
			return state
	}
}
