import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import PpcBanner from "../components/ppc/ppc-banner"
import PpcImgTwo from "../components/ppc/ppc-img-two"
import PpcImgOne from "../components/ppc/ppc-img-one"
import PpcImgThree from "../components/ppc/ppc-img-three"
import PpcImgFour from "../components/ppc/ppc-img-four"

const PpcPage = () => (
  <Layout>
    <SEO title="Pay-Per-Click Management" />

    <Header/>

    <Container fluid className="pt-5 pb-5 mt-5 mb-5">
      <Row>
        <Col sm={12} md={12} lg={6} className="ui-grey pl-5">
            <PpcBanner/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center more-serv-grey">
          <div className="my-auto col text-center">
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
      </Row>
    </Container>


    <div className="bg-grey p-5 mb-5 grey-right">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h2>Pay-Per-Click Management That Works</h2>
              <p>
                Pay-Per-Click is a thriving and powerful platform to quickly generate increased web traffic that drives targeted visitors to your site. PPC experts at Empuls3 leverage our proprietary methods to provide exclusive pay-per-click strategies. We incorporate a variety of proven techniques to your campaigns, designed to make your PPC have the highest return on investment.
              </p>
              <p className="mt-5">
                <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <PpcImgOne/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <PpcImgTwo/>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3>Our PPC specialists will provide:</h3>

            <ul>
              <li>Custom market analyses</li>
              <li>Custom ad copy</li>
              <li>Re-marketing, Affinity, &amp; In-market targeting</li>
              <li>Ongoing keyword research</li>
              <li>Access to the entire AdWords and Bing advertising suites</li>
            </ul>
            <p>
              Our team will infuse a custom ad copy that is designed to be relevant to
              your landing pages, keywords, and desired lead (or conversion) type(s).
            </p>
            <p className="mt-5">
              <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">find out more</a>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3>Why We Love PPC</h3>
            <p>
              At Empuls3, we’re on a mission to change the world one click-at-a-time.
            </p>
            <p>
              There’s nothing more satisfying to us than seeing our clients’ businesses grow. It’s painful for us to watch ineffective PPC management waste a company’s potential.
            </p>
            <p>
              To get the most out of your campaigns, we create a consistent and compelling message that combines the right keywords, ad messaging and site experience to produce sales.
            </p>
            <p>
              We don’t stop there, though. We also test and analyze every aspect of your campaign and rigorously optimize it from click-to-close.
            </p>
            <p>
              The consistent combination of PPC management, optimization and analytics are how we grow businesses…one click-at-a-time.
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <PpcImgThree/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h3>Our Clients</h3>
            <p>
              We’ve produced great results for hundreds of clients and millions of dollars of ad spend. Odds are, you’ve already seen our work in action!
            </p>
            <p>
              To be honest, while we’ve helped clients with small budgets accomplish great things, we typically find that PPC advertising works best for companies with a PPC budget of at least $5,000/month. Below that threshold, it’s often hard to win in today’s competitive PPC market.
            </p>

            <h3>
              Transparency
            </h3>

            <p>
              At Empuls3, we believe that you have a right to know what is happening in your PPC campaigns. It’s your money and your campaigns, after all. And, since we do great work, we’ve got nothing to hide.
            </p>

            <p>
              Not only do our clients’ PPC accounts get weekly attention, but we also send weekly reports on how the campaigns are progressing and what we’ve done to improve things. That keeps you in the loop and us accountable.
            </p>

            <p>
              With Empuls3, you’ll never have to wonder about your PPC campaigns again.
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <PpcImgFour/>
        </Col>
      </Row>
      <Row className="bg-pink p-5 mb-5">
        <Col sm={12} md={12} lg={4} className="text-center">
          <p className="text-white"><small>Attract ready-to-buy prospects with</small></p>
          <h3 className="text-white">Keyword Targeting</h3>
          <p className="text-white">This isn’t newspaper advertising. Our paid search marketing agency precisely targets high-quality prospects by only showing up for keywords that are searched by a carefully defined audience.</p>
        </Col>
        <Col sm={12} md={12} lg={4} className="text-center">
          <p className="text-white"><small>Show up across the web with</small></p>
          <h3 className="text-white">Display Advertising</h3>
          <p className="text-white">Go beyond search engine marketing and the results page. Run your online advertising campaign across relevant websites and start capturing more leads with attention-grabbing imagery.</p>
        </Col>
        <Col sm={12} md={12} lg={4} className="text-center">
          <p className="text-white"><small>Restart the conversation with</small></p>
          <h3 className="text-white">Re-marketing Ads</h3>
          <p className="text-white">Don’t let good leads go bad! Even if visitors don’t contact your company the first time, you can follow them around the web with re-marketing ads to get them back into your sales and marketing funnel.</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Get leads fast with PPC Advertising Management.</h2>
          <p className="lead">
            We consistently increase leads and lower cost per lead for many businesses through pay per click services. Become the next success story and contact our PPC experts about our PPC services today.
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

export default PpcPage
