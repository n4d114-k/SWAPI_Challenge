import * as actionTypes from './types';
import axios from 'axios';

const addToPlanetsState = (next, prev, results) => ({
  type: actionTypes.GET_ALL_PLANETS,
  payload: results,
  next: next,
  prev: prev
});

const getAllPlanets = (pageNum) => {
  return async(dispatch) => {
    try {
      const data = await axios.get(`https://swapi.dev/api/planets/?page=${pageNum}`)
        const next = !!data.data.next;
        const prev = !!data.data.previous;
        const results = data.data.results;
        dispatch(addToPlanetsState(next, prev, results))
    } catch (err) {
      throw err;
    }
  }
}

export default getAllPlanets;
