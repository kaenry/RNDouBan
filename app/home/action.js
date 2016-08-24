'use strict';

import Api from '../common/api';
import Util from '../common/util';

import {
	FETCH_REPO_REQUEST,
	FETCH_REPO_SUCCESS,
	FETCH_REPO_FAILURE,

	SEARCH_REPOS_SUCCESS,
	SEARCH_REPOS_REQUEST,
	SEARCH_REPOS_FAILURE,

	CHANGE_SEARCH_TEXT,
} from './constant';

export function searchRepos(q = 'react-native', page = 1, per_page = 15) {
	return {
		// Types of actions to emit before and after
		types: [SEARCH_REPOS_REQUEST, SEARCH_REPOS_SUCCESS, SEARCH_REPOS_FAILURE],
		// Perform the fetching:
		callAPI: () => Util.get(Api.search_repos, {
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

export function changeSearchText(text = 'react-native') {
	return {
		type: CHANGE_SEARCH_TEXT,
		text,
	}
}

export function fetchRepo(owner = 'kaenry', name = 'RNGitHub') {
	return {
		// Types of actions to emit before and after
		types: [FETCH_REPO_REQUEST, FETCH_REPO_SUCCESS, FETCH_REPO_FAILURE],
		// Perform the fetching:
		callAPI: () => Util.get(`${Api.repos}/${owner}/${name}`),
		// Arguments to inject in begin/end actions
		payload: {
			owner,
			name,
		}
	}
}
