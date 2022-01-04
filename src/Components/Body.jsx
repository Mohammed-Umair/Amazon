import React from "react";
import "./Body.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Row, Col } from "react-bootstrap";
import { data, data2 } from "./card";
const Body = () => {
  return (
    <div>
      <div className="card-1">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
              
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/61oybxyYQIL._SX3000_.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div className="Card-2">
          <div className="crd-1">
            <h1>Styles for Men | Up to 70% off</h1>
            {data.map((item) => (
              <div style={{ margin: " 10px 10px" }}>
                <Row xs={1} md={2} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                      <Card style={{ width: "130px" }}>
                        <Card.Img variant="top" src={item.img} height="100px" />
                        <Card.Body>
                          <Card.Title>
                            <p> {item.title} </p>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
          <div className="crd-2">
            <h1>Styles for Men | Up to 70% off</h1>
            {data2.map((item) => (
              <div style={{ margin: " 10px 10px" }}>
                <Row xs={1} md={2} className="g-4">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                      <Card style={{ width: "130px" }}>
                        <Card.Img
                          variant="top"
                          src={item.img2}
                          height="100px"
                        />
                        <Card.Body>
                          <Card.Title>
                            <p> {item.title2} </p>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
