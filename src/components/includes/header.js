import PropTypes from "prop-types"
import React from "react"
import Logo from "../../components/logo"
import { Navbar, Nav, NavDropdown, Form, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="white" expand="lg" className="sticky-top" role="navigation">
      <Container>
      <Navbar.Brand href="/">
    <Logo/> <span>empuls3</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/work">Work</Nav.Link>
      <Nav.Link href="/agency">Agency</Nav.Link>

      <NavDropdown title="Design" id="basic-nav-dropdown">
        <NavDropdown.Item href="/brand-identity-and-strategy">Brand Identity and Strategy</NavDropdown.Item>
        <NavDropdown.Item href="ui-ux-design">UI/UX Design</NavDropdown.Item>
        <NavDropdown.Item href="/responsive-web-design">Responsive Web Design</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Development" id="basic-nav-dropdown">
        <NavDropdown.Item href="/web-development">Web Development</NavDropdown.Item>
        <NavDropdown.Item href="/wordpress-development">WordPress Development</NavDropdown.Item>
        <NavDropdown.Item href="/mobile-development">Mobile Development</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Marketing" id="basic-nav-dropdown">
        <NavDropdown.Item href="/marketing-overview">Marketing Overview</NavDropdown.Item>
        <NavDropdown.Item href="/analytics-and-conversion-tracking">Analytics and Conversion Tracking</NavDropdown.Item>
        <NavDropdown.Item href="/email-marketing">Email Marketing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/pay-per-click-management">Pay Per Click Management</NavDropdown.Item>
        <NavDropdown.Item href="/search-engine-optimization">Search Engine Optimization</NavDropdown.Item>
        <NavDropdown.Item href="/social-media-marketing">Social Media Marketing</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
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
