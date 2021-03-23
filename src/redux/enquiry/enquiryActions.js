import api from "../../api";
import {
  CREATE_ENQUIRY_REQUEST,
  CREATE_ENQUIRY_SUCCESS,
  CREATE_ENQUIRY_FAILURE,
  UPDATE_ENQUIRY_FORM_OBJ,
  UPDATE_ENQUIRY_DIALOUGE_OBJ,
  HIDE_SUCCESS_NOTIFICATION,
  HIDE_FAILURE_NOTIFICATION,
} from "./enquiryActionTypes";

export const createEnquiryRequest = () => {
  return {
    type: CREATE_ENQUIRY_REQUEST,
  };
};

export const createEnquirySuccess = (dispatch, enquiry) => {
  return {
    type: CREATE_ENQUIRY_SUCCESS,
    payload: enquiry,
  };
};

export const createEnquiryFailure = (error) => {
  return {
    type: CREATE_ENQUIRY_FAILURE,
    payload: error,
  };
};

export const updateEnquiryFormObj = (enquiry) => {
  return {
    type: UPDATE_ENQUIRY_FORM_OBJ,
    payload: enquiry,
  };
};

export const updateEnquiryDialougeObj = (enquiry) => {
  return {
    type: UPDATE_ENQUIRY_DIALOUGE_OBJ,
    payload: enquiry,
  };
};

export const hideSuccessNotifiacation = () => {
  return {
    type: HIDE_SUCCESS_NOTIFICATION,
  };
};

export const hideFailureNotifiacation = () => {
  return {
    type: HIDE_FAILURE_NOTIFICATION,
  };
};

export const createNewEnquiry = () => {
  return (dispatch, getState) => {
    dispatch(createEnquiryRequest());
    const state = getState().enquiry;
    console.log(state.enquiry);
    api
      .createEnquiry(state.enquiry)
      .then((response) => {
        const enquiryObj = response.data;
        dispatch(createEnquirySuccess(enquiryObj));
        
        // Hide notification after 5 seconds
        setTimeout(() => {
          dispatch(hideSuccessNotifiacation(false));
        }, 5000);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createEnquiryFailure(errorMsg));

        // Hide notification after 5 seconds
        setTimeout(() => {
          dispatch(hideFailureNotifiacation(false));
        }, 5000);
      });
  };
};
