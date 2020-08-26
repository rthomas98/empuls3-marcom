import PropTypes from "prop-types"
import React from "react"
import Logo from "../../components/logo"
import { Navbar, Nav, NavDropdown, Form, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="white" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
    <Logo/> <span>empuls3</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Work</Nav.Link>
      <Nav.Link href="#link">Agency</Nav.Link>

      <NavDropdown title="Design" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Brand Identity and Strategy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">UI/UX Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Responsive Web Design</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Development" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">WordPress Development</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mobile Development</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Marketing" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Marketing Overview</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Analytics and Conversion Tracking</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Email Marketing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Pay Per Click Marketing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Search Engine Optimization</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Social Media Marketing</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <a role="button" className="btn btn-pink">get in touch</a>
    </Form>
  </Navbar.Collapse>  
      </Container>  
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header