import * as actionTypes from './types';

const getAllPlanets = () => {
  return(dispatch) => {
    console.log('Getting All Planets');
    dispatch({
      type: actionTypes.GET_ALL_PLANETS,
    });
  }
}

export default getAllPlanets;
