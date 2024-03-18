import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mt-3 mb-5 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Ajay Giri Goswmai</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              reiciendis tenetur ex laudantium nam molestiae eius totam
              assumenda? Ipsa distinctio eum fugit cum adipisci error? Maiores
              dignissimos amet eaque culpa, recusandae cumque in qui praesentium
              autem, vero fuga! Doloremque, deserunt. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. A obcaecati consequatur porro modi
              dolor error beatae, aut maxime quo ipsum nisi, praesentium,
              corrupti adipisci doloremque incidunt minus eius deleniti? Odio!
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="ajay.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
