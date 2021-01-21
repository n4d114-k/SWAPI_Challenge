import * as actionTypes from './types';
import axios from 'axios';

const getPlanetInfo = (planetId) => {
  return(dispatch) => {
    console.log('Getting Planet Info');

    axios.get(`https://swapi.dev/api/planets/${planetId}`).then(data => {
      dispatch(addToPlanetInfoState(data.data));
    });

    const addToPlanetInfoState = (data) => ({
      type: actionTypes.GET_PLANET_INFO,
      payload: data
    });
  }
}

export default getPlanetInfo;
