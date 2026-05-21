"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="header_section">
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-dark custom_nav-container">

          {/* Logo */}
          <Link className="navbar-brand" href="/">
            <span>Feane</span>
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Menu */}
         <div className="navbar-collapse show" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" href="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>

            </ul>

            {/* User Option */}
            <div className="user_option">

              
             

              <form className="form-inline">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>

              <a
  href="https://wa.me/6289531721375"
  target="_blank"
  rel="noopener noreferrer"
  className="order_online"
>
  <i className="fab fa-whatsapp me-2" aria-hidden="true"></i>
  
</a>

            </div>

          </div>

        </nav>

      </div>
    </header>
  );
}