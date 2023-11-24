import {
  UPDATE_POROFILE_FAIL,
  UPDATE_POROFILE_RESET,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstant";

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_POROFILE_FAIL:
      return {
        ...state,
        loading: false,
        isUpdated: null,
        error: action.payload,
      };
    case UPDATE_POROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
