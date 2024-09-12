import { Link } from "react-router-dom"

function Team(){
    return(
        <>
        
  {/* Team members Start */}
  <div className="section section-padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30">
          <div className="section-title-wrap">
            <h5 className="custom-primary">Our Backbone</h5>
            <h2 className="title">Meet The Team</h2>
            <p className="subtitle">
                At Slices Pizzeria , our team is the heart and soul of our operation , bringing a blend of passion , creativity , and dedication to crafting the perfect pizza experience.
            </p>
            <p className="subtitle">
            At Slices Pizzeria , our team is the heart and soul of our operation , bringing a blend of passion , creativity , and dedication to crafting the perfect pizza experience.
            </p>
          </div>
          <Link to="/menu" className="btn-custom">View All</Link>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="ct-team-item">
                <div className="ct-team-thumb">
                  <img src="/slices/assets/img/team/1.jpg" alt="team" />
                </div>
                <div className="ct-team-desc">
                  <h5>Miranda Blue</h5>
                  <span>Executive Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="ct-team-item">
                <div className="ct-team-thumb">
                  <img src="/slices/assets/img/team/2.jpg" alt="team" />
                </div>
                <div className="ct-team-desc">
                  <h5>Jonathan Flock</h5>
                  <span>Assistant Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="ct-team-item">
                <div className="ct-team-thumb">
                  <img src="/slices/assets/img/team/3.jpg" alt="team" />
                </div>
                <div className="ct-team-desc">
                  <h5>Mich Jean</h5>
                  <span>Assistant Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="ct-team-item">
                <div className="ct-team-thumb">
                  <img src="/slices/assets/img/team/4.jpg" alt="team" />
                </div>
                <div className="ct-team-desc">
                  <h5>Andrew Lumber</h5>
                  <span>Assistant Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team members End */}
        </>
    )
}
export default Team