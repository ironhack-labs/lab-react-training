import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                  <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                      <a class="navbar-item" href="https://bulma.io">
                        <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react-logo.png" width="112" height="28"/>
                      </a>
                  
                      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                      </a>
                    </div>
                  
                    <div id="navbarBasicExample" class="navbar-menu">
                      <div class="navbar-start">
                        <a class="navbar-item">
                          Home
                        </a>
                      </div>
                    </div>
                  </nav>
            </div>
          )
    }
}
   

export default NavBar