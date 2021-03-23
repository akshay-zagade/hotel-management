import {
  CREATE_ENQUIRY_REQUEST,
  CREATE_ENQUIRY_SUCCESS,
  CREATE_ENQUIRY_FAILURE,
  UPDATE_ENQUIRY_FORM_OBJ,
  UPDATE_ENQUIRY_DIALOUGE_OBJ,
  HIDE_SUCCESS_NOTIFICATION,
  HIDE_FAILURE_NOTIFICATION,
} from "./enquiryActionTypes";

const initialState = {
  successNotification: false,
  failureNotification: false,
  enquiry: {
    checkInDate: "",
    checkOutDate: "",
    guestCount: undefined,
    firstName: "",
    lastName: "",
    contactNo: "",
    customerComment: "",
  },
  error: "",
};

const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENQUIRY_REQUEST:
      return {
        ...state,
      };
    case CREATE_ENQUIRY_SUCCESS:
      return {
        ...state,
        successNotification: true,
        enquiry: action.payload,
      };
    case CREATE_ENQUIRY_FAILURE:
      return {
        ...state,
        failureNotification: true,
        error: action.payload,
      };
    case UPDATE_ENQUIRY_FORM_OBJ:
      return {
        ...state,
        enquiry: {
          ...state.enquiry,
          checkInDate: action.payload.checkInDate,
          checkOutDate: action.payload.checkOutDate,
          guestCount: action.payload.guestCount,
        },
      };
    case UPDATE_ENQUIRY_DIALOUGE_OBJ:
      return {
        ...state,
        enquiry: {
          ...state.enquiry,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          contactNo: action.payload.contactNo,
          customerComment: action.payload.customerComment,
        },
      };
    case HIDE_SUCCESS_NOTIFICATION:
      return {
        ...state,
        successNotification: false,
      };
    case HIDE_FAILURE_NOTIFICATION:
      return {
        ...state,
        failureNotification: false,
      };
    default:
      return state;
  }
};

export default enquiryReducer;
