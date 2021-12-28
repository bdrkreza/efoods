import { Dispatch } from "react";
import authService, { userType } from "../../api/authService";
import { AuthAction } from "../actions/authAction";
import { ActionType } from "../actionType";

export const login = (payload: userType) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionType.LOGIN_PENDING,
    });
    authService
      .login(payload)
      .then((data) => {
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.LOGIN_ERROR,
          payload: err?.response?.data?.message,
        });
      });
  };
};

export const logout = (): AuthAction => {
  return {
    type: ActionType.LOGOUT,
  };
};
