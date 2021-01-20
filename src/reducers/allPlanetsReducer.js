import axios from 'axios'

import * as actionTypes from '../actions/types';

const initialState = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    actions: [
      {
        label: 'Go to Films',
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
      }
    ],
    values: []
};

function gridReducer(state = initialState, action) {

  switch(action.type) {
    case actionTypes.GET_ALL_PLANETS:
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

export default gridReducer;
