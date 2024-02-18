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
import logo from "../../../image/logo.png";
const Header = () => {
  const [Active, setActive] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  let history = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const ProfileActive = () => {
    setProfileMenu(true);
  };
  const HoverProfileActive = () => {
    setProfileMenu(false);
  };
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const isNavElement = event.target.closest(".navItems");
      const isBurger = event.target.closest(".mobile");
      if (isBurger) {
        setActive(!Active);
      }
      if (Active && !isBurger) {
        setActive(false);
      }
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
            <img src={logo} alt="logo" className="logo-img" />
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
                alt=""
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
          </div>
        </div>

        <div className="mobile">
          <RxHamburgerMenu className="iconsStyle" size={25} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
