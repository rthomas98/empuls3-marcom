import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import OverviewBanner from "../components/overview/overview-banner"
import OverviewImgOne from "../components/overview/overview-img-one"
import OverviewImgThree from "../components/overview/overview-img-three"
import OverviewImgTwo from "../components/overview/overview-img-two"

const MarketingPage = () => (
  <Layout>
    <SEO title="Marketing Overview" />

    <Header/>

<div className="pt-5 pb-5 mb-5 bg-black black-dots">
  <Container>
    <Row>
      <Col sm={12} md={12} lg={6}>
        <OverviewBanner/>
      </Col>
      <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
        <div className="my-auto col">
          <p className="lead sub-title">
            strategy. creativity. technology. analytics.
          </p>
          <h1 className="text-white">
            We Don’t Just Make Pretty Pictures, We Build Brands.
          </h1>
          <p className="lead">
            We develop online marketing strategies that deliver business results.
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
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h2>Bringing new customers to your brand experience</h2>
            <p>
              The best websites, mobile apps, and campaigns are often designed to delight customers, but your business needs to attract users in the first place. Empuls3 combines strategic thinking and performance marketing to generate an integrated experience that exceeds your users’ expectations and your business goals.
            </p>
            <p>
              We do this by combining data and insight into your business needs while understanding and advocating for the best customer experience possible, whether on-site or off. We meet with clients each quarter to review performance and present new ideas. We consistently test experiences to maximize performance—from the channel, messaging, and creative to behavior, timing, and cadences.
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <OverviewImgOne/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <OverviewImgTwo/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h2>Social Ads</h2>
            <p className="lead">
              Investing in social platforms to reach a highly targeted audience with your content to advance your business goals.
            </p>
            <p>
              More businesses are using social ads to reach potential customers, making the platforms more competitive. In an environment that is increasingly pay-to-play, you need expert setup. We create strategies that ensure you are targeting the right audience, increasing your brand awareness, re-engaging your potential customers, and driving sales.
            </p>
            <p className="mt-5">
              <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">
                lets get started
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <div className="pt-5 pb-5 bg-p mb-5">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h2 className="text-white">Test, Improve and Optimize</h2>
              <p className="lead text-white">
                Our integrated teams go beyond status updates and regular check-ins. They work together to align efforts and achieve your goals.
              </p>
              <p className="text-white">
                Lead-focused content marketing is a journey, not a destination. We work throughout the course of the program to get the most out of your efforts through constant improvements. We A/B test subject lines, ad copy, and form design. We use analytics and reporting to identify the channels on which to focus our efforts, and we integrate with CRM software to track performance from the first form completions all the way to closed business to provide you end-to-end visibility into the sales funnel.
              </p>
              <p className="text-white">
                With full analytics integration, you can see how prospects become leads and which specific efforts are helping them along their buyer journeys. Our analysts regularly report to your stakeholders to discuss results, demonstrate ROI, make suggestions for performance improvement, and confirm the upcoming content distribution strategy.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <OverviewImgThree/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row>
        <Col className="text-center">
          <h2>Let’s Start Growing Your Inbound Leads</h2>
          <p className="lead">
            From goal definition to content development through a continually improving distribution strategy, Empuls3 builds and optimizes a custom digital lead generation program that grows your business. Get in touch with our team today and tell us what business goals you’d like to achieve.
          </p>
          <p className="mt-5">
            <a href="/contact" className="btn btn-y btn-lg pl-lg-5 pr-lg-5">talk to a digital marketing expert</a>
          </p>
        </Col>
      </Row>
    </Container>

    <Footer/>

  </Layout>
)

export default MarketingPage
