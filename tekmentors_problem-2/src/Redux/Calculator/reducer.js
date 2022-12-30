import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TAX_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_TAX_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };

    case types.GET_TAX_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true, data: [] };

    case types.POST_TAX_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.POST_TAX_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.POST_TAX_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
