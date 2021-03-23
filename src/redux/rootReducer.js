import { combineReducers } from "redux";
import roomReducer from "./room/roomReducers";
import themeReducer from "./theme/themeReducer";
import enquiryReducer from "./enquiry/enquiryReducer"

const rootReducer = combineReducers({
  room: roomReducer,
  theme: themeReducer,
  enquiry: enquiryReducer
});

export default rootReducer;
