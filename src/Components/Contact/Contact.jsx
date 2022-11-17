import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
    <>
      <div className='contact py-5' id='contact'>
        <div className="container">
          <div className='contact-head'>
              <h1 className=' fw-bolder'>CONTACT ME</h1>
              <div className='contact-brd'>
                  <div className='m-auto w-100 d-flex justifiy-content-center align-items-center text-center py-2'>
                      <div className='contact-line text-center'></div>
                      <i className="fa-solid fa-star fs-3"></i>
                      <div className='contact-line m-3'></div>
                  </div>
              </div>
          </div>

          <div className="contact-data row g-3 my-5">
            <div className="col-lg-8 mx-auto">
              <form>
                <div className="form-group">
                  <div className="contact-input pt-0 pb-2">
                    <label htmlFor="inputEmail" className="form-label">Name</label>
                    <input type="text" className="form-control border-0 py-0" id="inputEmail"/>
                  </div>
                  <div className="contact-input pb-2">
                    <label htmlFor="inputPassword" className="form-label">Email Address</label>
                    <input type="email" className="form-control border-0 py-0" id="inputPassword"/>
                  </div>
                  <div className="contact-input pb-2">
                    <label htmlFor="phoneInput" className="form-label ">Phone Number</label>
                    <input type="number" className="form-control border-0 py-0" id="phoneInput"/>
                  </div>
                  <div className="contact-input pb-2">
                    <label htmlFor="messageinput" className="form-label">Message</label>
                    <textarea type="text" className="form-control border-0 py-0" rows={5} id="messageinput"/>
                  </div>
                  <div className="contact-btn pb-2">
                    <button type="submit" className="btn btn-xl btn-primary px-4 py-3">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}
