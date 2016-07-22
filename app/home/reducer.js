'use strict'

import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	REFRESH_MOVIES,

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
		case REFRESH_MOVIES:

			return {
				...state,
				isFetching: true,
				movies: {
					start: 0,
					count: 10,
					subjects: [],
				}
			}
		case RECEIVE_MOVIES:
			const movies = {...state.movies};
			return {
				...state,
				isFetching: false,
				hasMore: (action.movies.start + action.movies.count) < action.movies.total,
				movies: {
					start: action.movies.start,
					count: action.movies.count,
					subjects: action.movies.start === 0 ? action.movies.subjects : [].concat(movies.subjects, action.movies.subjects)
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

export function eventsReducer(
	state = {
		isFetching: false,
		hasMore: false,
		events: {
			start: 0,
			count: 10,
			events: [],
		}
	}, action
) {
	switch (action.type) {
		case REQUEST_EVENTS:
			return {
				...state,
				isFetching: true,
			}
		case REFRESH_MOVIES:

			return {
				...state,
				isFetching: true,
				movies: {
					start: 0,
					count: 10,
					subjects: [],
				}
			}
		case RECEIVE_EVENTS:
			const events = {...state.events};
			return {
				...state,
				isFetching: false,
				hasMore: (action.events.start + action.events.count) < action.events.total,
				events: {
					start: action.events.start,
					count: action.events.count,
					events: action.events.start === 0 ? action.events.events : [].concat(events.events, action.events.events)
				}
			}
		default:
			return state
	}
}