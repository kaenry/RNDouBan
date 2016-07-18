'use strict'

import Api from '../common/api'
import Util from '../common/util'

import {
	REQUEST_MOVIES, RECEIVE_MOVIES,
	REQUEST_EVENTS, RECEIVE_EVENTS,
} from './constant';

export function fetchMovies(start=0, count=10) {
	return dispatch => {
		dispatch(fetchingMovies())
		Util.get(Api.comming, {start: start, count: count}).then((ret) => {
			dispatch(receiveMovies(ret))
		})
	}
}

function fetchingMovies() {
	return {
		type: REQUEST_MOVIES,
		isFetching: true,
	}
}

function receiveMovies(ret) {
	return {
		type: RECEIVE_MOVIES,
		isFetching: false,
		movies: ret
	}
}

export function fetchEvents(start=0, count=10) {
	return dispatch => {
		dispatch(fetchingEvents())
		Util.get(Api.events, {start, count}).then((ret) => {
			dispatch(receiveEvents(ret))
		})
	}
}

function fetchingEvents() {
	return {
		type: REQUEST_EVENTS,
		isFetching: true,
	}
}

function receiveEvents(ret) {
	return {
		type: RECEIVE_EVENTS,
		isFetching: false,
		events: ret
	}
}
