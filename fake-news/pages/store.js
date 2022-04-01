import { createStore } from "redux";
import RootReducer from "./Redusers/RootReducer";

const store = createStore(RootReducer);

export default store;
