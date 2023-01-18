import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container my-footer">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/carlos_rosaa1/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlos-e-s-rosa/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CarlosESRosa"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
