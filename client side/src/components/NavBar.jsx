import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';


const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#raiNavbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>

            <div class="collapse navbar-collapse" id="raiNavbar">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#" >Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-toggle="modal" data-target="#LoginModal">Login</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;