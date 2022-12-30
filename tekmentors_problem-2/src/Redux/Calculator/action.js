import * as types from "./actionTypes";
import axios from "axios";

export const postData = (payload) => (dispatch) => {
  dispatch({ type: types.POST_TAX_DATA_REQUEST });
  return axios
    .post(`https://tekmentors-assignment-2.onrender.com/invoices`, payload)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: types.POST_TAX_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.POST_TAX_DATA_FAILURE, payload: err });
    });
};

export const getData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_TAX_DATA_REQUEST });
  return axios
    .get("https://tekmentors-assignment-2.onrender.com/invoices")
    .then((res) => {
      //   console.log(res);
      return dispatch({
        type: types.GET_TAX_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_TAX_DATA_FAILURE,
        payload: err,
      });
    });
};
