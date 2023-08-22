import React from 'react';
import { Hero, ResourcesPageWrapper, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import Main from './../assets/resources/main.png';
import { SectionHeader } from '../components/SectionHeader';
import { books, ownBooks, websites } from '../data/resources';
import BookCard from '../components/BookCard';
import WebsiteCard from '../components/WebsiteCard';

const ResourcesPage = () => {
  return (
    <ResourcesPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Resources">For Engaged Parents</Heading>
              <Para hero>
                Unleash your child's brilliance! Our holistic approach unlocks
                potential, promoting brain health and resilience. With parents
                and schools as partners, we empower the next generation for
                academic and personal success.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img src={Main} className="img-fluid main-image" alt="main" />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className="pb-main"
                title="Revitalize Your Wellness Journey"
              >
                Explore Dawn Health's Expertly Authored Reading Materials
              </SectionHeader>
            </Col>
          </Row>
          <Row>
            {ownBooks.map((book) => (
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={book.id}
                className="wow animate__animated animate__zoomIn mb-4"
              >
                <BookCard image={book.image} link={book.link} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="pb-main" title="Explore More">
                Dive into our Additional Reading Materials for Enhanced
                Wellbeing
              </SectionHeader>
            </Col>
          </Row>
          <Row>
            {books.map((book) => (
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={book.id + book.image}
                className="wow animate__animated animate__zoomIn mb-4"
              >
                <BookCard image={book.image} link={book.link} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className=""
                title="Non-for-Profit Organizations"
              ></SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            {websites.map((website) => (
              <Col
                md={6}
                lg={4}
                xl={3}
                key={website.title}
                className="wow animate__animated animate__zoomIn mb-4"
              >
                <WebsiteCard
                  image={website.image}
                  title={website.title}
                  link={website.link}
                  bg={website.bg || 'none'}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </SectionWrapper>
    </ResourcesPageWrapper>
  );
};

export default ResourcesPage;
