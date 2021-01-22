import * as actionTypes from './types';
import axios from 'axios';

const getNextPage = (action) => {
  return(dispatch) => {
    dispatch({
      type: action === 'increase' ? actionTypes.GET_NEXT_PAGE : actionTypes.GET_PREV_PAGE,
    });
  }
}

export default getNextPage;
