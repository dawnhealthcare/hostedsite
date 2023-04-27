import React from 'react';
import { AllBlogsWrapper, Hero, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import BlogCard from '../components/BlogCard';
import SubHeading from '../components/SubHeading';
import { blogs } from '../data/blogs';

const AllBlogsPage = () => {
  return (
    <AllBlogsWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh text-center">
            <Col
              md={12}
              lg={{ span: 8, offset: 2 }}
              className="wow animate__animated animate__zoomIn"
            >
              <Heading main="Dawn Health Blog">
                Empowering Your Wellness Journey at Dawn
              </Heading>
              <Para>
                Stay on top of the latest news, trends, and best practices
                around supporting children mental health. Explore ideas of
                industry thought leaders and the Dawn Health care team.
              </Para>
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row className="pb-main">
            <Col>
              <SubHeading>Featured blogs</SubHeading>
              <Para>
                Explore the best of the blogosphere with our featured picks.
              </Para>
            </Col>
          </Row>
          <Row className="align-items-center pb-main">
            <Col md={12} className="mb-5">
              <BlogCard
                horizontal
                title={blogs[1].title}
                desc={blogs[1].desc}
                createdAt={blogs[1].createdAt}
                image={blogs[1].image}
                category={blogs[1].category}
              />
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
    </AllBlogsWrapper>
  );
};

export default AllBlogsPage;
