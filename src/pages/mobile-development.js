import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/includes/header"
import Footer from "../components/includes/footer"
import { Col, Container, Row } from "react-bootstrap"
import MobileBanner from "../components/mobile/mobile-banner"
import RespondBanner from "../components/responsive/respond-banner"
import MobileImgTwo from "../components/mobile/mobile-img-two"
import MobileImgOne from "../components/mobile/mobile-img-one"
import MobileImgThree from "../components/mobile/mobile-img-three"

const MobilePage = () => (
  <Layout>
    <SEO title="Mobile Development" />

    <Header/>

    <div className="bg-grey pt-5 grey-right mt-5 mb-5">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={7} className="d-flex justify-content-center p-5">
            <div className="my-auto col">
              <p className="lead sub-title">
                strategy. creativity. technology. analytics.
              </p>
              <h1>
                Responsive Web Design
              </h1>
              <p className="lead">
                Whether you’re just starting out or evolving your brand, Empuls3 will help you grow.
              </p>

              <p className="mt-5">
                <a href="#" className="btn btn-y btn-lg pl-lg-5 pr-lg-5 mr-3">more about us</a>
                <a href="#" className="btn btn-y-o btn-lg pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <MobileBanner/>
          </Col>
        </Row>
      </Container>
    </div>

    <Container>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h2>Mobile Apps Development</h2>
            <p>
              The best websites, mobile apps, and campaigns are often designed to delight customers, but your business needs to attract users in the first place. Empul3 combines strategic thinking and performance marketing to generate an integrated experience that exceeds your users’ expectations and your business goals.
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <MobileImgOne/>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={5}>
          <MobileImgTwo/>
        </Col>
        <Col sm={12} md={12} lg={7} className="d-flex justify-content-center">
          <div className="my-auto col">
            <h2>Android App Development</h2>
            <p className="lead">
              Being one of the most widely supported mobile operating systems, Android grants access to a wide range of users, devices, and development capabilities.
            </p>
            <p>
              As an Android app development company, we have very high standards of quality. How do we live up to such high standards? We offer comprehensive end-to-end services: our clients can watch their apps change from vague ideas to amazing, well-received completed products.
            </p>
            <p>
              At Empuls3, we specialize in customizing, developing, designing, testing, and launching Android applications. Our experienced, problem-solving team can offer unique insights due to their years of experience and industry trust. We create custom Android apps to help you achieve your business goals and offer great user experiences, all while maintaining processes that are time-efficient and cost-effective for our clients.
            </p>
            <p className="mt-5">
              <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">lets get started</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="bg-p p-5 mb-5">
      <Row>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
            <div className="my-auto col text-white">
                <h2>iOS App Development</h2>
              <p className="lead">
                Explore the wide-ranging advantages that encourage worldwide clients to choose our iOS app development services.
              </p>
              <p className="text-white">
                The experiences that we have garnered in developing apps for iPhone for a vast range of industries and for a user base that belongs to all the different corners of the world, each known for their individual culture have resulted in an understanding that our team of iPhone app developers has now created. An understanding of what the users look for and what they should expect.
              </p>
              <p className="text-white">
                Empuls3’s iOS App Development Process includes covering of processes from ideation to post-launch maintenance for all – iPhone, Apple Watch, Apple TV, and iPad.
              </p>
              <p className="text-white">
                Irrespective of what platform the app has to be launched in, Empuls3’s team of iOS App Builders and Designers know all the technical requirements the different platforms come with, in-depth. The end result of every single of our iOS App is the same.
              </p>
              <p className="mt-5">
                <a href="/contact" className="btn btn-pink pl-lg-5 pr-lg-5">lets get started</a>
              </p>
            </div>
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className="my-auto col">
            <MobileImgThree/>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <Row className="mb-5">
        <Col>
          <h2>Cross-Platform App Development</h2>
          <p className="lead">
            Ionic Framework | React Native | Flutter
          </p>
          <p>
            The clear advantage of cross-platform mobile app development is that you’ll be able to deliver your concise message to everyone, rather than having several companies work on several types of apps (which often results in bugs, issues, and wildly differing user experiences).
          </p>

          <h2>Expertise in Cross-platform App Development</h2>
          <p>
            Cross-platform development is a smart choice for brands that want to be both recognizable and reckoned with, and those that want to provide consistent app experiences to everyone with a mobile device. The highly experienced Empuls3 team knows how to deal with the technical details of multi-platform app development. Using Ionic/React Native/Flutter world-class technologies, our developers can design and implement custom apps that feel native to each platform. We’ll turn code into something beautiful.s
          </p>
          <p>
            To start, our team can work with you to find out which platforms would be best suited for your mobile app. Cross-platform development will depend on several factors, including which devices your clients, customers, or employees most often use. Taking the time to conduct market research will lead to more successful outcomes; it’s one of the factors that set us apart as a cross-platform mobile app development company.
          </p>
        </Col>
      </Row>
      <Row className="mb-5 text-center">
        <Col>
          <h2>Our Mobile App Development Process</h2>
          <p className="lead">
            Explore the wide-ranging advantages that encourage worldwide clients to choose our iOS app development services.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={4}>
            <h3>Research</h3>
            <p>
              Once the client reaches us with the app idea, we do an in-depth analysis on the basis of demographics, behavior patterns, and target audience to refine the idea into a solid basis for an application.
            </p>
        </Col>
        <Col sm={12} md={12} lg={4}>
            <h3>Wireframing</h3>
            <p>
              Based on the client’s requirements, our experienced team of UI/UX designers will create the Wireframe of the visualized idea that clearly defines the user’s journey.
            </p>
        </Col>
        <Col sm={12} md={12} lg={4}>
            <h3>Prototyping</h3>
            <p>
              We make a set of prototypes for the app that serves as a quick source to view how the app works. We employ the industry’s best techniques to design prototypes and assure that things are going in the right direction.
            </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={12} lg={4}>
            <h3>Design &amp; Development</h3>
            <p>
              We follow the best development practices as per Human Interface Guidelines and start the development process. Our development capabilities provide a unique competitive advantage to your app.
            </p>
        </Col>
        <Col sm={12} md={12} lg={4}>
            <h3>Testing and QA</h3>
            <p>
              Our qualified and experienced QA team works the Standard and automated mobile app testing & analysis. We assure quality more than anything. Get a bug-free, established and approved mobile app with us.
            </p>
        </Col>
        <Col sm={12} md={12} lg={4}>
            <h3>Deployment to Live Server</h3>
            <p>
              Once the developed app fulfills your expectations, we take your app to live as per your launch plan.            </p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h2>Choose Empuls3 for Mobile Application Development</h2>
          <p className="lead">
            Let’s innovate together. Whether you are a start-up, a business enterprise or Fortune 500 company, hire our expert App development team today, to digitalize your business.
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

export default MobilePage
