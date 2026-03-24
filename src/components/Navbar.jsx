import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    let navigator = useNavigate()
    const handlelogout = () => {
        localStorage.clear();
        Navigate("/signin")

    }
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">KEPHRICS COMPANY</Link>
            <button className="navbar-toggler" data-bs-toggle="colleapse" data-bs-target="#navbarcollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarcollapse">
                <div className="navbar-nav">

                    {/* Show ONLY when user is logged in */}
                    {user && (
                        <Link className="nav-link" to="/">
                            Home
                        </Link>


                    )}
                    {/* Show Add Product ONLY if user is damian */}
                    {user && (
                        <Link className="nav-link" to="/addproduct">
                            Add Product
                        </Link>
                    )}

                    {/* Show ONLY when user is NOT logged in */}
                    {!user && (
                        <>
                            <Link className="nav-link" to="/signin">
                                Sign In
                            </Link>
                            <Link className="nav-link" to="/signup">
                                Sign Up
                            </Link>
                        </>
                    )}

                </div>

                {user ?
                    (
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="#">{user.username}</Link>
                            <Link className="btn nav-link" onClick={handlelogout}>logout</Link>
                        </div>
                    ) : (
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="/signin">signin</Link>
                            <Link className="nav-link" to="/signup">logout</Link>
                        </div>
                    )}
            </div>
        </nav>
    );
}

export default Navbar;