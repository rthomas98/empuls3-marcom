import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import UiBanner from "../components/ui/ui-banner"
import UiTwo from "../components/ui/ui-two"
import UiThree from "../components/ui/ui-three"
import UiFour from "../components/ui/ui-four"
import PurpleShape from "../components/purple-shape"

const UiPage = () => (
  <Layout>
    <SEO title="UI/UX Design" />

    <Header/>

    <div className="ui-grey">
      <Container className="pt-5 mb-5">
        <Row>
          <Col>
            <div className="txt-overlay">
              <UiBanner/>
              <div className="centered text-center text-white">
                <p className="lead sub-title">
                  strategy. creativity. technology. analytics.
                </p>
                <h1>
                  UI/UX DESIGN
                </h1>
                <p className="lead text-white">
                  We focus on delivering high quality user experience design
                </p>

                <p className="mt-5">
                  <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
                  <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <UiTwo/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="col my-auto">
            <h2>What We Deliver</h2>
            <p className="lead">Websites that tell your brand’s story</p>
            <p>
              We don’t just design with your users in mind. We design with your users involved. Skip the overspend on unwanted features and focus on delighting the people who matter most. We empower people to experience the designs we’ve envisioned — and they let us know when we’re onto something.
            </p>
            <p>
              What keeps people from falling in love with your business? Let’s make it effortless. We combine data-driven insight and creativity to remove friction, address anxiety, and build user confidence. The more enjoyable their experience, the easier it becomes to reach your business goals.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="col my-auto">
            <h3>Information &amp; System Architecture</h3>
            <p>
              Creating an optimal user experience is fundamentally rooted in the efficient exchange of information. During this phase, we identify the data structure that facilitates the most streamlined flow of information between your users and the platform. Developing this architecture shapes the remainder of the UX design process, providing a foundation of efficiency for the path forward.
            </p>
            <h3>Interaction Design</h3>
            <p>
              The very essence of UX design lies in the interaction between users, software, and sometimes even hardware. Utilizing the analytics and intelligence data gathered during the research phase, our UX team designs an interaction tailored to your customers, ensuring the finished solution is a seamless, intuitive experience that caters to all user types.
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
            <UiThree/>
        </Col>
      </Row>
    </Container>

    <div className="bg-p pt-5 pb-5 mb-5">
      <Container>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="col my-auto">
              <h3 className="txt-y">Information &amp; System Architecture</h3>
              <p className="text-white">
                Creating an optimal user experience is fundamentally rooted in the efficient exchange of information. During this phase, we identify the data structure that facilitates the most streamlined flow of information between your users and the platform. Developing this architecture shapes the remainder of the UX design process, providing a foundation of efficiency for the path forward.
              </p>
              <p className="mt-5">
                <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <PurpleShape/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col>
            <h3>User Testing</h3>
            <p>
              We don’t just design with your users in mind. We design with your users involved. Skip the overspend on unwanted features and focus on delighting the people who matter most. We empower people to experience the designs we’ve envisioned — and they let us know when we’re onto something.
            </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <UiFour/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h3>Visual Design</h3>
          <p>
            A project’s visual design details the interface components that define the user experience. Our UI team goes beyond simply perfecting the visual layout of a project’s design elements—we consider the impact that typography, color theory, and accessibility requirements might have on a user’s overall experience, and make adjustments accordingly. The result is a pixel-perfect, aesthetically pleasing UI—an essential piece of any desirable user experience.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h2>This isn’t our first rodeo. Trust us.</h2>
          <p className="lead">
            We have over 10 years of experience partnering with organizations who make bold moves and tough decisions in the interest of advancing their mission. It isn’t always easy, but it’s always worth it.
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

export default UiPage
