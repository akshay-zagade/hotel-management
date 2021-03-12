import {
  ROOM_DATA_REQUEST,
  ROOM_DATA_SUCCESS,
  ROOM_DATA_FAILURE,
} from "./roomActionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOM_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ROOM_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ROOM_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default roomReducer;
