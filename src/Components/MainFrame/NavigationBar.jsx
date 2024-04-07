import { useState, useEffect } from "react";
import Navbar from "./css/NavigationBar.module.css";

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
    { label: "Feed", link: "/Feed", icon: "https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad4c8b8980ceff10ac3f2_XKmiKNuXjaUk.png" },
    { label: "Community", link: "/Community", icon: "https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad4f542abee9b1e00afd3_42uLHHsAiBxH.png" },
    { label: "Create", link: "/Feed", icon: "https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/6608681d20cc2d7da71c4d00_plus-circle-1441-svgrepo-com%20(1).svg" },
    { label: "Internships", link: "/Internships", icon: "https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad54541e9f11aa27c9fd8_rRJmrcqDtxC0.png" },
    { label: "Resources", link: "/Resources", icon: "https://uploads-ssl.webflow.com/65e4aa9d7c506b88d60a346e/65fad589c149389b362e6b9c_bIeE9Fhcd2Lv.png" },
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
              Logo Name
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