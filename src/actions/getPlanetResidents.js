import * as actionTypes from './types';

const getPlanetResidents = (planet) => {
  return(dispatch) => {
    console.log('Getting Planet Residents');
    dispatch({
      type: actionTypes.GET_PLANET_RESIDENTS,
    });
  }
}

export default getPlanetResidents;
