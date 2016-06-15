import * as types from './actionTypes';
import Util from '../common/Util';

export let fetchList = (isLoading)=>{
    let URL = 'http://goojio.com/search/quest/findAll';

    return dispatch => {
        dispatch(fetchingList(isLoading));
        console.log('fetching');
        return Util.get(URL, (response) => {
            dispatch(receiveList(response.contents));
        }, (error) => {
            console.log('Fetch list error: ' + error);
            dispatch(receiveList([]));
        });
    }
}

let fetchingList = ( isLoading ) => {
  return {
    type: types.FETCH_LIST,
    isLoading: isLoading
  }
}

let receiveList = (contents)=> {
    return {
        type: types.RECEIVE_LIST,
        contents: contents
    }
}
