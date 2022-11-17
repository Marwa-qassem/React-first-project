import React, { Component } from 'react'

export default class Modale extends Component {
  render() {
    return (
    <>
        <div>
            <div className="close">
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className='modal-head'>
                    <h1 className=' fw-bolder'>CIRCUS TENT</h1>
                    <div className='modal-brd'>
                        <div className='m-auto w-100 d-flex justifiy-content-center align-items-center text-center py-2'>
                            <div className='modal-line text-center'></div>
                                <i className="fa-solid fa-star fs-3"></i>
                            <div className='modal-line m-3'></div>
                        </div>
                    </div>
                </div>
            <div>
                <img src="../images/submarine.png" alt=""/>

            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.</p>
            </div>
            <div>
                <button className='btn btn-primary'>
                    <i className="fa-solid fa-xmark"></i>
                    Close Window
                </button>
            </div>
        </div>  
    </>
    )
  }
}
