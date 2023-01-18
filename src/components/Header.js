// .my-header navimport React, { Component } from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md ">
        <div className="container">
          <a className="navbar-brand" href="#" id="header-icon">
            Resume
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-1 fs-4" href="home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-1 fs-4" href="#profile-box">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link mx-1 fs-4" href="#projects-box">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
