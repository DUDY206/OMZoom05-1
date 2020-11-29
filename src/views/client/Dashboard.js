import React, { useState } from "react";
import ApiService from "services/ApiServices";
const Dashboard = () => {
  const goToVideo = async (event) => {
    event.preventDefault();
    try {
      const res = await ApiService.get("api/video");
      console.log("res", res);
      window.location = `/video/${res.data.idRoom}`;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="main-wrapper">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center templatemo-logo margin-top-20">
        <h1 className="templatemo-site-title">
          <a href="#">OM Zoom</a>
        </h1>
        <h3 className="templatemo-site-title">
          by{" "}
          <a href="#">
            <span className="blue">Nhóm</span>
            <span className="green"> Bí thư</span>
          </a>
        </h3>
      </div>

      <div className="image-section">
        <div className="image-container">
          <img
            src="img/zoom-bg-1.jpg"
            id="menu-img"
            className="main-img inactive"
            alt="Zoom HTML5 Template by templatemo.com"
          />
          <img
            src="img/zoom-bg-2.jpg"
            id="products-img"
            className="inactive"
            alt="Product"
          />
          <img
            src="img/zoom-bg-3.jpg"
            id="services-img"
            className="inactive"
            alt="Services"
          />
          <img
            src="img/zoom-bg-4.jpg"
            id="about-img"
            className="inactive"
            alt="About"
          />
          <img
            src="img/zoom-bg-5.jpg"
            id="contact-img"
            className="inactive"
            alt="Contact"
          />
        </div>
      </div>

      <div className="container">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 templatemo-content-wrapper">
          <div className="templatemo-content">
            <section id="menu-section" className="active">
              <div className="row">
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 margin-bottom-20">
                  <a
                    onClick={(event) => {
                      goToVideo(event);
                    }}
                    className="change-section"
                  >
                    <div className="black-bg btn-menu">
                      <i className="fa fa-cubes"></i>
                      <h2>Video</h2>
                    </div>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 margin-bottom-20">
                  <a href="#services" className="change-section">
                    <div className="black-bg btn-menu">
                      <i className="fa fa-laptop"></i>
                      <h2>Chat</h2>
                    </div>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 margin-bottom-20">
                  <a href="#about" className="change-section">
                    <div className="black-bg btn-menu">
                      <i className="fa fa-users"></i>
                      <h2>About</h2>
                    </div>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3 margin-bottom-20">
                  <a href="#contact" className="change-section">
                    <div className="black-bg btn-menu">
                      <i className="fa fa-envelope"></i>
                      <h2>Dashboad</h2>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer">
          <p className="footer-text">Copyright &copy; 2084 Your Company Name</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
