import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import AnalyticsBanner from "../components/analytics/analytics-banner"
import AnalyticsImgTwo from "../components/analytics/analytics-img.two"
import AnalyticsImgThree from "../components/analytics/analytics-img-three"

const AnalyticsPage = () => (
  <Layout>
    <SEO title="Analytics and Conversion Tracking" />

    <Header/>

<div className="grey-long">
  <Container className="mb-5 p-0 mt-5">
    <Row>
      <Col sm={12} md={12} lg={6}>
        <AnalyticsBanner/>
      </Col>
      <Col sm={12} md={12} lg={6} className="d-flex justify-content-center ">
        <div className="my-auto col">
          <p className="lead sub-title">
            strategy. creativity. technology. analytics.
          </p>
          <h1>
            Marketing By The Numbers
          </h1>
          <p className="lead">
            We’re your partner, and that means we only succeed when you succeed.
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

    <Container className="mb-5">
      <Row>
        <Col>
          <h2>Analytics and Research</h2>
          <p className="lead">
            Growing online requires a fully-connected mindset, strategy, and ecosystem.
          </p>
          <p>
            Who are your website visitors, and where are they coming from? What information are they seeking, and what makes them take action on your site? These are the types of questions that we explore with web analytics- the analysis of the data surrounding your website traffic. The answers we uncover inform a host of marketing decisions, from which marketing channels to focus on to what kind of content to produce. Delivered to you in regular reports, they can also help you make data-driven business decisions concerning the markets you serve, the products you offer, the segments you focus your energy on and more. At the end of the day, this all leads to a healthier bottom line for your business.
          </p>

          <h2>CRO</h2>
          <p>
            Conversion Rate Optimization (CRO) services allow you to tweak on-site elements to encourage more purchases, form submissions, and other
            website objectives. Our professional strategies are easy-to-implement and can quickly improve your website’s conversion rate.
          </p>
          <p>
            Get started with our team today and become the next digital marketing success story. Our agency has provided conversion rate optimization services to businesses in the Dallas corridor and beyond.
          </p>
        </Col>
      </Row>
    </Container>

    <div className="bg-p pt-5 pb-5 mb-5 purple-right">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="text-white">A Platform for Efficiency and Growth</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h3 className="txt-pink">Web Page Analysis</h3>
              <p className="text-white">
                The CRO experts at Empuls3 begin the CRO process by auditing your eCommerce store identifying your target audience, determining your customer engagement metrics and defining your leading pages. Based on the results, our experts will develop a comprehensive Conversion Rate Optimization plan.
              </p>
              <h3 className="txt-pink">Landing Page Optimization</h3>
              <p className="text-white">
                The ultimate goal of CRO landing page optimization is to build pages that better engage your target audience so you can drive more leads through paid search. No cheesy templates. You’ll get hand-built, conversion focused landing pages that are portfolio worthy.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <AnalyticsImgTwo/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <AnalyticsImgThree/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3>Heat Mapping and Click Analysis</h3>
            <p>
              Our Conversion Rate Optimization team analyzes the navigation patterns of your site using Heat Mapping and Click Analysis methods. Based on the results, we develop strategies closing any loopholes and ensuring that your website generates more quality leads.
            </p>
            <h3>A/B Multivariate Testing</h3>
            <p>
              We conduct A/B testing, Multivariate testing, and PPC campaign testing on your online shopping website to identify the variations that can enhance conversion and reduce shopping cart abandonment. Using this data, we’ll create foolproof strategies that meet your business objectives.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Learn More About Empuls3’s Conversion Rate
            Optimization (CRO) and Analytics Services</h2>
          <p className="lead">
            If you are tired of shopping cart abandonment, low conversion rates and flat sales of your eCommerce store, it is time for you to hire our Conversion Rate Optimization experts.
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

export default AnalyticsPage
