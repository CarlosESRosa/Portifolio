import React, { Component } from 'react'
import profilePicture from '../img/profile-picture.png'

export default class Profile extends Component {
  render() {
    return (
      <div className='container profile-box' id='profile-box'>
        <div className='row'>
          <div className='col-lg-5 col-xl-6 d-flex justify-content-center mb-3'>
            <img src={profilePicture} alt='profile'/>
          </div>
          <div className='col-lg-7 col-xl-6 d-flex justify-content-center'>
            <div className='protile-text'>
              <h1>Carlos Eduardo Soares Rosa</h1>
              <h3>Full Stack Developer</h3>
              <p>Por ter sido cercado de tecnologia na infância e adolescência me encontrei na área de TI, estava estudando na Universidade Federal de Itajubá (UNIFEI), porém, optei por abandonar minha vaga e ingressar na Trybe, acreditando ser a melhor opção visando futuramente me tornar um Desenvolvedor Full Stack. 
              Atualmente estudo Desenvolvimento de Software na Trybe. Terminei meus estudos sobre Front-end onde utilizei principalmente React, Redux e Bootstrap, no momento estou estudando Back-end onde estou aprendendo Docker, Node, express, entre outras ferramentas.</p>
              <div className='tools-box'>
                <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img align="center" alt="Redux" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <img align="center" alt="Bootstrap" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
                <img align="center" alt="Html" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img align="center" alt="Css" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <img align="center" alt="Javascript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img align="center" alt="Typescript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <img align="center" alt="Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
              </div>
              <div className='tools-box'>
                <img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <img align="center" alt="Express" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <img align="center" alt="Sequelize" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
                <img align="center" alt="Javascript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img align="center" alt="Typescript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <img align="center" alt="Docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                <img align="center" alt="MySQl" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <img align="center" alt="MongoDb" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
