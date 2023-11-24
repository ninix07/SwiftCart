import React, { Fragment, useEffect } from "react";
import MetaData from "../layout/metaData";
import { useSelector } from "react-redux";
import Loader from "../layout/loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./styles/profile.scss";
const Profile = () => {
  const history = useNavigate();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      history(`/login`);
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Fragment>
            <MetaData title={`${user.name}'s Profile`} />
            <div className="profileContainer">
              <div>
                <h1>Profile</h1>
                <img src={user.profile_image.url} alt={user.name} />
                <Link to="/me/update">Edit Profile</Link>
              </div>
              <div>
                <div>
                  <h4>Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h4>User id</h4>
                  <p>{user._id}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div>
                  <Link to="/orders"> My Orders</Link>
                  <Link to="/password/update">Change Password</Link>
                </div>
              </div>
            </div>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
