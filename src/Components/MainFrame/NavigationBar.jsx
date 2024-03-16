import Navbar from "./css/NavigationBar.module.css";

function Navigation(){
  const menuItems = [
    { label: "Feed", link: "#" },
    { label: "Community", link: "#" },
    { label: "Internships", link: "#" },
    { label: "Resources", link: "#" },
  ];

  return (
    <>
      <div className={Navbar.sidebarContainer}>
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
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/24c5769d411d99c609342abeb8d3126ee7422b269c17a87765aec28994a9fc7e?apiKey=4aa0ae1a0e814437847f3f8ff6c4ef38&"
              className={Navbar.menuIcon}
              alt=""
            />
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
