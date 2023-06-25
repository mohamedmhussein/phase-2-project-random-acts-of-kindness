
import { Link } from "react-router-dom";
function Navbar() {
    const navItemClasses = "navbar-item has-text-weight-semibold is-tab has-text-grey-dark"
    return (
        <nav className="navbar is-info has-text-grey-dark has-background-danger-light">
            <div className="navbar-brand ">
                <a className="navbar-item" href="#" >
                    <img src="/assets/logo-trans.png" style={{ maxHeight: "4.5vh" }} />
                </a>
            </div>
            <div className="navbar-menu navbar-end mr-3 ">
                <Link to="/" exact="true" ><a className={navItemClasses}>Home</a></Link>
                <Link to="/MyKindness" ><a className={navItemClasses}>My Kindness</a></Link>
                <Link to="/NewKindness" ><a className={navItemClasses}>New Kindness</a></Link>
                <Link to="/" exact="true"><a className={navItemClasses}>Sign in</a></Link>
            </div>
        </nav>
    )
}

export default Navbar
