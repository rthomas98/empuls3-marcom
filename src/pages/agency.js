import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import AgencyBanner from "../components/agancy/agency-banner"
import AgencyBannerTwo from "../components/agancy/agency-banner-two"
import AgencyImgThree from "../components/agancy/agency-img-three"
import AgencyImgFour from "../components/agancy/agency-img-four"
import AgencyImgFive from "../components/agancy/agency-img-five"
import AgencyImgSix from "../components/agancy/agency-img-six"
import AgencyImgSeven from "../components/agancy/agency-img-seven"
import AgencyImgEight from "../components/agancy/agency-img-eight"

const AgencyPage = () => (
  <Layout>
    <SEO title="Who We Are" />

    <Header/>

    <Container className="pt-5">
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col text-center">
            <AgencyBanner/>
            <p className="lead sub-title">
              strategy. creativity. technology. analytics.
            </p>
            <h1>
              Our Agency
            </h1>
            <p className="lead">
              It’s Not About the Individuals, It’s About the Culture.
            </p>

            <p className="mt-5">
              <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
              <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} >
          <AgencyBannerTwo/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <h2>
            So, who is Empuls3?
          </h2>
          <p className="lead">
            The best team, the best technology!
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <AgencyImgThree/>
          <p>
            Empuls3 is composed of a professional team that develops effective digital marketing strategies for forward-thinking businesses. Empuls3 provides superior service and quality workmanship on all projects for our clients.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <AgencyImgFour/>
          <p>
            Our company was founded on the notion that we can help all businesses, whether large or small, to build and maintain a strong client base and to sustain and enhance those relationships.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <AgencyImgFive/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
              <p>
                That’s why we don’t commoditize our digital marketing solutions. Instead, we present a plan based on research and experience, but remain agile, making recommendations and updates based on data.
              </p>
            <p>
              This approach allows us to work with you to achieve your goals, whether that’s a reduced cost of customer acquisition, a shortened sales cycle, better-qualified leads or increased brand awareness.
            </p>
            <a href="#" className="btn btn-pink pl-lg-5 pr-lg-5">lets get started</a>
          </div>
        </Col>
      </Row>
    </Container>

    <div className="bg-p pt-5 mb-5">
      <Container>
        <Row className="mb-5">
          <Col sm={12} md={12} lg={7} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h3 className="txt-y">
                We know the value of your time and budget.
              </h3>
              <p className="lead">
                We make digital bright and the human experience brighter.
              </p>
              <p className="text-white">
                Our mission is to provide innovative and effective integrated brand marketing solutions that help our partners realize their business goals. Our goal is to foster their growth by delivering results-oriented brand marketing strategies that improve our clients’ awareness and increases their bottom line.
              </p>
              <p className="text-white">
                We like to have fun, but we are serious about results. That’s why we recommend tactics that make sense, even if it means less money in our pocket. We have strong opinions, but no attitude. We know our craft, and never lose sight of what matters most: OUR relationship. Because WE only succeed when YOU succeed.
              </p>
              <p>
                <a href="/work" className="btn btn-pink pl-lg-5 pr-lg-5">view our work</a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <AgencyImgSix/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2>How We Work</h2>
          <p className="lead">
            A collection of creatives on a passion and results-driven mission to design, write and code custom digital marketing solutions not just for our clients, but for their clients. We’re where the right brain meets the left brain and our strategy-based services are built on real relationships, not egos.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="text-center">
          <AgencyImgSeven/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3 className="txt-pink">Discover</h3>
            <p>
              Our strategy team answers this question through consumer insights, ecosystem planning, and reframing problems to enable businesses to think, act and communicate more effectively.
            </p>
            <h3 className="txt-pink">Strategize</h3>
            <p>
              Every client is different, so we like to dig in and develop a custom digital marketing strategy that can help you overcome the unique challenges identified in the discovery phase.
            </p>
            <h3 className="txt-pink">Create</h3>
            <p>
              After a direction is determined in the strategy phase, we really get to work researching your competition, reviewing analytics, brainstorming features and drafting designs and copy.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="text-center">
          <AgencyImgEight/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3 className="txt-pink">Build</h3>
            <p>
              Empuls3 brings a proven method to help clients gain clarity around their requirements, their users, and the technology required to bring their great ideas to reality.
            </p>
            <h3 className="txt-pink">Measure</h3>
            <p>
              Metrics are key to determining what’s working. And what’s not. We provide detailed weekly / monthly reports to showcase ROI. We’ll even walk you through the data so you can tell your boss how awesome you are.
            </p>
            <p>
              <a href="/contact" className="btn btn-y pl-lg-5 pr-lg-5">lets get started</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Footer/>

  </Layout>
)

export default AgencyPage
