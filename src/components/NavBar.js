import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar =()=>{
    return(
            <nav class="navbar bg-light">
                <div class="container-fluid">
                <a class="navbar-brand">Wheather APP - Herolo </a>
                <form class="d-flex" role="search">
                    <button class="btn btn-outline-secondary me-4" type="submit">HOME</button>
                    <button class="btn btn-outline-secondary " type="submit">FAVORITES</button>
                </form>
                </div>
            </nav>
        )
}

export default Navbar