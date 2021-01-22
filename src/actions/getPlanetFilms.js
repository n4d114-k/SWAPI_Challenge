import * as actionTypes from './types';
import axios from 'axios';

const addToPlanetFilms = (filmName, films, err = null) => ({
  type: actionTypes.GET_PLANET_FILMS,
  payload: {filmName, films, err}
});

const getPlanetFilms = (planetId) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`https://swapi.dev/api/planets/${planetId}`)
      const filmName = data.data.name;
      const filmsLinks = data.data.films;
      const filmsData = (await Promise.all(
        filmsLinks.map(link => axios.get(link))
      ))
      .map(responce => responce.data);
      dispatch(addToPlanetFilms(filmName, filmsData));
    } catch (err) {
      throw err;
    }
  }
}

export default getPlanetFilms
