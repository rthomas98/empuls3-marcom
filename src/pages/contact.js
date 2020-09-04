import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import ContactBanner from "../components/contact/contact-banner"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Header/>

    <div className="bg-p p-5 mt-5 mb-5">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={5}>
            <ContactBanner/>
          </Col>
          <Col sm={12} md={12} lg={7} className="d-flex justify-content-center">
            <div className="my-auto col">
              <p className="lead sub-title">
                strategy. creativity. technology. analytics.
              </p>
              <h1 className="text-white">
                Ready to grow your business?
              </h1>
              <p className="lead text-white">
                For brand consulting services or new business inquiries, please email us at <a href="mailto:info@empuls3.com">info@empuls3.com</a>. Or just fill out the handy form and we’ll get back to you the same day unless we’re super busy.
              </p>

              <p className="mt-5">
                <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
                <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container>
      <Row className="mb-5">
        <Col className="text-center">
          <h2>Busy, but never too busy to connect.</h2>
          <p className="lead">
            <strong>Phone:</strong> <a href="tel:9727988914">972.798.8914</a><br></br>
            <strong>Email:</strong> <a href="mailto:info@empuls3.com">info@empuls3.com</a><br></br>
            <strong>Address:</strong> 9100 Independence Pkwy, Plano, TX 75025
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h3>Frequently Asked Questions</h3>
          <h4 className="txt-pink">I don’t have a website, but I’d like one. Can you help?</h4>
          <p>
            Yes! We help companies build websites, from start to finish.
          </p>
          <h4 className="txt-pink">How much should I budget for a new website?</h4>
          <p>
            Pricing varies by project and can range from $1,500 to $75,000. Some websites are very simple, while others include more complicated features like e-commerce and tech integrations. Schedule a call with the Empuls3 team for a custom quote.
          </p>
          <h4 className="txt-pink">What results can I expect from a digital marketing campaign?</h4>
          <p>
            Our digital growth team will work with you to set realistic goals for each month, quarter, and year. We offer monthly reporting and we adjust our tactics regularly to help you meet your ROI goals. In general, Empuls3 clients see a 40 percent increase in traffic and a 25 percent increase in leads in the first year that we work together.
          </p>
          <h4 className="txt-pink">Are you an SEO firm?</h4>
          <p>
            We’re a full-service web design and digital marketing agency. One of our key competencies is SEO. Therefore, every website we build is optimized to help you rank higher on Google, and our ongoing digital growth services are focused on continually improving SEO and ultimately lead generation.
          </p>
        </Col>
      </Row>
    </Container>

    <Footer/>
  </Layout>
)

export default ContactPage
