import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
// import { reducer as formReducer } from "redux-form";

const reducers = {
  dataModel: ContactReducer,
  // form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
