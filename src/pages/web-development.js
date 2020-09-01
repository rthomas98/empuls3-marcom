import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import WebBanner from "../components/web-dev/web-baanner"
import WebImgOne from "../components/web-dev/web-dev-one"
import WebImgTwo from "../components/web-dev/web-dev-two"

const WebPage = () => (
  <Layout>
    <SEO title="Web Development" />

    <Header/>

    <Container fluid className="bg-p pt-5 pb-5 mb-5">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <WebBanner/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center purple-dots">
          <div className="my-auto col p-5 text-center">
            <p className="lead sub-title">
              strategy. creativity. technology. analytics.
            </p>
            <h1 className="text-white">
              Web Development
            </h1>
            <p className="lead text-white">
              Empuls3 is amongst the top web development agencies focused on bringing value to your business by creating intuitive user-friendly websites.
            </p>

            <p className="mt-5">
              <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
              <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="mb-5">
        <Col className="text-center">
          <h2>Web Expertise to Rely On</h2>
          <p className="lead">
            With long-standing experience across the full software development lifecycle, Empuls3 serves as a full stack vendor undertaking end-to-end custom web application development projects for entrenched market leaders and emerging businesses with technology at their core.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <WebImgOne/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <p>
              Build for the mobile-centric web or transform your business to fit in with the modern cross-platform reality with Empuls3. Drawing upon extensive UI/UX and front-end expertise, our web app developers deliver rich user experiences:
            </p>
            <p>
              Functional, convenient and visually compelling HTML5/JavaScript applications that work natively great on mobile and tablet devices.
            </p>
            <p>
              Functional, convenient and visually compelling HTML5/JavaScript applications that work natively great on mobile and tablet devices.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h3>Build the right Solutions with the Right technology</h3>
          <p className="lead">
            Leveraging new approaches to web development including progressive web apps, we bring front-end, back-end, and architecture ability together to deliver on your business needs and maximize delivery speed.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <div className="bg-grey p-5 text-center rounded">
              <h4>Agile methodologies</h4>
              <p>
                The Empuls3 manifesto empowers our software development process to be iterative, collaborative, and responsive, so our team can reduce inefficiencies and build products as fast as possible.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <div className="bg-grey p-5 text-center rounded">
              <h4>Commitment to compliance</h4>
              <p>Our team strictly adheres to domestic and international legal regulations and ensures that only secure code is used in your software applications.</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <div className="bg-grey p-5 text-center rounded">
              <h4>Code quality</h4>
              <p>
                The Empuls3 team performs a code analysis and continuous code quality inspection to reduce the technical debt and mitigate any possible risks.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <div className="bg-grey p-5 text-center rounded">
              <h4>Dedicated teams</h4>
              <p>
                Our teams possess a do-or-die mentality and a forward-looking approach to build a solution that will help you thrive in the future.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    <Container fluid className="pt-5 bg-grey mb-5">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <WebImgTwo/>
        </Col>
        <Col sm={12} md={12} lg={8} className="d-flex justify-content-center p-5">
          <div className="my-auto col">
              <h2>We build websites of different kinds</h2>
              <p>
                <strong>Business management.</strong> CRM systems, project management, and time tracking software, human resources
                management systems, business analytic apps, and paper flow automation tools.
              </p>
              <p>
                <strong>Real estate.</strong> Tools for homeowners, buyers, and tenants, as well as systems for agents and brokers. MLS data
                integration, “For Sale” printed ads, marketing tools.
              </p>
              <p>
                <strong>Education.</strong> Learning and testing process automation, personal assessment, student database, interactive
                textbooks.
              </p>
              <p>
                <strong>Healthcare.</strong> HIPAA-compliant systems for an ambulance, home care, skilled nursing facilities, assisted living
                facilities and plastic surgery clinics.
              </p>
              <p>
                <strong>E-commerce.</strong> An online marketplace, auctions, and group buying websites. Payment gateway integration,
                billing systems, multi-currency transactions, recurring payments, accounting and reporting tools.
              </p>
              <p>
                <strong>Marketing and advertising.</strong> Marketing automation tools, classified ads, affiliate and referral systems.
              </p>
              <p>
                And many other areas, like thematic travel agency, fashion studio or weather forecast service, etc.
              </p>

              <p>
                <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">let us help</a>
              </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5 ui-grey">
      <Row className="mb-5">
        <Col className="text-center">
          <h2>
            Frameworks and Platforms
            that we work with.
          </h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={6} lg={3} className="text-center">
              <h3>ASP.Net</h3>
              <p>
                Build scalable, secure & robust applications using the rich toolbox in Visual Studio.
              </p>
        </Col>
        <Col sm={12} md={6} lg={3} className="text-center">
              <h3>PHP</h3>
              <p>
                We create custom web solutions using PHP, support standard & custom CMS.
              </p>
        </Col>
        <Col sm={12} md={6} lg={3} className="text-center">
              <h3>Rails</h3>
              <p>
                We create custom web solutions using PHP, support standard & custom CMS.
              </p>
        </Col>
        <Col sm={12} md={6} lg={3} className="text-center">
              <h3>HTML5</h3>
              <p>
                Make your website fully compatible with the next generation web standards.
              </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={6} lg={3} className="text-center ">
              <h3>Shopify</h3>
              <p>
                Easy and quick to get started. Create an online store or add eCommerce to an existing site.
              </p>
        </Col>
        <Col sm={12} md={6} lg={3} className="text-center">
              <h3>Magento</h3>
              <p>
                Offers flexible solutions that address a wide range of business needs and budgets.
              </p>
        </Col>
        <Col sm={12} md={6} lg={3} className="text-center">
            <h3>WordPress</h3>
            <p>
              You can manage blogs & products. One of the top open-source PHP CMS options.
            </p>
        </Col>
        <Col sm={12} md={6} lg={3} className="text-center">
            <h3>Node.js</h3>
            <p>
              Google JavaScript engine. Translation: fast and scalable web apps in a result.
            </p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h2>Tell Us Your Vision</h2>
          <p className="lead">
            Driven by passion, our dedicated team is all about helping you change the game in your industry.
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

export default WebPage
