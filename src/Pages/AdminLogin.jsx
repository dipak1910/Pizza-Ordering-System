import AdminForm from "../components/AdminForm"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TopNav from "../components/TopNav"

function AdminLogin(){
    return(
        <>
 <Navbar/>
  <div className="aside-overlay aside-trigger" />
  {/* Header Start */}
 <TopNav/>
  {/* Header End */}
  {/* Login Form Start */}
  <div className="section">
    <div className="imgs-wrapper">
      <img src="assets/img/veg/11.png" alt="veg" className="d-none d-lg-block" />
      <img src="assets/img/prods/3.png" alt="veg" className="d-none d-lg-block" />
    </div>
    <div className="container">
      <div className="auth-wrapper">
        <div className="auth-description bg-cover bg-center dark-overlay dark-overlay-2" style={{backgroundImage: 'url("/slices/assets/img/auth.jpg")'}}>
          <div className="auth-description-inner">
            <i className="flaticon-chili" />
            <h2>Welcome Back!</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <AdminForm/>
      </div>
    </div>
  </div>
  {/* Login Form End */}
  {/* Footer Start */}
  <Footer/>
  {/* Footer End */}


        </>
    )
}
export default AdminLogin