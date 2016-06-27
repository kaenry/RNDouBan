'use strict'

import Api from '../common/api'
import Util from '../common/util'

import {
	REQUEST_MOVIES, RECEIVE_MOVIES
} from './constant';

export function fetchMovies(start=0, count=10) {
	return dispatch => {
		// dispatch(fetchMovies())
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
