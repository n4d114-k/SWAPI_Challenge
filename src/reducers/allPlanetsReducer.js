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
    ]
};

function gridReducer(state = initialState, action) {

  switch(action.type) {
    case actionTypes.GET_ALL_PLANETS:
      return {
        ...state,
      };
    default:
      return state;
  }

}

export default gridReducer;
