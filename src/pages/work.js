import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import WorkBannerImg from "../components/work/work-banner"
import CtaWorkImg from "../components/work/cta-work"

const WorkPage = () => (
  <Layout>
    <SEO title="Empuls3 Clients" />

    <Header/>

    <Container fluid className="home-banner mb-5 pt-5">
      <Row className="h-100">
        <Col sm={12} md={12} lg={6} className="text-center">
          <WorkBannerImg/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col text-center p-5">
            <p className="lead sub-title">
              strategy. creativity. technology. analytics.
            </p>
            <h1>
              The Fruits Of Our Labor.
            </h1>
            <p className="lead">
              Complete brand overhauls. Tactical marketing strikes. Traditional, digital, UX, social and experiential, it’s all here. And it all worked. Have a look.
            </p>

            <p className="mt-5">
              <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
              <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row>
        <Col className="text-center">
          <h2>We’re More Than an Agency.</h2>
          <p className="lead">
            Empuls3 is a Dallas based Web and App Development Digital Agency. Our goal is to create pain-free marketing solutions that will help to grow your business.
          </p>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row>
        <Col className="text-center">
          <div className="my-auto col">
            <CtaWorkImg/>
            <h2 className="text-white">We’d love to hear from you</h2>
            <p className="lead">
              Want to talk about how Empuls3 can help your business achieve its objectives online?
            </p>
            <p>
              <a className="btn btn-pink btn-lg pl-lg-5 pr-lg-5">
                Contact Us
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Footer/>

  </Layout>
)

export default WorkPage
