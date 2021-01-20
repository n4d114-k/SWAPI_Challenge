import { combineReducers } from 'redux';

import allPlanetsReducer from './allPlanetsReducer';
import planetResidentReducer from './planetResidentReducer';


export default combineReducers({
  allPlanetsState: allPlanetsReducer,
  PlanetResident: planetResidentReducer
});
