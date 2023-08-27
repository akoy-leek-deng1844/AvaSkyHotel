import { links } from "./Data";
import { FaBars } from "react-icons/fa";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo2.png";
const NavBar = () => {
  const [togglenav, setTogglenav] = useState(false);
  const [navColor, setNaveColor] = useState(false);
  const navref = useRef(null);

  const linkStyles = {
    height: togglenav
      ? `${navref.current.getBoundingClientRect().height}px`
      : "0px",
  };
  const handleToggle = () => {
    setTogglenav(false);
  };

  const handleNavChange = () => {
    if (window.scrollY >= 80) {
      setNaveColor(true)
    } else {
      setNaveColor(false)
    }
  }
  window.addEventListener("scroll", handleNavChange);
  return (
    <nav className={navColor ? "nav activeNav" : "nav"}>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="nav-toggle"
            onClick={() => setTogglenav(!togglenav)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={linkStyles}>
          <ul className="links" ref={navref}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  onClick={handleToggle}
                  key={id}
                  to={url}
                >
                  {text}
                </NavLink>
              );
            })}
          </ul>
        </div>

        {/* <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <a key={id} href={url}>
                {icon}
              </a>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};
export default NavBar;
