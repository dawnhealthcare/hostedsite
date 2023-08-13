import React, { useEffect } from 'react';
import { AllBlogsWrapper, Hero, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import BlogCard from '../components/BlogCard';
import SubHeading from '../components/SubHeading';
import { useState } from 'react';
import { client } from '../client';
import Loader from '../components/Loader';

const AllBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
          title,
          description,
          author->{name, "image": image.asset->url},
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
      .then((data) => {
        setBlogsLoading(false);
        setBlogs(data);
      })
      .catch((err) => {
        setBlogsLoading(false);
      });
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
                Empowering Mental Health Resilience & Brain Health
              </Heading>
              <Para hero>
                Embark on a journey into the forefront of children's mental
                health with Dawn Health. Connect with industry leaders who are
                also parents, unlock expert insights, and unearth breakthroughs
                to nurture your child's well-being. Stay ahead of the curve and
                elevate your knowledge with our unparalleled resources.
              </Para>
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        {blogsLoading ? (
          <Loader fix message="Fetching blogs" />
        ) : blogs.length > 0 ? (
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
                    desc={blogs[0]?.description}
                    slug={blogs[0]?.slug.current}
                    createdAt={blogs[0]?.publishedAt}
                    image={blogs[0]?.mainImage?.asset?.url}
                    category="Blog"
                    author={blogs[0]?.author}
                  />
                </Col>
              </Row>
            )}
            <Row>
              {blogs
                ?.slice(1)
                .map(
                  ({
                    id,
                    title,
                    description,
                    publishedAt,
                    mainImage,
                    slug,
                    author,
                  }) => (
                    <Col
                      key={id}
                      md={4}
                      className="text-start wow animate__animated animate__zoomIn mb-4"
                    >
                      <BlogCard
                        title={title}
                        desc={description}
                        createdAt={publishedAt}
                        image={mainImage?.asset?.url}
                        slug={slug.current}
                        category="Blog"
                        author={author}
                      />
                    </Col>
                  )
                )}
            </Row>
          </Container>
        ) : (
          <Para className="text-center">No data found</Para>
        )}
      </SectionWrapper>
    </AllBlogsWrapper>
  );
};

export default AllBlogsPage;
