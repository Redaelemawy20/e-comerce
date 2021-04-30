import React, { useContext, useEffect, createContext, useReducer } from "react";
import axios from "axios";
import {
  FETCH_USER_BEGIN,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
  USER_LOGGED_OUT,
} from "../actions";
import authReducer from "../reducers/auth_reducer";
const initialState = {
  user: null,
};
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const getCurrentUser = async () => {
    dispatch({ type: FETCH_USER_BEGIN });
    try {
      const res = await axios.get("/api/current_user");
      console.log(res.data);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_FAILED });
    }
  };

  const logout = async () => {
    try {
      axios.get("/api/logout");
      dispatch({ type: USER_LOGGED_OUT });
    } catch (error) {}
  };
  useEffect(() => {
    console.log("agian", state);
    getCurrentUser();
  }, []);
  return (
    <UserContext.Provider value={{ user: state.user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
