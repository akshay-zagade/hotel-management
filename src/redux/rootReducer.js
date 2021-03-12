import { combineReducers } from "redux";
import roomReducer from "./room/roomReducers";

const rootReducer = combineReducers({
  room: roomReducer,
});

export default rootReducer;
