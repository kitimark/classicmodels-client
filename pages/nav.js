import React from 'react'

const Nav = () => (
    <nav class="navbar is-black">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../index.html">
                    Bulma Admin
        </a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="admin.html">
                        Home
          </a>
                    <a class="navbar-item" href="admin.html">
                        Orders
          </a>
                    <a class="navbar-item" href="admin.html">
                        Payments
          </a>
                    <a class="navbar-item" href="admin.html">
                        Exceptions
          </a>
                </div>

            </div>
        </div>
    </nav>

)

export default Nav