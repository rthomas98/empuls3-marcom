import React from "react"
import {Container, Row, Col, Nav} from "react-bootstrap"

import FooterImage from "../../components/footerimg"

const Footer = () => (
    
    <footer className="footer">
        <div className="bg-p footer-caps">
          <Container>
            <Row>
              <Col sm={12} md={12} lg={4}>
                  <h4 className="text-white">Design</h4>
                  <p className="text-white">
                    At Empuls3, we know that digital branding is far more than just website design. It’s key to a comprehensive marketing strategy that seamlessly integrates online and offline. 
                  </p>
                  <p className="mt-5">
                      <a href="#">
                        Learn More
                      </a>
                  </p>
              </Col>
              <Col sm={12} md={12} lg={4}>
                  <h4 className="text-white">Development</h4>
                  <p className="text-white">
                    We develop engaging, interactive, great looking websites and mobile apps, that truly represent your business and build better conversion rates.                  
                  </p>
                  <p className="mt-5">
                      <a href="#">
                        Learn More
                      </a>
                  </p>
              </Col>
              <Col sm={12} md={12} lg={4}>
                  <h4 className="text-white">Marketing</h4>
                  <p className="text-white">
                    We get our clients in front of the right audience on the right platform for the right reason to ensure every ad dollar is spent as effectively.
                  </p>
                  <p className="mt-5">
                      <a href="#">
                        Learn More
                      </a>
                  </p>
              </Col>
            </Row>
          </Container>
        </div>
      <Container>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
            <h2 className="mb-5">Let’s have a conversation we’d be thrilled to provide some honest guidance. </h2>
            <p className="lead">
              <strong>Email:</strong> <a href="mailto:info@empuls3.com">info@empuls3.com</a>
            </p>
            <p className="lead">
              <strong>Phone:</strong> <a href="tel:9727988914">972-798-8914</a>
            </p>

            <p className="lead">
               <a href="#">
                 Contact Us
               </a>
            </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
              <FooterImage />
          </Col>
        </Row>
        <hr></hr>
        <Row className="copyright">
          <Col sm={12} md={12} lg={6}>
          <h4>
            Dallas, Texas
          </h4>
          <p>
            13101 Preston Road  SUITE 110 <br></br>
            Dallas, TX 75240
          </p>
          </Col>
          <Col sm={12} md={12} lg={6}>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="https://www.facebook.com/empuls3/" rel="noopener" target="_blank">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://twitter.com/empuls3" rel="noopener" target="_blank">Twitter</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com/empuls3/?hl=en" rel="noopener" target="_blank">Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://dribbble.com/empuls3/about" rel="noopener" target="_blank">Dribbble</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/company/empuls3" className="pr-0" rel="noopener" target="_blank">LinkedIn</Nav.Link>
            </Nav.Item>
          </Nav>
          <p className="float-lg-right">
              &copy; {new Date().getFullYear()} Empuls3
              {` `}
              <a href="#">Privacy Policy</a>
          </p>
          </Col>
        </Row>
      </Container>
  </footer>
)

export default Footer
