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
        values: action.payload
      };
    case actionTypes.GET_PLANET_INFO:
      return {
        ...state,
        selectedPlanet: action.payload
      }
      case actionTypes.GET_PLANET_RESIDENTS:
        return {
          ...state,
          planetResidents: action.payload
        }
        case actionTypes.GET_PLANET_FILMS:
          return {
            ...state,
            planetFilms: action.payload
          }
    default:
      return state;
  }

}

export default gridReducer;
