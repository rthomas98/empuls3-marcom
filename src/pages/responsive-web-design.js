import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import RespondBanner from "../components/responsive/respond-banner"
import RespondTwo from "../components/responsive/respond-two"
import RespondThree from "../components/responsive/respond-three"

const ResponsivePage = () => (
  <Layout>
    <SEO title="Responsive Web Design" />

    <Header/>

    <div className="respo-banner pt-5 mb-5">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col text-center">
              <p className="lead sub-title">
                strategy. creativity. technology. analytics.
              </p>
              <h1>
                Responsive Web Design
              </h1>
              <p className="lead">
                Whether you’re just starting out or evolving your brand, Empuls3 will help you grow.
              </p>

              <p className="mt-5">
                <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
                <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <RespondBanner/>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="bg-pink pt-5 pb-5 text-white pink-shape mb-5">
      <Container>
        <Row>
          <Col>
            <h2>Responsive Web Design as a Necessity</h2>
            <p className="text-white">
              As mobile continues to increase, a B2B company cannot ignore their mobile visitors. Responsive design ensures that your firm is projecting its best image on all devices. Whether a prospective client is using a desktop, laptop, tablet or smartphone, it’s important that a B2B website design responds to that specific device.
            </p>

            <h3 className="text-white">
              What is responsive web design?
            </h3>
            <p className="text-white">
              When a website is designed and developed, the display qualities are rendered to a full-screen monitor of a PC, which when viewed on a screen of a different size or resolution needs readjustment by the user. To reduce the consequences of losing visitors or prospective clients, web designers and developers have devised a method by using the CSS that will automatically adjust webpage layouts for optimal content display for any screen size or resolution.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row>
        <Col className="text-center mb-5">
          <h2>Responsive design for better<br></br>
            business performance</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <RespondTwo/>
          <p>
            Experts predict mobile browsing will overtake desktop browsing over the next few years. Online businesses are now looking forward to adapting new strategies to render users a feature-rich experience using a responsive design. And since responsive design makes a website compatible with devices of almost all sizes, enterprises can attract customers without any technical hindrances.
          </p>
          <p className="mt-5">
            <a href="" className="btn btn-purple pr-lg-5 pl-lg-5 btn-lg">view more of our mobile services</a>
          </p>
        </Col>
      </Row>

        <Row className="mb-5">
          <Col sm={12} md={12} lg={6}>
            <RespondThree/>
          </Col>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h3>Responsive design for SEO</h3>
              <p>
                One single site to maintain means that SEO analysts have to build a single set of links, avoiding extra server load, site speed and maintenance issues. Since search engines do not optimize for search based on devices, the onus is on the SEO to redirect customers to the site to meet their device needs.
              </p>
              <p className="mt-5">
                <a href="" className="btn btn-purple pr-lg-5 pl-lg-5 btn-lg">View Our seo services</a>
              </p>
            </div>
          </Col>
        </Row>
      <Row className="mb-5">
        <Col>
          <h3>Create a Seamless User Experience with empuls3</h3>
          <p>
            Responsive web design is a vital expense you can’t skimp on. It’s a single build that can last your website’s lifetime if implemented properly. Empuls3’s responsive web design services aren’t just about changing how the website appears across devices, but also making the website mobile-friendly in all aspects so that it will load and run perfectly on mobile.
          </p>
          <p>
            One of the most important changes is on the website’s CMS. Responsive design projects aren’t the same for every website and the extent of the necessary changes affects the cost. The cost may go up or down depending on the website’s structure, the extent of the necessary design changes, and the website’s graphical elements.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
      <Col className="text-center">
        <h2>We offer consultancy</h2>
        <p className="lead">
          We don’t offer just technical solutions; we also offer consultancy from concept to final product. Our web solutions are specially developed to attract visitors and guarantee the success of your online business.
        </p>
        <p className="mt-5">
          <a href="/contact" className="btn btn-y btn-lg pl-lg-5 pr-lg-5">get a free quote</a>
        </p>
      </Col>
    </Row>
    </Container>

    <Footer/>
  </Layout>
)

export default ResponsivePage
