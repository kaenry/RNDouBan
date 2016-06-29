'use strict'

import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES
} from './constant'

export function moviesReducer(
	state = {
		isFetching: true,
		hasMore: true,
		movies: {}
	}, action
) {
	switch (action.type) {
		case REQUEST_MOVIES:

			return Object.assign({}, state, {
				isFetching: true,
			})
		case RECEIVE_MOVIES:
			const {
				movies
			} = action;
			return Object.assign({}, state, {
				movies: action.movies,
				isFetching: action.isFetching,
				hasMore: (movies.start + movies.count) < movies.total
			})
		default:
			return state
	}
}