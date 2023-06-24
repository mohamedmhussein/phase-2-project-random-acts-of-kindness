
function Navbar() {
    const navItemClasses = "navbar-item has-text-weight-semibold is-tab has-text-grey-dark"
    return (
        <nav className="navbar is-info has-text-grey-dark has-background-danger-light">
            <div className="navbar-brand ">
                <a className="navbar-item" href="#" >
                    <img src="/assets/logo-trans.png" style={{ maxHeight: "7vh" }} />
                </a>
            </div>
            <div className="navbar-menu navbar-end mr-3 ">
                <a className={navItemClasses}>Home</a>
                <a className={navItemClasses}>My Kindness</a>
                <a className={navItemClasses}>New Kindness</a>
                <a className={navItemClasses}>Sign in</a>
            </div>
        </nav>
    )
}

export default Navbar
