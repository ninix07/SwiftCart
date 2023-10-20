import React, { useState } from "react";
import { BiSearchAlt2, BiCartAlt, BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./styles/header.scss";

const Header = () => {
  const [Active, setActive] = useState(false);
  const clicked = () => {
    setActive(!Active);
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
            <a href="/profile" className="active">
              <BiUser className="iconsStyle" size={25} />
            </a>
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
