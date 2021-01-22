import * as actionTypes from './types';
import axios from 'axios';

const getPrevPage = (pageNum) => {
  return(dispatch) => {
    console.log('Getting Prev Page');
    axios.get(`https://swapi.dev/api/planets/?page=${pageNum}`)
    .then(data => {
      const next = !!data.data.next;
      const prev = !!data.data.previous;
      const results = data.data.results;
      dispatch(addToPlanetsState(next, prev, results))
    });

    const addToPlanetsState = (next, prev, results) => ({
      type: actionTypes.GET_PREV_PAGE,
      payload: results,
      next: next,
      prev: prev
    });
  }
}

export default getPrevPage;
