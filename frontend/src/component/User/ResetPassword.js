import React, { Fragment, useState, useEffect } from "react";
import "./styles/ResetPassword.scss";
import Loader from "../layout/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearError, resetPassword } from "../../actions/userAction";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstant";
import MetaData from "../layout/metaData";
const ResetPassword = () => {
  const dispatch = useDispatch();
  const match = useParams();
  const alert = useAlert();
  const history = useNavigate();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(match.token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (success) {
      alert.success("Password Updated Successfully");
      history("/login");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, alert, history, success]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Reset Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Reset Password</h2>
              <form
                className="resetPasswordForm"
                encType="multipart/form-data"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update Password"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ResetPassword;
