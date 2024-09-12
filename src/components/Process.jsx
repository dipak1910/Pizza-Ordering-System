import { Link } from "react-router-dom"

function Process(){
    return(
        <>
  <div className="section">
    <div className="container">
      <div className="section-title-wrap section-header text-center">
        <h5 className="custom-primary">How We Do It</h5>
        <h2 className="title">We Deliver Your Food In 4 Steps</h2>
        <p className="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>
      <div className="row infographics-2">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="ct-infographic-item">
            <i className="flaticon-online-booking" />
            <h4>Order</h4>
            <p>There are many variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="ct-infographic-item">
            <i className="flaticon-calories" />
            <h4>Cook</h4>
            <p>There are many variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="ct-infographic-item">
            <i className="flaticon-delivery-man" />
            <h4>Deliver</h4>
            <p>There are many variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="ct-infographic-item">
            <i className="flaticon-food-tray" />
            <h4>Enjoy</h4>
            <p>There are many variations of passages of Lorem Ipsum available</p>
          </div>
        </div>
      </div>
      <div className="section-btn">
        <Link to="/menu" className="btn-custom">Order Online</Link>
      </div>
    </div>
  </div>
        </>
    )
}
export default Process