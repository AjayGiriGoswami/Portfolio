import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [fname, Setfname] = useState("");
  const [lname, Setlname] = useState("");
  const [email, Setemail] = useState("");
  const [mobile, Setmobile] = useState("");
  const [message, Setmessage] = useState("");
  const navigate = useNavigate("");

  const sentUserdata = async (e) => {
    e.preventDefault();

    if (fname === "") {
      toast.error("First Name is require!", {
        position: "top-center",
      });
    } else if (lname === "") {
      toast.error("Last Name is require!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@") || !email.includes(".com")) {
      toast.warning("Invaild Email", {
        position: "top-center",
      });
    } else if (mobile === "") {
      toast.error("Please enter the Number", {
        position: "top-center",
      });
    } else if (mobile.length != 10) {
      toast.error("Please enter the 10 digit Number", {
        position: "top-center",
      });
    }
    const res = await axios.post(
      "https://portfoliobackends-6r0d.onrender.com/Contact",
      {
        fname,
        lname,
        email,
        mobile,
        message,
      }
    );

    if (res.status === 201) {
      toast.success("Response Sent Successfully", {
        position: "top-center",
      });
      window.location.reload("/");
    } else if ((res.status === 202)) {
      toast.info("Already Send a Response Successfully", {
        position: "top-center",
      });
    } else {
      toast.info("Please try after Sometime", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center mt-3">Contact US</h2>
        <div className="container mt-2">
          <Form className="row mt-2" onSubmit={sentUserdata}>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={fname}
                onChange={(e) => Setfname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={lname}
                onChange={(e) => Setlname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => Setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={mobile}
                onChange={(e) => Setmobile(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                value={message}
                rows={4}
                onChange={(e) => Setmessage(e.target.value)}
                name="message"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg-6" type="submit">
                Submit <i class="fa-solid fa-paper-plane"></i>
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
export default Contact;
