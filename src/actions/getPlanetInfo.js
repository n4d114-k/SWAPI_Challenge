import * as actionTypes from './types';
import axios from 'axios';

const addToPlanetInfoState = (data) => ({
  type: actionTypes.GET_PLANET_INFO,
  payload: data
});

const getPlanetInfo = (planetId) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`https://swapi.dev/api/planets/${planetId}`);
      dispatch(addToPlanetInfoState(data.data));
    } catch (err) {
      throw err;
    }
  }
}

export default getPlanetInfo;
