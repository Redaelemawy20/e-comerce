import { createContext } from "react";
import {
  FETCH_USER_BEGIN,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
  USER_LOGGED_OUT,
} from "../actions";
export default (state, action) => {
  if (action.type === FETCH_USER_BEGIN) {
    return { ...state, user: null };
  }
  if (action.type === FETCH_USER_FAILED) {
    return { ...state, user: null };
  }
  if (action.type === FETCH_USER_SUCCESS) {
    console.log(action.payload);
    return { ...state, user: action.payload };
  }
  if (action.type === USER_LOGGED_OUT) {
    return { ...state, user: null };
  }
};
