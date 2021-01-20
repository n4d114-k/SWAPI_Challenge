import * as actionTypes from './types';

export const getPlanetInfo = (planet) => {
  return(dispatch) => {
    console.log('Getting Planet Info');
    dispatch({
      type: actionTypes.GET_PLANET_INFO,
    });
  }
}
