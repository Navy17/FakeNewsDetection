import UserReducer from "./UserReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  UserReducer: UserReducer,
});

export default rootReducer;
