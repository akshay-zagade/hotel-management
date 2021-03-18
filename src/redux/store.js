import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveState({ theme: store.getState().theme });
  }, 500)
);
export default store;
