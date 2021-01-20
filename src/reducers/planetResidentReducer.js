import axios from 'axios'

import * as actionTypes from '../actions/types';

const initialState = {};

function planetResidentReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.GET_PLANET_RESIDENTS:
    axios.get('https://swapi.dev/api/planets').then(data => {
      const planets = data.data.results;
      state.values.push(...planets)
    });
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default planetResidentReducer;
