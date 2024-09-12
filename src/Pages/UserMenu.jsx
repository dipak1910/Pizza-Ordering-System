import Footer from "../components/Footer"
import Menuitem from "../components/Menuitem"
import Navbar from "../components/Navbar"
import SubHeader from "../components/SubHeader"
import TopNav from "../components/TopNav"
import { menu } from "../data/db"

function UserMenu(){
    return(
        <>
 <Navbar/>
  <div className="aside-overlay aside-trigger" />
  {/* Header Start */}
<TopNav/>
  {/* Header End */}
  <SubHeader pagetitle="Menu"/>
  <div className="section section-padding menu-v2">
    <div className="container">
      <div className="row">
        {menu.map((pizza)=><Menuitem key={pizza.id}{...pizza}/>)}     
      </div>
    </div>
  </div>
<Footer/>
        </>
    )
}
export default UserMenu