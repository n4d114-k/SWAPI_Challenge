import { combineReducers } from 'redux';

import allPlanetsReducer from './allPlanetsReducer';


export default combineReducers({
  allPlanetsState: allPlanetsReducer,
});
