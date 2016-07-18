'use strict'

import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	REQUEST_EVENTS,
	RECEIVE_EVENTS
} from './constant'

export function homeReducer(
	state = {
		isFetching: true,
		hasMore: true,
		movies: {
			subjects: []
		},
		events: {},
	}, action
) {
	switch (action.type) {
		case REQUEST_MOVIES:

			return {
				isFetching: true,
				...state,
			}
		case RECEIVE_MOVIES:
			const {
				movies
			} = action;
			return Object.assign({}, state, {
				movies: action.movies,
				isFetching: action.isFetching,
				hasMore: (movies.start + movies.count) < movies.total
			})
		case REQUEST_EVENTS: 
			return {
				...state,
				isFetching: true,
			}
		case RECEIVE_EVENTS:
			const {events} = action; 
			return {
				events: action.ret,
				isFetching: false,
				hasMore: (events.start + events.count) < events.total
			}
		default:
			return state
	}
}