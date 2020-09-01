import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import WpBanner from "../components/wordpress/wp-banner"
import WpImgOne from "../components/wordpress/wp-img-one"
import WpImgTwo from "../components/wordpress/wp-img-two"
import RocketMan from "../components/wordpress/rocket-man"
import WpImgThree from "../components/wordpress/wp-img-three"
import WpImgFour from "../components/wordpress/wp-img-four"
import WpImgFive from "../components/wordpress/wp-img-five"
import WpImgSix from "../components/wordpress/wp-img-six"

const WordPressPage = () => (
  <Layout>
    <SEO title="WordPress Development" />

    <Header/>

    <div className="grey-long mb-5">
      <Container className="bg-yellow pt-5 pb-5 mt-5 yellow-left">
        <Row>
          <Col sm={12} md={12} lg={6}>
            <WpBanner/>
          </Col>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col text-center">
              <p className="lead sub-title">
                strategy. creativity. technology. analytics.
              </p>
              <h1 className="text-white">
                WordPress Development
              </h1>
              <p className="lead text-white">
                Your one-stop-shop for professional WordPress design and development services. We can help you create an online presence for your business that works as hard as you do.
              </p>

              <p className="mt-5">
                <a href="#" className="btn btn-purple btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
                <a href="#" className="btn btn-purple-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col>
          <h2>Full Stack WordPress Development Company</h2>
          <p className="lead">
            Empuls3 is with you from market research and analytics to user analysis and conversion rate optimization, we provide a full range of digital strategy services designed to enhance your website marketing efforts.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <WpImgOne/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h3>We Build WordPress Projects That Scale</h3>
              <p className="lead">We’re digital solutions partners, with experience building technically complex WordPress instances at scale.</p>
              <p>
                Looking for a powerful WordPress development company to launch your dream project? Then you are in the right place. No matter whether you need a simple website or a heavily customized one, our team of experts who have collaborated with startups, midsize enterprises to multi-million businesses, willfully optimize WordPress for your business.
              </p>
            </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <p>
              WordPress has emerged as a powerful web publishing platform as it has changed the way the web industry works. Staying in tune with the market trends, we create bespoke WordPress websites based on client requirements.
            </p>
            <p>
              Keeping your company’s best interests in mind, the team of professionals in our company will follow all the latest standards of WordPress website development to cater to the best services for your business.
            </p>
            <p>
              <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">let us help</a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <WpImgTwo/>
        </Col>
      </Row>
    </Container>

    <div className="bg-p pt-5 pb-5 mb-5 purple-right">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
              <RocketMan/>
          </Col>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
              <div className="my-auto col">
                <h2 className="txt-y">Discover the best Custom WordPress services for you</h2>
                <p className="lead">We deliver advanced solutions with WordPress!</p>
                <p className="text-white">
                  If you are lacking in direction or just need some advice on a difficult problem, someone at Empuls3 will be able to help. We have broad-ranging WordPress expertise and can help you with issues that include infrastructure, architecture, development workflow, best practices, accessibility, performance and security, and the WordPress REST API.
                </p>
                <p>
                  <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">get a free quote</a>
                </p>
              </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
        <Row className="mb-5">
          <Col sm={12} md={12} lg={6}>
            <WpImgThree/>
            <h3>Design &amp; Development</h3>
            <p>
              We have professionals working in all areas of WordPress design and development. This allows us to develop beautiful and fast web solutions for our clients.
            </p>
            <p>
              You can update the content easily with our custom backend interfaces.
            </p>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <WpImgFour/>
            <h3>Theme Customization</h3>
            <p>
              This service is for clients who just started to work with WordPress as well as to those who already have WordPress websites.
            </p>
            <p>
              Our developers will help you to select a theme and customize it to improve the present functionality of clients’ websites.
            </p>
          </Col>
        </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <WpImgFive/>
          <h3>Ecommerce Store</h3>
          <p>
            WordPress is the perfect platform for launching an online store and selling products. We love to create high level ecommerce stores with one goal in mind, selling more!
          </p>
          <p>
            We can be your experienced, digital strategy partners - helping you to leverage the potential of WordPress.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <WpImgSix/>
          <h3>Ongoing Support</h3>
          <p>
            We build long-lasting relationships with our clients that continue long after an initial project is finished. That’s why we provide support packages according to our clients’ requirements.
          </p>
          <p>
            Your website will be hosted on blazing fast servers with SSL, Daily backups, Daily security checks, and premium caching security plugins, and weekly reports.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Why Go the Custom WordPress Theme Route?</h2>
          <p className="lead">
            You can find many pre-built themes on the market. These may appear to make site development and customization faster; however, you will usually find that’s not really the case.
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

export default WordPressPage
