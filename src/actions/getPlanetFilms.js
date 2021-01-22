import * as actionTypes from './types';
import axios from 'axios';

const getPlanetFilms = (planetId) => {
  return(dispatch) => {
    console.log('Getting Planet Films');

    axios.get(`https://swapi.dev/api/planets/${planetId}`).then(data => {
      const name = data.data.name;
      const filmsLinks = data.data.films;
      dispatch(addToPlanetFilms(name, filmsLinks));
    });

    const addToPlanetFilms = (name, data) => ({
      type: actionTypes.GET_PLANET_FILMS,
      payload: [name, data]
    });



  }
}

export default getPlanetFilms
