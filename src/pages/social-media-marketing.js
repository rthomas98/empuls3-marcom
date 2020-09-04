import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import SocialBanner from "../components/social/social-banner"
import SocialImgOne from "../components/social/social-img-one"
import SocialImgTwo from "../components/social/social-img-two"

const SecondPage = () => (
  <Layout>
    <SEO title="Social Media Marketing" />

    <Header/>

    <Container fluid className="bg-yellow p-5 mt-5 mb-5 yellow-left">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <SocialBanner/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center p-5">
          <div className="my-auto col">
            <p className="lead sub-title">
              strategy. creativity. technology. analytics.
            </p>
            <h1>
              Social Media Marketing
            </h1>
            <p className="lead text-white">
              Empuls3 builds social media marketing programs that amplify your reach and convert prospects into buyers.
            </p>

            <p className="mt-5">
              <a href="#" className="btn btn-purple btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
              <a href="#" className="btn btn-purple-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="mb-5">
        <Col>
          <h2>Our Social Media Advertising Services can Help You</h2>
          <p className="lead">Our Social Media Advertising Services can Help You</p>
          <p>
            The key to getting social media results is focusing on the proper channels and activities. Targeting the appropriate communities and outlets to achieve your personal or professional goals is a calculated method and not one that you should manage alone.
          </p>
          <p>
            When it comes to picking a social media management company to assist you in your brand’s growth, awareness, strategy, activities, Empuls3 is your best bet, hands down.
          </p>
          <p>
            We can successfully handle the creation of your social media strategy so that your social media presence and online communication are in sync and flows with great eloquence. But it doesn’t stop there!
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3>Content that speaks to your audience & followers.</h3>
            <p>
              We develop your content using a buyer persona, your brand guidelines, and our awesome graphic designers. Whether you’re your small business owner or a franchise with multiple locations we can handle your content creation & social channel management.
            </p>
            <h3>Facebook Advertising Services</h3>
            <p>
              Use the most popular social media advertising platform to reach your desired audience and drive traffic to your website. Target B2C and B2B audiences.
            </p>
            <p className="mt-5">
              <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">find out more</a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <SocialImgOne/>
        </Col>
      </Row>
    </Container>

    <div className="bg-grey grey-right p-5 mb-5">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <SocialImgTwo/>
          </Col>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h3>Instagram Advertising Services</h3>
              <p>
                Use the most visually engaging platform to spark interest in your products and services. Capture eyeballs on Instagram’s news feed with effective social media advertisements.
              </p>
              <h3>Pinterest Advertising Services</h3>
              <p>
                Target people searching for pins related to your products and services. Use the best social media advertising platform to reach women and consumers of retail products.
              </p>
              <h3>LinkedIn Advertising Services</h3>
              <p>
                Use LinkedIn advertising to reach decision-makers and professionals. If you are a B2B company seeking to gain awareness, website traffic, and influence conversions, use LinkedIn advertising.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row>
        <Col className="text-center">
          <h2>Contact Us Today and Drive Your Business with Social Selling!</h2>
          <p className="lead">
            Social media advertising is a great way to increase brand awareness and conversions through social media.
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

export default SecondPage
