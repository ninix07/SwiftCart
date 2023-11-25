import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../constants/userConstant";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/login",
      {
        email,
        password,
      },
      config
    );
    console.log(data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post("/api/v1/register", userData, config);
    console.log(data);
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get("/api/v1/me");
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    if (error.response.status === 401) {
      dispatch({ type: LOAD_USER_FAIL, payload: null });
    } else {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error });
    }
  }
};
export const logout = () => async (dispatch) => {
  console.log("Dispatched logout");
  try {
    await axios.get(`/api/v1/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOGOUT_FAIL, payload: err.response.data.error });
  }
};
export const checkAuth = () => async (dispatch) => {};
export const clearError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post("/api/v1/password/forgot", email, config);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      config
    );
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};
