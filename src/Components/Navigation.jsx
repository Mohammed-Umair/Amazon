import React from "react";
import "./Navigation.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Body from "./Body";
const Navigation = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid className="Nav">
            <Navbar.Brand href="#">
              <div className="Navg">
                {" "}
                <img
                  src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
                  alt=""
                  height="60px"
                  width="100px"
                />
                <img
                  src="https://i.pinimg.com/originals/b3/da/17/b3da17c6c6f471a0becdd195efb445e1.jpg"
                  width="50px"
                  height="50px"
                  alt=""
                />
                <a href="">
                  <b>Select</b> your address
                </a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              style={{ color: "white", backgroundColor: "white" }}
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav.Link style={{ color: "white" }} href="#">
                Mobiles
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#">
                Best Seller
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#">
                Prime
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#">
                Fashion
              </Nav.Link>

              <NavDropdown className="country" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  <input type="radio" name="English" id="" /> English-EN
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <input type="radio" name="" id="" /> Hindi-HI
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <input type="radio" name="" id="" /> Marathi-MR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <input type="radio" name="" id="" /> Urdu-UR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <input type="radio" name="" id="" /> other language
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    alt=""
                    width="30px"
                    height="20px"
                  />
                  You are shopping on Amazom.in.
                  <NavDropdown.Item href="#action5">
                    <a href="">Change Country/Region</a>
                  </NavDropdown.Item>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
            <Form className="d-flex">
              <FormControl
                style={{ width: "300px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ color: "white" }} variant="outline-success">
                Search
              </Button>
            </Form>
          </Container>
        </Navbar>
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Navigation;
