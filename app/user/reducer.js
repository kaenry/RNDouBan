'use strict';

import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
} from './constant';

export function userReducer(
	state = {
		isFetchingUser: false,
		user: {},
	}, action
) {
	switch (action.type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				isFetchingUser: true,
			}
		case FETCH_USER_FAILURE:

			return {
				...state,
				isFetchingUser: false,
				error: action.error,
			}
		case FETCH_USER_SUCCESS:
			return {
				...state,
				isFetchingUser: false,
				user: action.response
			}
		default:
			return state
	}
}
