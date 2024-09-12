import { Link } from "react-router-dom"

function Banner(){
    return(
        <>
  <div className="banner banner-2">
    <div className="banner-slider-2">
      <div className="banner-item">
        <div className="banner-bg bg-cover" style={{backgroundImage: 'url("/slices/assets/img/banner/1.jpg")'}} />
        <div className="banner-inner">
          <div className="banner-text">
            <h1 className="title">Italian Pizza Never Got Any Better</h1>
            <h4>It is the cheese that lures us into eating</h4>
            <p className="subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <Link to="/menu" className="btn-custom primary">View Menu</Link>
        </div>
        <img src="/slices/assets/img/veg/12.png" alt="bg" />
      </div>
      <div className="banner-item">
        <div className="banner-bg bg-cover" style={{backgroundImage: 'url("/slices/assets/img/banner/2.jpg")'}} />
        <div className="banner-inner">
          <div className="banner-text">
            <h1 className="title">Celebrating 100 Years of Cheesy Pizza</h1>
            <h4>Join our grand opening tonight for free pizza</h4>
            <p className="subtitle">
              Lorem Ip
              sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <Link to="/contact" className="btn-custom primary">Join Now</Link>
        </div>
        <img src="/slices/assets/img/veg/12.png" alt="bg" />
      </div>
    </div>
  </div>
        </>
    )
}
export default Banner