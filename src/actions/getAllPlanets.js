import * as actionTypes from './types';
import axios from 'axios';

const getAllPlanets = () => {
  return(dispatch) => {
    console.log('Getting All Planets');
    axios.get('https://swapi.dev/api/planets')
    .then(data => {
      dispatch(addToPlanetsState(data.data.results))
    });

    const addToPlanetsState = (data) => ({
      type: actionTypes.GET_ALL_PLANETS,
      payload: data
    });
  }
}

export default getAllPlanets;
