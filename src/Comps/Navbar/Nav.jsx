import React from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <nav id='NavbarH' className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand mx-4 fs-bold text-white " to="/">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                   { auth ? <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active text-white"  to="/">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white"  to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/add">Add Product</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active text-white" onClick={logout} to='/signup'>Logout &nbsp;&nbsp; <b className='LoginName'>{JSON.parse(auth).name}</b></Link>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active text-white"  to="/signup">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/login">Login</Link>
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Nav;