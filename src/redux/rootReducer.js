import { combineReducers } from "redux";
import roomReducer from "./room/roomReducers";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  room: roomReducer,
  theme: themeReducer,
});

export default rootReducer;
