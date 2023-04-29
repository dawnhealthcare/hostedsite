import React, { useEffect, useState } from 'react';
import { BlogPageWrapper, Hero, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import Main2 from './../assets/about/main2.jpg';
import Main from './../assets/blog/main.png';
import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import SubHeading from '../components/SubHeading';
import { client } from '../client';
import { useParams } from 'react-router-dom';
import SanityBlockContent from '@sanity/block-content-to-react';

const BlogPage = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
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

  useEffect(() => {
    const fetchPost = async () => {
      const result = await client.fetch(
        `*[slug.current == $slug]{
          title,
          author->{name},
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          body
        }`,
        { slug }
      );
      setPost(result[0]);
    };
    fetchPost();
  }, [slug]);
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
              <Heading main="Dawn Blog">{post?.title}</Heading>
              <Para>
                Even for kids, the holidays can be a stressful time. Check out
                six tips to support your child's mental health this holiday
                season.
              </Para>
            </Col>
            <Col lg={1}></Col>
            <Col
              md={12}
              lg={5}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <div className="egg main-image">
                <img
                  src={post?.mainImage.asset.url}
                  className="img-fluid w-100"
                  alt="main image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper className="bg-white">
        <Container>
          <Row className="blog-body pb-main">
            <Col lg={{ span: 8, offset: 2 }} className="pt-3">
              <SanityBlockContent
                blocks={post?.body}
                dataset="production"
                projectId="4lddormh"
              />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <Container>
          {blogs.length > 1 && (
            <>
              <Row className="pb-main">
                <Col>
                  <SubHeading>Related blogs</SubHeading>
                  <Para>Posts you may like</Para>
                </Col>
              </Row>
              <Row>
                {blogs
                  .filter((blog) => blog.slug.current !== slug)
                  ?.map(({ id, title, desc, publishedAt, mainImage, slug }) => (
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
            </>
          )}
        </Container>
      </SectionWrapper>
    </BlogPageWrapper>
  );
};

export default BlogPage;
