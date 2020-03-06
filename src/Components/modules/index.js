import { combineReducers } from "redux";
import items from "../modules/items";
import items_data from "./items_data";
import items_num from "./items_num";
const rootReducer = combineReducers({
  items,
  items_data,
  items_num
});
export default rootReducer;
