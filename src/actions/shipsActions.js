import {
  GET_SHIPS,
  GET_SHIPS_SUCCESS,
  GET_SHIPS_FAILURE,
} from './types';

import API from '../api';

export const getShips = () => ({ type: GET_SHIPS });

export const getShipsSuccess = ships => ({
  type: GET_SHIPS_SUCCESS,
  payload: ships,
});

export const getShipsFailure = () => ({ type: GET_SHIPS_FAILURE });


export const fetchFilterForShips = selected => async dispatch => {
  dispatch(getShips());
  try {
    const response = await API.get();
    const { results } = response.data;
    const filterItems = results.filter(item => item.name === selected);
    dispatch(getShipsSuccess(filterItems));
  } catch (error) {
    dispatch(getShipsFailure());
  }
};