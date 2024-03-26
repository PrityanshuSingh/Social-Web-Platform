import React, { useState } from "react";
import Navbar from "./css/NavigationBar.module.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Feed", link: "Feed" },
    { label: "Community", link: "/Community" },
    { label: "Internships", link: "/Internships" },
    { label: "Resources", link: "/Resources" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img
        loading="lazy"
        src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65f9a0cac7a2e3609aa31c83_icons8-menu%20(1).svg"
        className={Navbar.hamburgerIcon}
        alt=""
        onClick={toggleMenu}
      />
      <div className={`${Navbar.sidebarContainer} ${isOpen ? Navbar.open : ""}`}>
        <div className={Navbar.sidebarContent}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b60af29ddd87baacbef4b78cce2534469080341cd167596ba728c1ee2e62c92?apiKey=4aa0ae1a0e814437847f3f8ff6c4ef38&"
            className={Navbar.profileImage}
            alt="User profile"
          />
          <h2 className={Navbar.greeting}>
            Hello <br /> Username
          </h2>
          <nav className={Navbar.sidebarMenu}>
            <div className={Navbar.menuIcon}>
              <a href="/Feed">
                <img
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad4c8b8980ceff10ac3f2_XKmiKNuXjaUk.png"
                  className={Navbar.menuIcon}
                  alt=""
                />
              </a>
              <a href="/Community">
                <img
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad4f542abee9b1e00afd3_42uLHHsAiBxH.png"
                  className={Navbar.menuIcon}
                  alt=""
                />
              </a>
              <a href="/Intersnships">
                <img
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad54541e9f11aa27c9fd8_rRJmrcqDtxC0.png"
                  className={Navbar.menuIcon}
                  alt=""
                />
              </a>
              <a href="/Resources">
                <img
                  loading="lazy"
                  src="https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad589c149389b362e6b9c_bIeE9Fhcd2Lv.png"
                  className={Navbar.menuIcon}
                  alt=""
                />
              </a>
            </div>
            <ul className={Navbar.menuList}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className={Navbar.menuLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
