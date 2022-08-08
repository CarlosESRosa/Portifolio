import React, { Component } from 'react'
import trybetunes from '../img/trybetunes3.png'
import rosaShopping from '../img/rosaShopping.png'
import blogsApi from '../img/blogsApi.png'

export default class Projects extends Component {
  render() {
    return (
      <div className='container' id='projects-box'>
        <h1 className='section-title'>Projects</h1>
        <div class="row">
          <div className="col-12 mb-5 col-md-6 col-xl-4">
            <div className='my-project'>
              <h4>Trybetunes</h4>
              <a href="https://carlosesrosa.github.io/Trybetunes/" target="_blank" rel="noreferrer"><img src={trybetunes}  alt='trybetunes project'/></a>
            </div>
          </div>
          <div className="col-12 mb-5 col-md-6 col-xl-4">
            <div className='my-project'>
              <h4>Rosashopping</h4>
              <a href='https://carlosesrosa.github.io/Rosa-shopping/' target="_blank" rel="noreferrer"><img src={rosaShopping}  alt='rosa shopping project'/></a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className='my-project'>
              <h4>Blogs Api</h4>
              <a href='https://github.com/CarlosESRosa/Blogs-api' target="_blank" rel="noreferrer"> <img src={blogsApi}  alt='Blogs api project'/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
