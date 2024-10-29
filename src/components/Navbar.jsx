import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="top-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container d-flex justify-content-center">
                    <h2><a className="navbar-brand" href="#"><img src={Logo} alt="Recipe Hunt" /><span>Recipe Hunt</span></a></h2>
                </div>
            </nav>
        </div>
    )
}

export default Navbar