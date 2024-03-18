import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer" style={{ cursor: "pointer" }}>
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4 style={{ cursor: "pointer" }}>Ajay Giri Goswmai</h4>
            <p>© {year} Ajay Giri Goswami All rights reserved</p>
            <p className="d-flextext-center text-decoration-none">
              <a href="https://github.com/AjayGiriGoswami" target="blank" style={{ color: "white" }}>
                <i class="fa-brands fa-github mx-2"></i>
              </a>
              <a href="https://www.linkedin.com/in/ajay-giri-goswami-564482227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" style={{ color: "white" }}>
                <i class="fa-brands fa-linkedin mx-2"></i>
              </a>
              <a href="https://wa.me/qr/T2GA2R3PTVXPF1" target="blank" style={{ color: "white" }}>
                <i class="fa-brands fa-whatsapp mx-2"></i>
              </a>
              <a
                href="https://www.instagram.com/agoswami69?igsh=MWxlZGJpcjN6dWRnNA=="
                target="blank"
                style={{ color: "white" }}
              >
                <i className="fa-brands fa-instagram mx-2"></i>
              </a>
            </p>
          </div>
          <div className="second mt-5">
            <h4 style={{ cursor: "pointer" }}>Conatct US</h4>
            <p style={{ cursor: "pointer" }}>ag124767@gmail.com</p>
            <p style={{ cursor: "pointer" }}> 9993979058</p>
          </div>
          <div className="third mt-5">
            <h4 style={{ cursor: "pointer" }}>Get in Touch</h4>
            <p style={{ cursor: "pointer" }}>
              <Link
                to="/About"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                About
              </Link>
            </p>
            <p style={{ cursor: "pointer" }}>
              <Link
                to="/Skills"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Skills
              </Link>
            </p>
            <p style={{ cursor: "pointer" }}>
              <Link
                to="/Project"
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Project
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
