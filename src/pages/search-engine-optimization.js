import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import SeoBanner from "../components/seo/seo-banner"
import SeoImgTwo from "../components/seo/seo-img-two"
import SeoImgThree from "../components/seo/seo-img-three"
import SeoImgOne from "../components/seo/seo-img-one"

const SeoPage = () => (
  <Layout>
    <SEO title="Search Engine Optimization" />

    <Header/>

    <Container className="bg-grey mb-5 mt-5 p-5">
      <Row className="mb-5 text-center">
        <Col>
          <p className="lead sub-title">
            strategy. creativity. technology. analytics.
          </p>
          <h1>
            Search Engine Optimization
          </h1>
          <p className="lead">
            Google provides more ROI than any other digital platform.
          </p>

          <p className="mt-5">
            <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
            <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <SeoBanner/>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row>
        <Col>
          <h2>Reach The First Page on Google</h2>
          <p className="lead">How much SEO will it take to get your business to page 1 of Google?</p>

          <p>
            Good Search Engine Optimization (SEO) is invaluable. It helps ensure that your target audience finds your website and get relevant content once they arrive. In practical terms, that means they are more likely to be engaged by your business or product, which means increased conversion.
          </p>
          <p>
            Empuls3 is one of the best SEO companies in the US, as we are experts in achieving SEO goals. Our team of highly skilled SEO consultants & experts can help your website’s SEO through keyword analysis, content creation, and a well-structured user journey.
          </p>
          <p>
            Besides optimizing your primary website, we can help make your brand more visible through social bookmarking, social networking and business profile creation.
          </p>

          <h3>Why is SEO (Search Engine Optimization) service is important for you?</h3>

          <p>
            Good Search Engine Optimization service is all about content, and as the best search engine optimization company we know this very well. If your audience finds content that is relevant to them, they are more likely to engage with your website, resulting in higher conversion rates for your business.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <p>
              Simple design – visitors to your website need to be able to find the information they are looking for quickly. Simple, uncluttered visuals help them to do this.
            </p>
            <p>Keywords – relevant keywords in metadata, description fields, and body content and headers can help a site be indexed by search engines.</p>
            <p>Clear user journey – a well-structured site that breaks down the information and uses headers is more visible to search engines.</p>
            <p>Linking – linking within your website helps consolidate the site’s message and identify key information areas.</p>
            <p>Calls to Action – clear CTAs are hard to resist and will encourage your visitors to convert. They should be clearly visible (ideally above the fold) and a mix of graphics and text.</p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <SeoImgOne/>
        </Col>
      </Row>
    </Container>

    <div className="bg-p p-5 mb-5 purple-right">
      <Container fluid>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <SeoImgTwo/>
          </Col>
          <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col">
              <h2 className="txt-y">What Our Search Engine Optimisation (SEO) Will Offer You?</h2>
              <p className="text-white">
                Our professional SEO team at Empuls3 can improve your Search Engine Optimization at every stage – from creating and implementing a strategy for a new website to monitoring existing content to identify improvements at the most affordable price.
              </p>
              <p className="text-white">
                On-page optimization – we help your website through clear, relevant content, good site structure, use of anchor and image text and internal link strategies.
              </p>
              <p className="text-white">
                Landing page optimization and analysis – we examine the performance of landing pages according to the rules of good search engine optimization, to ensure CTAs are visible and maximum conversion is achieved.
              </p>
              <p className="text-white">
                Site speed optimization – visitors are more likely to convert if they can find what they’re looking for quickly. We help speed up your website, so they are not left hanging.
              </p>
              <p className="text-white">
                Off-page optimization – we create best SEO strategies to increase targeted traffic to your website through white hat SEO link building with relevant websites and advocates.
              </p>
              <p className="text-white">
                Business profile creation – we create the best profiles using a variety of social platforms to spread the word about your business.
              </p>
              <p className="mt-5">
                <a href="/contact" className="btn btn-pink btn-lg pl-lg-5 pr-lg-5">get a free quote</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2>What is an SEO campaign?</h2>
          <p className="lead">As an owner of a website, having your site maximized for search engine optimization, or SEO, is  very critical to attracting — and keeping — the kind of traffic you need for success.</p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <h3>Contents</h3>
          <p>
            The most important aspect to position a web page is quality content. We make sure that your website offers the solutions that people are looking for, to obtain greater relevance and recognition, both from search engines and from users.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h3>Platform</h3>
          <p>
            Does Google access your site? Interpret it, index it and position it as it should? The positioning of a web page depends on hundreds of factors that will determine the treatment that the search engines will give to your site. To position your website in search engines, you must send the correct signals.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <h3>Performance</h3>
          <p>
            How long does your site take to load? The users, and therefore the search engines, demand faster and faster pages, abandoning those that are slow to load. We optimize the loading of your site to provide an experience that encourages sales.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h3>Link Building</h3>
          <p>
            The link building is one of the main SEO techniques (web positioning), but the ways to do it are very varied. For us, link building means generating relationships between your company and those who search for your products on different platforms.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <SeoImgThree/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <h3>Usability</h3>
          <p>
            In order for your business to grow, you need the traffic you receive to convert. Do you sell a product? Do you have a blog? Regardless of your conversion, we help you make your site much more usable by increasing the conversion rates.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h3>Analytics</h3>
          <p>
            We are an SEO agency focused on performance: we are interested in obtaining results, as well as that you can learn to interpret the different metrics offered by each measurement tool, such as Google Analytics. You will learn to measure and enhance your success.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6}>
          <h3>Consultancy</h3>
          <p>
            Digital marketing is vertiginous, and a decision can mean the success or the disappearance of your brand. We offer a comprehensive web positioning consultancy in which you only need to worry about the quality of your product, we will advise you.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h3>Reporting</h3>
          <p>
            We generate monthly reports based on the results of web positioning and organic traffic obtained. In addition, we generate custom reports in Google Analytics so you can follow the evolution of the SEO campaign in real-time.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>SEO Services that Grow Traffic and Increase Revenue</h2>
          <p className="lead">
            If you’re looking to reap the benefits of an SEO campaign, you need a company that can provide SEO management services that earn you the highest possible return on investment (ROI).
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

export default SeoPage
