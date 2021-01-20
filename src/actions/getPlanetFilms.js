import * as actionTypes from './types';

export const getPlanetFilms = (planet) => {
  return(dispatch) => {
    console.log('Getting Planet Films');
    dispatch({
      type: actionTypes.GET_PLANET_FILMS,
    });
  }
}
