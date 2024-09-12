import AboutSlices from "../components/AboutSlices"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import SubHeader from "../components/SubHeader"
import Successstories from "../components/Successstories"
import Team from "../components/Team"
import TopNav from "../components/TopNav"

function UserAbout(){
    return(
        <>
<TopNav/>
<SubHeader pagetitle="About"/>
  <AboutSlices/>
<Successstories/>
  <Team/>
  <Newsletter/>
<Footer/>

        </>
    )
}
export default UserAbout