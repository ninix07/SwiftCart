import React, { useState } from "react";
import { BiSearchAlt2, BiCartAlt, BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag, MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import "./styles/header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";
const Header = () => {
  const [Active, setActive] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  let history = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const clicked = () => {
    setActive(!Active);
  };
  const ProfileActive = () => {
    setProfileMenu(true);
  };
  const HoverProfileActive = () => {
    setProfileMenu(false);
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="/">
            <svg
              id="logo-38"
              width="78"
              height="32"
              viewBox="0 0 78 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
                class="ccustom"
                fill="#FF7A00"
              ></path>{" "}
              <path
                d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
                class="ccompli1"
                fill="#FF9736"
              ></path>{" "}
              <path
                d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
                class="ccompli2"
                fill="#FFBC7D"
              ></path>{" "}
            </svg>
          </a>
        </div>
        <div className={`navItems ${Active ? "active" : ""}`}>
          <div className="list">
            <ul>
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="active">
                  Product
                </a>
              </li>
              <li>
                <a href="/about" className="active">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="active">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <a href="/search" className="active">
              <BiSearchAlt2 className="iconsStyle" size={25} />
            </a>
            <a href="/cart" className="active">
              <BiCartAlt className="iconsStyle" size={25} />
            </a>

            {isAuthenticated ? (
              <img
                src={
                  user.profile_image.url
                    ? user.profile_image.url
                    : "./Profile.png"
                }
                className="image"
                onMouseOver={ProfileActive}
              />
            ) : (
              <a href="/login" className="active">
                <BiUser className="iconsStyle" size={25} />
              </a>
            )}
            <div
              className={profileMenu ? "ProfileMenu Active" : "ProfileMenu"}
              onMouseLeave={HoverProfileActive}
            >
              {user && user.role === "Admin" ? (
                <div
                  onClick={() => {
                    history("/dashboard");
                  }}
                >
                  {" "}
                  <MdDashboard className="PMenuIcon" /> Dashboard
                </div>
              ) : null}
              <div
                onClick={() => {
                  history("/order");
                }}
              >
                <MdOutlineShoppingBag className="PMenuIcon" /> Orders
              </div>
              <div
                onClick={() => {
                  history("/account");
                }}
              >
                <BiUser className="PMenuIcon" /> Account
              </div>
              <div
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <IoLogOut className="PMenuIcon" />
                Logout
              </div>
            </div>
          </div>
        </div>

        <div onClick={clicked} className="mobile">
          <RxHamburgerMenu className="iconsStyle" size={25} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
