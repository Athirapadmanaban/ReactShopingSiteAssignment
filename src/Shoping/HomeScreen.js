import './HomeScreen.css'
import Login from './login'
import Banner from './Banner'
function HomeScreen() {
    return(
        <div className="homeBody ">
            <div className="row">
            <div className="col-6 pr-0 section-banner">
               <Banner/>
            </div>
            <div className="col-6 section-login">
             <Login/>
            </div>
            </div>
        </div>
    )

}
export default HomeScreen