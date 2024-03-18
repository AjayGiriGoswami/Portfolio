import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import SkillsData from "./SkilsData";

const Skills = () => {
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
          <h2 className="text-center mt-3">Skills</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {SkillsData.map((el, index) => {
                return (
                  <>
                    <Card
                      style={{ width: "15rem", height: "10rem" }}
                      className="mt-4 mb-4"
                    >
                      <Card.Body className="d-flex justify-content-center flex-column">
                        {" "}
                        <h1 className="text-center">{el.Image}</h1>
                        <Card.Title className="text-center">
                          {el.SkillName}
                        </Card.Title>
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

export default Skills;
