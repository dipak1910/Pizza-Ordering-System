import { Link } from "react-router-dom"

function Offers(){
    return(
        <>
  <div className="section light-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30">
          <img src="/slices/assets/img/misc/cta2.png" alt="img" />
        </div>
        <div className="col-lg-6">
          <div className="section-title-wrap mr-lg-30">
            <h5 className="custom-primary">Great Offer</h5>
            <h2 className="title">Buy 1 Get 1 Free</h2>
            <p className="subtitle">
             Enjoy Your Exclusive Buy 1 and Get one offer today!.. 
            </p>
            <p className="subtitle">
              It's Perfect Opportunity to indulge in that extra item yov've had your eye on or surprise somone special 
            </p>
            <Link to="/menu" className="btn-custom">Order Now</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Offers