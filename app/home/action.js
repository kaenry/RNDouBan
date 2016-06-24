'use strict'

import Api from '../common/api'
import Util from '../common/util'

import {
	REQUEST_MOVIES, RECEIVE_MOVIES
} from './constant';

export function fetchMovies() {
	return dispatch => {
		// dispatch(fetchMovies())
		fetch(Api.comming).then(ret => ret.json()).then((ret) => {
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
	console.log('receive:',ret)
	return {
		type: RECEIVE_MOVIES,
		isFetching: false,
		movies: ret
	}
}
