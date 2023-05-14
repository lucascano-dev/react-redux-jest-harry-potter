import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { changeForms } from "../../redux/slice/form/formSlice";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputComment, setInputComment] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      changeForms({ name: inputName, email: inputEmail, comment: inputComment })
    );
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="contenedor-principal-contact">
        <div className="texto-about">
          <h1>FAN FORM</h1>
          <h2>Leave your comment</h2>
          <div className="forms-group">
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3" controlId="Text">
                <Form.Label className="info-input">Name/Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name/Surname"
                  onChange={(event) => {
                    console.log(inputName);
                    setInputName(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    console.log(inputEmail);
                    setInputEmail(event.target.value);
                  }}
                />
              </Form.Group>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  onChange={(event) => {
                    console.log(inputComment);
                    setInputComment(event.target.value);
                  }}
                />
              </FloatingLabel>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          <button onClick={() => navigate("/")}>To Go Home</button>
          {/* Tambien puedo usar navigate -1 para volver una pagina atras */}
          <button onClick={() => navigate(-1)}>
            To Go Home con navigate -1
          </button>
        </div>

        <div className="tapiz-welcome"></div>
      </div>
    </>
  );
};

export default Contact;
