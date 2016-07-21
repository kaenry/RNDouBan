'use strict'

import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	REQUEST_EVENTS,
	RECEIVE_EVENTS
} from './constant'

export function moviesReducer(
	state = {
		isFetching: false,
		hasMore: false,
		movies: {
			start: 0,
			count: 10,
			subjects: [],
		}
	}, action
) {
	switch (action.type) {
		case REQUEST_MOVIES:

			return {
				...state,
				isFetching: true,
			}
		case RECEIVE_MOVIES:
			const {
				movies
			} = action;
			return {
				...state,
				isFetching: false,
				hasMore: (movies.start + movies.count) < movies.total,
				movies: {
					start: movies.start,
					count: movies.count,
					subjects: movies.subjects
				}
			}
		case REQUEST_EVENTS: 
			return {
				...state,
				isFetching: true,
			}
		case RECEIVE_EVENTS:
			const {events} = action; 
			return {
				...state,
				events: action.ret,
				isFetching: false,
				hasMore: (events.start + events.count) < events.total
			}
		default:
			return state
	}
}