import React from "react";
import male from "../../../assets/male.png";
import female from "../../../assets/female.png";
import { Card, Col } from "react-bootstrap";
import "./Gender.css";

function GenderCard(props) {
  return (
    <Card border="warning" className="mt-4">
      <Card.Body style={{ width: "18rem", height: "12rem" }}>
        <Card.Title className="text-center">
          <h5>{props.title}</h5>
        </Card.Title>
        <Col className="d-flex justify-content-center">
          <button
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginRight: "20px",
              borderRadius: "50%",
              height: "67px",
              width: '67px',
              backgroundImage: `url(${male})`,
              backgroundSize: "50px 50px",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            onClick={props.handleChangeGender}
            name="gender"
            value="male"
            className={
              props.currentGenderSelected === "male" ? "gender-active" : "disabled"
            }>
          </button>
          <button
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
              borderRadius: "50%",
              height: "67px",
              width: '67px',
              backgroundImage: `url(${female})`,
              backgroundSize: "50px 50px",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            onClick={props.handleChangeGender}
            name="gender"
            value="female"
            className={
              props.currentGenderSelected === "female" ? "gender-active" : "disabled"
            }>
          </button>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default GenderCard;
