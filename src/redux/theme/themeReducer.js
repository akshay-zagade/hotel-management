import { APPLY_DARK, APPLY_LIGHT } from "./themeActionTypes";

const DARK = "dark";
const LIGHT = "light";

const initialState = {
  type: LIGHT,
  isOn: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_LIGHT:
      return {
        ...state,
        type: LIGHT,
        isOn: false,
      };

    case APPLY_DARK:
      return {
        ...state,
        type: DARK,
        isOn: true,
      };

    default:
      return state;
  }
};

export default themeReducer;
