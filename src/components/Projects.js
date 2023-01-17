import React, { Component } from "react";
import trybetunes from "../img/trybetunes3.png";
import rosaShopping from "../img/rosaShopping.png";
import blogsApi from "../img/blogsApi.png";
import carteiraVirtual from "../img/carteiraVirtual.png";
import pokedex from "../img/pokedex.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="container" id="projects-box">
        <h1 className="section-title">Projects</h1>
        <div class="row">
          <div className="container-projects">
            <div className="display-helper">
              <div className="my-project">
                <h4>Carteira Virtual</h4>
                <a
                  href="https://github.com/CarlosESRosa/Carteira-Virtual"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={carteiraVirtual}
                    alt="Carteira virtual project"
                    className="project-img"
                  />
                  <div className="project-stacks">
                    <img
                      align="center"
                      alt="React"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      align="center"
                      alt="Typescript"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    />
                    <img
                      align="center"
                      alt="Node"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    />
                    <img
                      align="center"
                      alt="Docker"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    />
                  </div>
                </a>
              </div>
              <div className="my-project">
                <h4>Pokedex</h4>
                <a
                  href="https://github.com/CarlosESRosa/Pokedex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={pokedex}
                    alt="pokedex project"
                    className="project-img"
                  />
                  <div className="project-stacks">
                    <img
                      align="center"
                      alt="React"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      align="center"
                      alt="Javascript"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                    <img
                      align="center"
                      alt="Node"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    />
                    <img
                      align="center"
                      alt="Docker"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    />
                  </div>
                </a>
              </div>
              <div className="my-project">
                <h4>Trybetunes</h4>
                <a
                  href="https://github.com/CarlosESRosa/Trybetunes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={trybetunes}
                    alt="trybetunes project"
                    className="project-img"
                  />
                  <div className="project-stacks">
                    <img
                      align="center"
                      alt="React"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      align="center"
                      alt="Javascript"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                  </div>
                </a>
              </div>

              <div className="my-project">
                <h4>Blogs Api</h4>
                <a
                  href="https://github.com/CarlosESRosa/Blogs-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src={blogsApi}
                    alt="Blogs api project"
                    className="project-img"
                  />
                  <div className="project-stacks">
                    <img
                      align="center"
                      alt="React"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      align="center"
                      alt="Javascript"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                  </div>
                </a>
              </div>
              <div className="my-project">
                <h4>Blogs Api</h4>
                <a
                  href="https://github.com/CarlosESRosa/Blogs-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src={blogsApi}
                    alt="Blogs api project"
                    className="project-img"
                  />
                  <div className="project-stacks">
                    <img
                      align="center"
                      alt="React"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      align="center"
                      alt="Javascript"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                  </div>
                </a>
              </div>
              <div className="my-project">
                <h4>Blogs Api</h4>
                <a
                  href="https://github.com/CarlosESRosa/Blogs-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src={blogsApi}
                    alt="Blogs api project"
                    className="project-img"
                  />
                  <div className="project-stacks">
                    <img
                      align="center"
                      alt="React"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      align="center"
                      alt="Javascript"
                      height="30"
                      width="40"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
