import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
    <>
    <div className='footer w-100  '>
        <div className='footer-data h-50 text-white pt-4'>
            <div className="container p-5 text-center">
                <div className="row">
                    <div className="col-md-4 ps-0">
                        <h2 className='fs-3'>LOCATION</h2>
                        <p className='mb-0 pt-3 fs-5'>2215 John Daniel Drive</p>
                        <p className='mb-0 fs-5'> Clark, MO 65243 </p>
                    </div>
                    <div className="col-md-4">
                        <h2 className='fs-4'>AROUND THE WEB</h2>

                        <div className='footer-icon py-3 d-flex align-items-center  '>
                            <ul className="social-icon d-flex pe-4 pt-2 list-group-horizontal">
                                <div className="social-ico-circle me-2">
                                    <li className="list-group-item ">
                                        <i className="fa-brands fa-facebook-f py-3"></i>
                                    </li>
                                </div>
                                <div className="social-ico-circle me-2">
                                    <li className="list-group-item">
                                        <i className="fa-brands fa-twitter py-3"></i>
                                    </li>
                                </div>
                                <div className="social-ico-circle me-2">
                                    <li className="list-group-item">
                                        <i className="fa-brands fa-linkedin-in py-3"></i>
                                    </li>
                                </div>
                                <div className="social-ico-circle me-2">
                                    <li className="list-group-item">
                                        <i className="fa-brands fa-dribbble py-3"></i>
                                    </li>
                                </div>
                            </ul> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 className='fs-3'>ABOUT FREELANCER</h2>
                        <p className='fs-5 pe-3 pt-3'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer-copyright text-center py-4'>
            <div className="container">
                <p className='text-white mb-0'>Copyright © Your Website 2021</p>
            </div>
        </div>
    </div>
    </>
    )
  }
}
