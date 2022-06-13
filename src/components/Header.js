import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='my-header container'>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div>
            <a class="navbar-brand" href="#" id='header-icon'>Portifólio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse icons-header" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#profile-box">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects-box">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
