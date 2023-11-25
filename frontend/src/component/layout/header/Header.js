import React, { useState, useEffect } from "react";
import { BiSearchAlt2, BiCartAlt, BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag, MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import "./styles/header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";
import { Link } from "react-router-dom";
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
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const isNavElement = event.target.closest(".navItems");

      if (isNavElement) {
        setActive(false);
      }
    };
    const handleScroll = () => {
      if (Active) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener("click", handleDocumentClick);

    return () => {
      document.body.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Active]);

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
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
          </Link>
        </div>
        <div className={`navItems ${Active ? "active" : ""}`}>
          <div className="list">
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="active">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <Link to="/search" className="active">
              <BiSearchAlt2 className="iconsStyle" size={25} />
            </Link>
            <Link to="/cart" className="active">
              <BiCartAlt className="iconsStyle" size={25} />
            </Link>

            {isAuthenticated ? (
              <img
                src={
                  user.profile_image.url
                    ? user.profile_image.url
                    : "./Profile.png"
                }
                className="image"
                onMouseOver={ProfileActive}
                onClick={() => {
                  history("/account");
                }}
              />
            ) : (
              <Link to="/login" className="active">
                <BiUser className="iconsStyle" size={25} />
              </Link>
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
