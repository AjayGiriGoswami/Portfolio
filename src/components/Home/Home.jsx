import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Home = () => {
  const navigate = useNavigate();

  const Projects = () => {
    navigate("/Project");
  };

  const Skills = () => {
    navigate("/Skills");
  };

  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to Our Platform <br />
              <span style={{ color: "#6c63ff" }}>Ajay Giri Gowami</span>
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              MERN is a free and open-source JavaScript software stack for
              building dynamic web sites and web applications.The MERN stack is
              MongoDB, Express.js, React .js, and Node.js. Because all
              components of the MERN stack support programs that are written in
              JavaScript, MERN applications can be written in one language for
              both server-side and client-side execution environments.
            </p>
            <Button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={Projects}
            >
              Projects
            </Button>{" "}
            &nbsp;
            <Button
              variant="danger"
              style={{
                letterSpacing: "1px",
                border: "none",
                borderRadius: 4,
                background: "#6c63ff",
              }}
              onClick={Skills}
            >
              Skills
            </Button>
          </div>
          <div className="right_div">
            <img src="Home.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
