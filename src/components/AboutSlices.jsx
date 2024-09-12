import { Link } from "react-router-dom"

function AboutSlices(){
    return(
        <>
        {/* About us start */}
  <div className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
          <img src="slices/assets/img/auth.jpg" alt="img" />
          <div className="ct-dots" />
        </div>
        <div className="col-lg-6">
          <div className="section-title-wrap mr-lg-30">
            <h5 className="custom-primary">About Us</h5>
            <h2 className="title">Serving Pizzas By The Slice Since 2020</h2>
            <p className="subtitle">
              Welcome to the Slice Pizzeria , where every slice is a piece of perfection.
            </p>
            <p className="subtitle">
            Our Pizzeria combines the freshest ingrediants , traditional recipes and a modern twist to offer a unique and delightful dining experience.
            </p>
            <div className="signature">
              <img src="slices/assets/img/signature.png" alt="signature" />
            </div>
            <Link to="/menu" className="btn-custom">Check our Menu</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About us End */}
        </>
    )
}
export default AboutSlices