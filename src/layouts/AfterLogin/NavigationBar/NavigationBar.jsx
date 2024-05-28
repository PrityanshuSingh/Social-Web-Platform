import { useState, useEffect } from "react";
import Navbar from "./styles/NavigationBar.module.css";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const menuItems = [
    { label: "Feed", link: "/feed", icon: "assets/explore.svg" },
    { label: "Community", link: "/community", icon: "assets/community.svg" },
    { label: "Create", link: "/create", icon: "assets/create.svg" },
    { label: "Profile", link: "/profile", icon: "assets/internship.svg" },
  ];

  return (
    <>
      {isMobile && (
        <div className={Navbar.bottomNavbar}>
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className={Navbar.bottomNavbarIcon}>
              <img src={item.icon} alt={item.label} />
            </a>
          ))}
        </div>
      )}

      {!isMobile && (
        <div className={`${Navbar.sidebarContainer} ${isOpen ? Navbar.open : ""}`}>
          <div className={Navbar.sidebarContent}>
            <h2 className={Navbar.logo}>
              Logo
            </h2>
            <div className={Navbar.profileImageContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b60af29ddd87baacbef4b78cce2534469080341cd167596ba728c1ee2e62c92?apiKey=4aa0ae1a0e814437847f3f8ff6c4ef38&"
                className={Navbar.profileImage}
                alt="User profile"
              />
            </div>
            <h2 className={Navbar.greeting}>
              Username
            </h2>
            <nav className={Navbar.sidebarMenu}>
              <div className={Navbar.menuIcon}>
                {menuItems.map((item, index) => (
                  <a key={index} href={item.link}>
                    <img
                      loading="lazy"
                      src={item.icon}
                      className={Navbar.menuIcon}
                      alt={item.label}
                    />
                  </a>
                ))}
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
      )}
    </>
  );
}

export default Navigation;