import { combineReducers } from 'redux';
import SelectedItemReducer from './SelectedItemReducer';
import PassengersReducer from './PassengersReduder';
import ShipsReducer from './ShipsReducer';

export default combineReducers({
  selectedItem:SelectedItemReducer,
  passanger:PassengersReducer,
  shipsItem: ShipsReducer
});