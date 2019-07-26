import axios from 'axios';
import { GET_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());

  axios.get('http://localhost:8080/cuisinier/'+ localStorage.getItem('id')).then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete('http://localhost:8080/cuisinier/'+ localStorage.getItem('id')).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};