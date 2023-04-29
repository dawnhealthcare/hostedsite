import React, { useEffect } from 'react';
import { AllBlogsWrapper, Hero, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import BlogCard from '../components/BlogCard';
import SubHeading from '../components/SubHeading';
// import { blogs } from '../data/blogs';
import { useState } from 'react';
import { client } from '../client';

const AllBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          author->{name},
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          body,
          publishedAt,
          slug
        }`
      )
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <AllBlogsWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh text-center">
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
          {blogs.length > 0 && (
            <Row className="align-items-center pb-main">
              <Col md={12} className="mb-5">
                <BlogCard
                  horizontal
                  title={blogs[0]?.title}
                  desc={blogs[0]?.desc}
                  slug={blogs[0]?.slug.current}
                  createdAt={blogs[0]?.publishedAt}
                  image={blogs[0]?.mainImage?.asset?.url}
                  category="Blog"
                />
              </Col>
            </Row>
          )}
          <Row>
            {blogs
              ?.slice(1)
              .map(({ id, title, desc, publishedAt, mainImage, slug }) => (
                <Col
                  key={id}
                  md={4}
                  className="text-start wow animate__animated animate__zoomIn mb-4"
                >
                  <BlogCard
                    title={title}
                    desc={desc}
                    createdAt={publishedAt}
                    image={mainImage?.asset?.url}
                    slug={slug.current}
                    category="Blog"
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
