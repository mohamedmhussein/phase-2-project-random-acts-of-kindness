
import { Link } from "react-router-dom";
function Navbar() {

    //This is a basic navbar component. It took me sometime here to learn styling with Bulma CSS framework
    const navItemClasses = "navbar-item has-text-weight-semibold is-tab has-text-grey-dark"

    return (
        <nav className="navbar is-info has-text-grey-dark has-background-danger-light">
            <div className="navbar-brand ">
                <a className="navbar-item" href="#" >
                    <img src="/assets/logo-trans.png" style={{ maxHeight: "2.3em" }} />
                </a>
            </div>
            <div className="navbar-menu navbar-end mr-3 ">
                <Link to="/" exact="true" ><i className={navItemClasses}>Home</i></Link>
                <Link to="/MyKindness" exact="true" ><i className={navItemClasses}>My Kindness</i></Link>
                <Link to="/NewKindness" exact="true" ><i className={navItemClasses}>New Kindness</i></Link>
            </div>
        </nav>
    )
}

export default Navbar
