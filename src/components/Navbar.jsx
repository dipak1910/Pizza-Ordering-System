import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
  <aside className="main-aside">
    <NavLink to="/" className="navbar-brand" > <img src="/slices/assets/img/logo.png" alt="logo" /> </NavLink>
    <div className="aside-scroll">
      <ul>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/">Home </NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  </aside>
    </>
  );
}

export default Navbar;
