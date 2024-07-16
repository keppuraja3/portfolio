import React from "react";
import ManWithLaptop from "../assets/Images/man-with-laptop.png";
import blob1 from "../assets/Images/blob-1.svg";
import nodeIcon from "../assets/Images/nodejs-icon.png";
import reactIcon from "../assets/Images/react-icon.png";
import mongodbIcon from "../assets/Images/mongo-db-icon.png";
import blob3 from "../assets/Images/blob-3.svg";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/Css/Home.css";
import zIndex from "@mui/material/styles/zIndex";
function Home() {
  return (
    <>
      <Container id="home-container">
        <Row>
          {/* left side content  */}
          <Col
            md={6}
            xs={12}
            className=" d-flex justify-content-centera align-content-center  flex-wrap text-light"
          >
            <h1 className=" my-3">Full stack developer</h1>
            <p className=" my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              unde dolore ab, culpa ex reiciendis sed corrupti sit eligendi
              repellendus similique aperiam quibusdam reprehenderit laboriosam
              aliquid id veniam provident soluta?
            </p>
            <div className=" d-flex  justify-content-start w-100 ">
              <button className=" btn btn-success me-3">Contact</button>
              <button className=" btn btn-outline-warning">Resume</button>
            </div>
          </Col>

          {/* Right side content  */}
          <Col md={6} xs={12}>
            <div
              className=" position-relative d-flex justify-content-center align-items-center"
              style={{ minHeight: "700px" }}
            >
              <img
              id="man-profile"
                src={ManWithLaptop}
                className=" img-fluid position-absolute"
                alt="man-with-laptop"
                style={{ zIndex: "1" }}
              />

              <img
              id="node-icon"
                src={nodeIcon}
                alt="node Icon"
                width={100}
                className=" rounded-circle bg-dark border border-light border-opacity-25 p-2 position-absolute"
                style={{ zIndex: "1", left: "10px" }}
              />

              <img
              id="react-icon"
                src={reactIcon}
                alt="node Icon"
                width={70}
                className=" rounded-circle bg-dark border border-light border-opacity-25 p-2 position-absolute"
                style={{ zIndex: "1" , bottom: "20%"}}
              />

              <img
              id="mongodb-icon"
                src={mongodbIcon}
                alt="node Icon"
                width={80}
                className=" rounded-circle bg-dark border border-light border-opacity-25 p-2 position-absolute end-0"
                style={{ zIndex: "1" }}
              />

              <img
                src={blob3}
                className=" img-fluid position-absolute"
                alt="blob 1 "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
