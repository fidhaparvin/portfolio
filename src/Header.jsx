import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <Navbar bg="light" expand="lg" collapseOnSelect="true">
          <Container fluid>
            <Navbar.Brand
              href="#"
              style={{
                fontFamily: "Snell Roundhand, cursive",
                fontSize: "2rem",
                paddingLeft: "4%",
                color: "#3F3F48",
                
              }}
            >
              Fidha Parvin&nbsp;
              <a href="https://www.linkedin.com/in/fidha-parvin-31126a220/">
                <IoLogoLinkedin
                  style={{
                    color: "#E8B42E",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
              <FaInstagramSquare
                style={{
                  color: "#E8B42E",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/aboutme">
                  About Me
                </NavLink>
               
                <NavLink className="nav-link" to="/contactme">
                  Contact Me
                </NavLink>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link
                  style={{
                    color: "#3F3F48",
                    fontWeight: "bold",
                    paddingTop: "1%",
                  }}
                >
                  <p style={{ paddingTop: "5%" }}>
                    <BsTelephoneFill
                      style={{
                        color: "#E8B42E",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    />
                    &nbsp;+966 596609278&nbsp;&nbsp;&nbsp;
                    <MdEmail
                      style={{
                        color: "#E8B42E",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    />
                    &nbsp;fidha2012@gmail.com
                  </p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
