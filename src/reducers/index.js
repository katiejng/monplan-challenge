import { combineReducers } from 'redux';
import UnitReducer from './unit_reducer'
import ActiveUnit from './activated_unit_reducer'
const rootReducer = combineReducers({
  units: UnitReducer,
  activeUnit: ActiveUnit
});

export default rootReducer;
