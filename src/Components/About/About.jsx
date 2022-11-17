import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
        <>
        <div className='about py-5' id='about'>
          <div className="container">
            <div className='about-head'>
                <h1 className=' fw-bolder'>ABOUT</h1>
                <div className='about-brd'>
                  <div className='m-auto w-100 d-flex justifiy-content-center align-items-center text-center py-2'>
                    <div className='about-line text-center'></div>
                    <i className="fa-solid fa-star fs-3"></i>
                    <div className='about-line m-3'></div>
                  </div>
                </div>
            </div>
            <div className="about-data">
                <div className="row text-center">
                    <div className="col-lg-4 ms-auto">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
