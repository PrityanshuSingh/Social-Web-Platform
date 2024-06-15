import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUsers, faEdit, faUser, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./styles/NavigationBar.module.css";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 786);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setActiveLink(`/${path}`);
  }, [location]);

  const menuItems = [
    { label: "Feed", link: "/feed", icon: faCompass },
    { label: "Community", link: "/community", icon: faUsers },
    { label: "Search", link: "/search", icon: faSearch },
    { label: "Create", link: "/create", icon: faEdit },
    // { label: "Notifications", link: "/notifications", icon: faBell },
    { label: "Profile", link: "/profile", icon: faUser },
  ];

  const handleLinkClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <>
      {isMobile && (
        <div className={Navbar.bottomNavbar}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`${Navbar.bottomNavbarIcon} ${activeLink === item.link ? Navbar.activeLink : ""}`}
              onClick={() => handleLinkClick(item.link)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`${Navbar.menuIcon} ${activeLink === item.link ? Navbar.activeIcon : ""}`}
                style={{ fontSize: "1.6em", margin: "0.5" }}
              />
            </Link>
          ))}
        </div>
      )}

      {!isMobile && (
        <div className={`${Navbar.sidebarContainer} ${isOpen ? Navbar.open : ""}`}>
          <div className={Navbar.sidebarContent}>
            <h2 className={Navbar.logo}>Logo</h2>
            <div className={Navbar.profileImageContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b60af29ddd87baacbef4b78cce2534469080341cd167596ba728c1ee2e62c92?apiKey=4aa0ae1a0e814437847f3f8ff6c4ef38&"
                className={Navbar.profileImage}
                alt="User profile"
              />
            </div>
            <h2 className={Navbar.greeting}>Username</h2>
            <nav className={Navbar.sidebarMenu}>
              <div className={Navbar.menublock}>
                <div className={Navbar.menuIcon}>
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={`${Navbar.menuLink} ${activeLink === item.link ? Navbar.activeLink : ""}`}
                      onClick={() => handleLinkClick()}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`${Navbar.menuIcon} ${activeLink === item.link ? Navbar.activeIcon : ""}`}
                        style={{ fontSize: "1.6em", margin: "0.5" }}
                      />
                    </Link>
                  ))}
                </div>
                <ul className={Navbar.menuList}>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className={`${Navbar.menuLink} ${activeLink === item.link ? Navbar.activeLink : ""}`}
                        onClick={() => handleLinkClick()}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
