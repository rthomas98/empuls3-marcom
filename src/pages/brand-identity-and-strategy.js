import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import BrandBanner from "../components/brand/brand-banner"
import AgencyImgSix from "../components/agancy/agency-img-six"
import BrandImgOne from "../components/brand/brand-img-one"

const BrandPage = () => (
  <Layout>
    <SEO title="Brand Identity and Strategy" />
    <Header/>

    <Container fluid className="pt-5">
        <Row>
            <Col sm={12} md={12} lg={6}>
                <BrandBanner/>
            </Col>
            <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                <div className="my-auto col text-center p-lg-5">
                    <p className="lead sub-title">
                        strategy. creativity. technology. analytics.
                    </p>
                    <h1>
                        Brand Identity and Strategy
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
        </Row>
    </Container>

      <div className="bg-p pt-5 mb-5 pb-5">
          <Container>
              <Row className="">
                  <Col sm={12} md={12} lg={7} className="d-flex justify-content-center">
                      <div className="my-auto col">
                          <h3 className="txt-y">
                              We build brands that cannot be ignored.
                          </h3>
                          <p className="lead">
                              Our core strategic engagements are designed to deliver results
                          </p>
                          <p className="text-white">
                              Empuls3 helps to breathe life into your company story, developing branding that advances your message and forms a distinct image. While each phase moves your brand somewhere new and exciting, we continuously infuse direction from what we’ve learned about where the brand has come from, where you’d like the brand to go, and how the new brand image will impact consumer behavior. At Empuls3, we’ll help you take the first step or conquer the latest hurdle.
                          </p>

                          <p>
                              <a href="/work" className="btn btn-pink pl-lg-5 pr-lg-5">let us help</a>
                          </p>
                      </div>
                  </Col>
                  <Col sm={12} md={12} lg={5}>
                      <BrandImgOne/>
                  </Col>
              </Row>
          </Container>
      </div>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col>
                  <h2>The power of brand experience.</h2>
                  <p>
                      A strategy is hard to package in a neat little box, but we believe it’s one of the most essential components of great branding. It tells us what brands value, how they behave, how audiences view them, and much more.
                  </p>

                  <p>
                      Our strategy team helps to polish the foundation of both novice and established brands, creating opportunities for great storytelling and communications for our clients.
                  </p>

                  <h3>Our Process</h3>

                  <p>
                      Here at Empuls3, we believe that every logo, color, font, and visual element should tell a story and represent who you are. We deliver a brand experience that far exceeds any dream or aspiration you have by blending our passion for art and science behind pixel storytelling. We utilize a proprietary development process that systematically walks our clients through every step of the way to deliver brands, websites, and marketing content that far exceed expectations. Empuls3 is known for having some of the most talented artists in Dallas on our team. In an ever-changing industry, our team is adept at remaining engaged in development trends and tactics. Above all else, we believe in embodying unconstrained creativity!
                  </p>
              </Col>
          </Row>
          <Row>
              <Col className="text-center">
                  <h2>Interested in learning more?</h2>
                  <p className="lead">
                      Tell your story and reach your customers with high quality content.<br></br>
                      What flavor is your brand? Branding extends beyond logo design.
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

export default BrandPage
