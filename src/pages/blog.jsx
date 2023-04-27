import React from 'react';
import { BlogPageWrapper, Hero, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import Main2 from './../assets/about/main2.jpg';
import Main from './../assets/blog/main.png';
import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import SubHeading from '../components/SubHeading';

const BlogPage = () => {
  return (
    <BlogPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col
              md={12}
              lg={6}
              className="wow animate__animated animate__fadeInLeft"
            >
              <Heading main="Dawn Blog">
                RSV, the flu, and COVID-19: similarities, differences, and how
                to prevent all three
              </Heading>
              <Para>
                Even for kids, the holidays can be a stressful time. Check out
                six tips to support your child's mental health this holiday
                season.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <div className="egg">
                <img
                  src={Main2}
                  className="img-fluid main-image"
                  alt="main image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row className="pb-main">
            <Col>
              <SubHeading>Related blogs</SubHeading>
              <Para>Posts you may like</Para>
            </Col>
          </Row>
          <Row>
            {blogs?.map(({ id, title, desc, createdAt, image, category }) => (
              <Col
                key={id}
                md={4}
                className="text-start wow animate__animated animate__zoomIn mb-4"
              >
                <BlogCard
                  title={title}
                  desc={desc}
                  createdAt={createdAt}
                  image={image}
                  category={category}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </SectionWrapper>
    </BlogPageWrapper>
  );
};

export default BlogPage;
