'use strict'

import {
    REQUEST_MOVIES, RECEIVE_MOVIES
} from './constant'

export function moviesReducer (
	state={
		isFetching: true,
		movies: {},
	}, action
) {
	switch (action.type) {
		case REQUEST_MOVIES:
			
			return Object.assign({}, state, {
				isFetching: true,
			})
		case RECEIVE_MOVIES:
			return Object.assign({}, state, {
				movies: action.movies,
				isFetching: action.isFetching
			})
		default: 
			return state
	}
}