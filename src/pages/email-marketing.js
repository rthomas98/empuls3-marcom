import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import EmailBanner from "../components/email/email-banner"
import EmailImgTwo from "../components/email/email-img-two"
import EmailImgThree from "../components/email/email-img-three"
import EmailImgFour from "../components/email/email-img-four"
import EmailImgFive from "../components/email/email-img-five"
import EmailImgSix from "../components/email/email-img-six"

const EmailPage = () => (
  <Layout>
    <SEO title="Email Marketing" />

    <Header/>

    <Container fluid className="mt-5 mb-5 pt-5 pb-5">
      <Row>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center more-serv-grey">
          <div className="my-auto col p-5">
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
        <Col sm={12} md={12} lg={6} className="grey-right">
          <EmailBanner/>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <EmailImgTwo/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h2>Email Marketing that Works</h2>
            <p className="lead">
              Wake Up to Better Open Rate, Click Through, and App Rates.
            </p>
            <p>
              Email marketing is a powerful method of connecting with valuable customers, clients, prospects, and others interested in your business. When creating your email marketing strategy, we consider the audiences being reached, the content that each audience needs and when they need it. We think about whether the content should be packaged into a multi-email campaign, whether any emails should be automated and how your emails fit into your marketing strategy as a whole. The result is an email plan that works with your other marketing initiatives to build a valuable relationship with your audience.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <div className="bg-pink mb-5">
      <Container >
        <Row>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h2 className="text-white">Email Marketing that Works</h2>
              <h3 className="txt-y">Strategy Development</h3>
              <p className="text-white">
                Our data-driven approach extends to segmentation and content strategy, messaging frequency, and email cadence. We work with our clients to align their email campaigns to customer personas and business goals and develop a roadmap of activities designed to drive results. By leveraging customer data, we help brands create the most robust customer profiles possible and enable them to constantly get smarter about consumer behaviors to improve their campaigns.
              </p>
              <p className="text-white">
                Additionally, our team develops nurture campaigns that focus on customers’ individual experiences, rather than simply where they fall in the sales funnel. We can then use this information across other marketing channels to maximize return on paid media investments and create a seamless experience throughout a customer’s entire journey.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} className="pt-5">
            <EmailImgThree/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <EmailImgFour/>
          <h3>Creative Strategy</h3>
          <p>
            We develop content and creative that will best resonate with a brand’s specific audience and drive results – whether the goal is transactions, engagement, or other KPIs.
          </p>
          <p>
            We are able to optimize the product, message, and content recommendations. This may include using purchase history and browsing trends to suggest additional products or showing articles and web pages based on customer interests.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <EmailImgFive/>
          <h3>Email Platform Selection and Implementation</h3>
          <p>
            Using a quantified framework, we are able to perform a platform-agnostic assessment and provide platform recommendations based on our clients’ business goals and email program maturity. Once we’ve identified the best platform for a client’s specific needs, we design a solution for platform implementation. Our process provides for seamless integration with existing technology (such as customer relationship management platforms, web analytics tools, and more) to assess relevant content and define events that would trigger emails optimized to the right customers.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <EmailImgSix/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h3>Campaign Execution, Measurement, and Optimization</h3>
          <p>
            Our team of email experts is fluent in a variety of email services platforms and can build and execute campaigns against a strategic roadmap. When taking on program execution, we first do a full audit of a brand’s existing email program. These findings influence process optimizations for building emails, determining audience segments and content, and reporting campaign and segment performance to ensure our client is set up for success from a strategic and tactical standpoint.
          </p>
          <p>
            Following a program’s launch, we leverage a solid framework across the entire customer journey to measure its performance. This feedback loop enables us to continually adjust and optimize content and strategy to increase conversions and meet our client’s goals.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Learn More About Empuls3’s
            Email Marketing Services</h2>
          <p className="lead">
            If you’d like to speak to someone at empuls3 and learn more
            about our Email Marketing services, please click the button below.
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

export default EmailPage
