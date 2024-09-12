import { NavLink, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "../store/cartStore";
import { auth } from "../firebase/firebaseConfig";
function TopNav() {
  let cart = useCartStore((state)=>state.cart)
  let isloggedin = useUserStore((state)=>state.isloggedin)
  let user = useUserStore((state)=>state.user)

  let logout = useUserStore((state)=>state.logout)
    let navigate = useNavigate()

    function signout(){
      auth.signOut()
      logout()
    }
  return (
    <>
<header className="main-header header-1">
  <div className="top-header">
    <div className="container">
      <div className="top-header-inner">
        <div className="top-header-contacts">
          <ul className="top-header-nav">
            <li> <a className="p-0" href="tel:+123456789"><i className="fas fa-phone mr-2" /> +123 456 789</a> </li>
          </ul>
        </div>
        <ul className="top-header-nav header-cta">

          <li> { isloggedin ? <NavLink to="/adminlogin" >Welcome,{user.displayName}</NavLink>  :   <NavLink to="/adminlogin">Admin Login</NavLink> }  </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container">
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/"> <img src="/slices/assets/img/logo.png" alt="logo" /> </NavLink>
      <ul className="navbar-nav">
        <li className="menu-item menu-item-has-children">
          <NavLink to="/">Home </NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="menu-item menu-item-has-children ">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="menu-item menu-item-has-children">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        { isloggedin ? <li className="menu-item">
           <NavLink onClick={signout} to="/login">Logout</NavLink>
        </li>: (
          <>
          <li className="menu-item menu-item-has-children">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="menu-item ">
            <NavLink to="/register">Register</NavLink>
          </li>
          </>
        )}
      </ul>
      <div className="header-controls">
        <ul className="header-controls-inner">
          <li onClick={()=>{
              navigate("/cart")
          }} className="cart-dropdown-wrapper cart-trigger">
            <span className="cart-item-count">{cart.length}</span>
            <i className="flaticon-shopping-bag" />
          </li>
          <li className="search-dropdown-wrapper search-trigger">
            <i className="flaticon-search" />
          </li>
        </ul>
        {/* Toggler */}
        <div className="aside-toggler aside-trigger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  </div>
</header>
{/* Header End */}

    </>
  );
}
export default TopNav;
