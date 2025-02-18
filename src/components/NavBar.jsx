import Routes from "./Routes";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="contact">
        <p>808-430-4156</p>
      </div>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="nav-btn">
        <Routes />
      </div>
      {/* <div className="route">
              You are here: Home
          </div> */}
    </div>
  );
};

export default NavBar;
