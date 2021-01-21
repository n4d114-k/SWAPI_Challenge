import * as actionTypes from './types';
import axios from 'axios';

const getPlanetResidents = (planetId) => {
  return(dispatch) => {
    console.log('Getting Planet Residents');

    axios.get(`https://swapi.dev/api/planets/${planetId}`).then(data => {
      const name = data.data.name;
      const residents = data.data.residents;
      dispatch(addToPlanetresidents(name, residents));
    });

    const addToPlanetresidents = (name, data) => ({
      type: actionTypes.GET_PLANET_RESIDENTS,
      payload: [name, data]
    });
  }
}

export default getPlanetResidents;
