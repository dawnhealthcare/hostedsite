import React from 'react';
import { Hero, InverstorsWrapper, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import Main from './../assets/investors/main.png';
import InvestorPDF from './../assets/investors/investors.pdf';
import PDFViewerComp from '../components/PDFViewer';
import DECK from './../assets/investors/deck2.pdf';
import Main2 from './../assets/about/2.png';

const InvestorsPage = () => {
  return (
    <InverstorsWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh reverse">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Our Investors">Join Us on a Journey</Heading>
              <Para>
                Welcome to Dawn Health, a virtual mental health company
                dedicated to promoting the well-being of adolescents and their
                parents. Our investor page is the gateway to a universe of
                opportunities to make a meaningful impact on mental health.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img
                src={Main}
                className="img-fluid main-image"
                alt="main image"
              />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={12}>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft pb-main"
                title="Investor Slideshare"
              >
                Investing in Dawn Health has the potential to unlock a world of
                financial possibility, with the promise of generating remarkable
                returns that could transform your future. Don't miss out on the
                chance to witness the power of your investment come to life and
                experience the thrill of watching your wealth grow
                exponentially. Join us on a journey towards financial
                prosperity, and see the amazing returns that Dawn Health can
                deliver!
              </SectionHeader>
            </Col>
            <Col md={12}>
              <div className="wow animate__animated animate__zoomIn">
                <PDFViewerComp path={DECK} />
              </div>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={12}>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft pb-main"
                title="Federal Focus on Adolescent Mental Health Care"
              >
                The U.S. Surgeon General's recent emphasis on adolescent mental
                health is a much-needed reminder of the critical importance of
                prioritizing the well-being of our youth. By shining a spotlight
                on this pressing issue, we can work towards a future where young
                people have the resources and support they need to thrive, both
                personally and academically. With this renewed focus on
                adolescent mental health, we have an opportunity to make a
                positive impact on the lives of countless young people and help
                them to reach their full potential. Let's join forces and
                prioritize the mental health of our youth today for a brighter
                tomorrow.
              </SectionHeader>
            </Col>
            <Col md={12}>
              <div className="wow animate__animated animate__zoomIn">
                <iframe
                  width="100%"
                  height="603"
                  src="https://www.youtube.com/embed/6-ZZAYMMH4g?start=946"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={6}>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft pb-main"
                title="School Board Members Survey"
              >
                The School Board Members Survey highlights the urgent need for
                increased focus on adolescent Mental Health and the need to
                better support students struggling with mental health
                challenges.
              </SectionHeader>
            </Col>
            <Col md={12}>
              <div className="wow animate__animated animate__zoomIn">
                <PDFViewerComp path={InvestorPDF} />
              </div>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper className="pb-5">
        <Container>
          <Row>
            <Col md={7}>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft pb-main"
                title="Investing to Making a Difference"
              ></SectionHeader>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
              <Para>
                As an investor, you have the chance to be part of something big
                and innovative. Our focus on primary and secondary prevention
                means we're not just treating mental health issues but also
                working to prevent them from happening in the first place.
              </Para>
              <Para>
                But what's the cost of admission, you may ask? Don't worry,
                we've made it both captivating and fun!
              </Para>
              <Para>
                Imagine you're about to embark on a journey to help teens and
                parents navigate the challenges of mental health. As you
                approach our investor page, you're greeted by a colorful map of
                destinations, each representing a different level of investment.
              </Para>
              <Para>
                The first stop is the "Compassionate Care" level, which offers
                free access to our basic resources and research on adolescent
                mental health. The next stop is "Empowering Support," which
                provides more in-depth access to our tools and programs for a
                modest investment.
              </Para>
              <Para>
                For those seeking to make a significant impact, our "Innovative
                Partnership" level provides exclusive access to our most
                advanced research and initiatives, with the potential for
                substantial financial returns.
              </Para>
              <Para>
                No matter which level you choose, you can be assured that your
                investment is helping to create a brighter future for
                adolescents and their families. Join us on this journey to make
                a difference in mental health, one investment at a time.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img
                src={Main2}
                className="img-fluid main-image"
                alt="main image"
              />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </InverstorsWrapper>
  );
};

export default InvestorsPage;
