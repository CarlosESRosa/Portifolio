import React, { Component } from 'react'
import profilePicture from '../img/profile-picture.png'

export default class Profile extends Component {
  render() {
    return (
      <div className='container profile-box' id='profile-box'>
        <img src={profilePicture} alt='profile'/>
        <div className='protile-text'>
          <h1>Carlos Eduardo Soares Rosa</h1>
          <h2>Front end Developer</h2>
          <p>Por ter sido cercado de tecnologia na infância e adolescência me encontrei na área de TI, estava estudando na Universidade Federal de Itajubá (UNIFEI), porém, optei por abandonar minha vaga e ingressar na Trybe, acreditando ser a melhor opção visando futuramente me tornar um Desenvolvedor Full Stack. 
          Atualmente estudo Desenvolvimento de Software na Trybe. Terminei meus estudos sobre Front-end onde utilizei principalmente React, Redux e Bootstrap, no momento estou estudando Back-end onde estou aprendendo Docker, Node, express, entre outras ferramentas.</p>
          <div className='tools-box'>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-bootstrap"></i>
            <i class="fa-brands fa-node-js"></i>
            <i class="fa-brands fa-docker"></i>
            <i class="fa-brands fa-git-alt"></i>
          </div>
        </div>
      </div>
    )
  }
}
