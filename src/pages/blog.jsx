import React, { useEffect, useState } from 'react';
import { BlogPageWrapper, Hero, Overlay, SectionWrapper } from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import BlogCard from '../components/BlogCard';
import SubHeading from '../components/SubHeading';
import { client } from '../client';
import { useParams } from 'react-router-dom';
import SanityBlockContent from '@sanity/block-content-to-react';
import ErrorPage from './error';
import Loader from '../components/Loader';
import {
  FacebookIcon,
  FacebookShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
} from 'react-share';

const BlogPage = ({ setIsBlogPage }) => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);
  useEffect(() => {
    setIsBlogPage(true);
    return () => {
      setIsBlogPage(false);
    };
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          description,
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
      .then((data) => {
        setBlogs(data);
        setBlogsLoading(false);
      })
      .catch((err) => {
        setBlogsLoading(false);
      });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          description,
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
      )
      .then((data) => {
        setPost(data[0]);
        setPostLoading(false);
      })
      .catch((error) => {
        setPostLoading(false);
      });
  }, [slug]);
  return (
    <BlogPageWrapper>
      {postLoading ? (
        <Loader message="Fetching blog data..." />
      ) : !post ? (
        <ErrorPage />
      ) : (
        <>
          <Hero bg={post?.mainImage.asset.url}>
            <Overlay>
              <Container>
                <Row className="align-items-center reverse h-100vh">
                  <Col
                    md={12}
                    lg={{ span: 8, offset: 2 }}
                    className="wow animate__animated animate__fadeInLeft text-center"
                  >
                    <Heading innerClass="text-white" main="Dawn Health Blog">
                      {post?.title}
                    </Heading>
                    <Para className="text-white">{post?.description}</Para>
                  </Col>
                  {/* <Col lg={1}></Col>
                <Col
                  md={6}
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
                </Col> */}
                </Row>
              </Container>
            </Overlay>
          </Hero>
          <SectionWrapper className="bg-white">
            <Container>
              <Row>
                <Col md={12}>
                  <LinkedinShareButton
                    url={`https://dawnhealth.care/blogs/${slug.current}`}
                  >
                    <span className="myShareCountWrapper">
                      <LinkedinIcon size={32} round={true} />
                    </span>
                  </LinkedinShareButton>
                  <FacebookShareButton
                    url={`https://dawnhealth.care/blogs/${slug.current}`}
                  >
                    <span className="myShareCountWrapper">
                      <FacebookIcon size={32} round={true} />
                    </span>
                  </FacebookShareButton>
                </Col>
              </Row>
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
                      ?.map(
                        ({
                          id,
                          title,
                          description,
                          publishedAt,
                          mainImage,
                          slug,
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
                            />
                          </Col>
                        )
                      )}
                  </Row>
                </>
              )}
            </Container>
          </SectionWrapper>
        </>
      )}
    </BlogPageWrapper>
  );
};

export default BlogPage;
