import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home py-5" id="home">
        <div className="container">
          <div>
            <img src="../images/avataaars.svg" alt="avatar" />
            <h1 className="fw-bolder">START REACT</h1>
            <div className="home-brd">
              <div className="m-auto w-100 d-flex justifiy-content-center align-items-center text-center py-3">
                <div className="home-line text-center"></div>
                <i className="fa-solid fa-star fs-2"></i>
                <div className="home-line"></div>
              </div>
            </div>

            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
