import { combineReducers } from 'redux';
import UnitReducer from './unit_reducer'
const rootReducer = combineReducers({
  units: UnitReducer
});

export default rootReducer;
