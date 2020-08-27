import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/includes/footer"
import Header from "../components/includes/header"
import {Container, Row, Col } from "react-bootstrap"
import BannerImg from "../components/home/home-banner"
import RightGrey from "../components/right-grey"
import PeopleImg from "../components/home/people"
import DigiImg from "../components/home/dig-marcm"
import TestimonialsImg from "../components/home/testimonials"
import WebHomeImg from "../components/home/web-home"
import SeoHomeImg from "../components/home/seoImg"
import PpcHomeImg from "../components/home/ppc-home"

const IndexPage = () => (
  <Layout>
    <SEO title="Full-Service Creative Agency" />

    <Header/>

    <Container fluid className="home-banner mb-5">
      <Row className="h-100">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col text-center p-5">
            <p className="lead sub-title">
              strategy. creativity. technology. analytics.
            </p>
            <h1>
              WE’RE A MULTI-FACETED
              FULL-SERVICE CREATIVE AGENCY.
            </h1>
            <p className="lead">
              The way people communicate has changed. Your marketing strategy should too.
            </p>

            <p>
              <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">about us</a>
              <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">our work</a>
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6} className="text-center right-grey">
          <BannerImg/>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
            <PeopleImg/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
                <h2>We’re More Than an Agency.</h2>
              <p>
                Empuls3 is a Dallas based Web and App Development Digital Agency. Our goal is to create pain-free marketing solutions that will help to grow your business.
              </p>
            <p>
              <a href="/agency" className="btn btn-pink">about us</a>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>How Can Empuls3 Help?</h2>
          <p className="lead">
            Nearly 50% of businesses use different acts of digital marketing without a strategy. Only 13% of those businesses with a strategy execute it successfully.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <DigiImg/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={4} className="text-center">
          <WebHomeImg/>
          <h3><a href="#">Website Design &amp; Development</a></h3>
          <p>Creative and modern websites tailored to your industry. All with with SEO in mind to give you that edge over your competitors.</p>
        </Col>
        <Col sm={12} md={12} lg={4} className="text-center">
          <SeoHomeImg/>
          <h3><a href="#">Search Engine <br></br>Optimisation</a></h3>
          <p>Using the latest SEO techniques we’ll keep you ahead of your industry and your competitors in the dust.</p>
        </Col>
        <Col sm={12} md={12} lg={4} className="text-center">
          <PpcHomeImg/>
          <h3><a href="#">Pay Per Click &amp; Social Media Marketing</a></h3>
          <p>We can get the most out of your budget, targeting keywords that will get you more bang for your buck.</p>
        </Col>
      </Row>
    </Container>

    <Container fluid className="mb-5">
      <Row>
        <Col sm={12} md={12} lg={4}>
          <TestimonialsImg/>
        </Col>
        <Col sm={12} md={12} lg={8} className="bg-p p-5 d-flex justify-content-center">
          <div className="my-auto col text-center">
            <h2 className="text-white">Our Testimonials</h2>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row>
        <Col className="text-center">
          <h2>A Few From Our Satisfied Clients</h2>
          <p className="lead">
            We offer our clients an integrated approach. A full digital strategy – not just a website or app. The whole spectrum of digital agency services underpinned by an enthusiastic understanding of your business, your audience, and your objectives.
          </p>

          <p className="text-center">
            <a href="/agency" className="btn btn-pink mt-5">view more of our work</a>
          </p>
        </Col>
      </Row>
    </Container>

    <Footer/>
    
  </Layout>
)

export default IndexPage
