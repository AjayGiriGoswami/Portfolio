import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import projectData from "./Data";
// import "./Project.css";
import { Link } from "react-router-dom";

const Project = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  }, []);

  return (
    <>
      {spin ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading
          .....
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center mt-3">Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {projectData.map((el, index) => {
                return (
                  <>
                    <Card
                      style={{ width: "20rem", height: "25rem" }}
                      className="mt-4 mb-4"
                      key={index}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          width: "20rem",
                          marginLeft: -13,
                          height: "18rem",
                          alignItems: "center",
                          aspectRatio: "1/2",
                          objectFit: "fill",
                        }}
                        className="img-Project"
                        src={el.Images}
                      />
                      <Card.Body className="d-flex justify-content-center flex-column">
                      <Card.Title className="text-center">
                          {el.name}
                        </Card.Title>

                        <Button variant="primary">
                          <Link
                            to={el.demo}
                            target="_blank"
                            className="text-decoration-none text-light"
                          >
                            Live Demo
                          </Link>
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
