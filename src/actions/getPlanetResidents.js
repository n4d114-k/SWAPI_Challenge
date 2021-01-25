import * as actionTypes from './types';
import axios from 'axios';

const addToPlanetresidents = (filmName, residents, err = null) => ({
  type: actionTypes.GET_PLANET_RESIDENTS,
  payload: {filmName, residents, err}
});

const getPlanetResidents = (planetId) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`https://swapi.dev/api/planets/${planetId}`);
      const filmName = data.data.name;
      const residentsLink = data.data.residents;
      const residentsData = (await Promise.all(
        residentsLink.map(link => axios.get(link))
      ))
      .map(res => res.data);
      dispatch(addToPlanetresidents(filmName, residentsData));
    } catch (err) {
      throw err;
    }
  }
}

export default getPlanetResidents;
