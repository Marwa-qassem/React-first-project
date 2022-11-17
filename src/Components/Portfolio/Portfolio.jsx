import React, { Component } from 'react'
import './Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
    <>
        <div className='portfolio py-5' id='portfolio'>
            <div className="container">
                <div className='portfolio-head'>
                    <h1 className=' fw-bolder'>PORTFOLIO</h1>
                    <div className='portfolio-brd'>
                        <div className='m-auto w-100 d-flex justifiy-content-center align-items-center text-center py-2'>
                            <div className='portfolio-line text-center'></div>
                            <i className="fa-solid fa-star fs-3"></i>
                            <div className='portfolio-line m-3'></div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-data py-4">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className='portfolio-img-data'>
                                <div className="portfolio-overlay w-100 mx-auto rounded">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src="../images/cabin.png" className='w-100 img-fluid rounded' alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='portfolio-img-data'>
                                <div className="portfolio-overlay w-100 mx-auto rounded">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src="../images/cake.png" className='w-100 img-fluid rounded' alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='portfolio-img-data'>
                                <div className="portfolio-overlay w-100 mx-auto rounded">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src="../images/circus.png" className='w-100 img-fluid rounded' alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='portfolio-img-data'>
                                <div className="portfolio-overlay w-100 mx-auto rounded">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src="../images/game.png" className='w-100 img-fluid rounded' alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='portfolio-img-data'>
                                <div className="portfolio-overlay w-100 mx-auto rounded">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src="../images/safe.png" className='w-100 img-fluid rounded' alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='portfolio-img-data'>
                                <div className="portfolio-overlay w-100 mx-auto rounded">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <img src="../images/submarine.png" className='w-100 img-fluid rounded' alt=""/>
                            </div>
                        </div>
                        
                     
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
