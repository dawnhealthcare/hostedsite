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
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { Helmet } from 'react-helmet';

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
          author->{name, "image": image.asset->url},
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
    <>
      <Helmet>
        <title>{`Dawn Health ${post?.title || 'loading'}`}</title>
        <meta name="description" content={post?.title} />
        <meta name="keywords" content="dawnhelath,care" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta
          property="og:url"
          content={`https://dawnhealth.care/blogs/${slug}`}
        />
        <meta
          name="image"
          property="og:image"
          content={`${post?.mainImage.asset.url}`}
        />
      </Helmet>
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
                  <Row className="align-items-center pt-5 h-100vh">
                    <Col
                      md={12}
                      xl={{ span: 10, offset: 1 }}
                      className="wow animate__animated animate__zoomIn text-center"
                    >
                      <Heading innerClass="text-white" main="Dawn Health Blog">
                        {post?.title}
                      </Heading>
                      <Para hero className="text-white">
                        {post?.description}
                      </Para>
                      <Para className="text-white mb-0 d-flex align-items-center justify-content-center">
                        <span className="me-2">By</span>
                        <img
                          style={{ width: '40px', height: '40px' }}
                          src={post?.author?.image || 'l'}
                          className="rounded-circle me-2 author-image"
                          alt="author"
                        />
                        {post?.author?.name}
                      </Para>
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
            <SectionWrapper className="bg-white pt-4">
              <Container>
                <Row>
                  <Col lg={{ span: 8, offset: 2 }}>
                    <div className="d-flex align-items-center gap-2 pt-3">
                      {/* <Para className="mb-0">Share to</Para> */}
                      {/* <LinkedinShareButton
                        source="dawnhealth.care"
                        url={`https://dawnhealth.care/blogs/${slug}`}
                        summary={post?.description}
                        title={post?.title}
                      >
                        <LinkedinIcon size={32} round={true} />
                      </LinkedinShareButton> */}
                      {/* <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://dawnhealth.care/blogs/${slug}/&title=${post?.title}&summary=dawnhealth.care&source=dawnhealth.care`}
                        onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"
                      >
                        <img
                          src="http://chillyfacts.com/wp-content/uploads/2017/06/LinkedIN.gif"
                          alt=""
                          width="54"
                          height="20"
                        />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://dawnhealth.care/blogs/${slug}`}
                        target="_blank"
                      >
                        share
                      </a> */}
                      {/* <FacebookShareButton
                        quote={post?.title}
                        hashtag="dawnhealth"
                        url={`https://dawnhealth.care/blogs/${slug}`}
                      >
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>
                      <WhatsappShareButton
                        className="me-2"
                        url={`https://dawnhealth.care/blogs/${slug}`}
                        title={post?.title}
                      >
                        <WhatsappIcon size={32} round={true} />
                      </WhatsappShareButton> */}
                    </div>
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
            <SectionWrapper className="related-blogs">
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
                        .splice(0, 3)
                        ?.map(
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
                                author={author}
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
    </>
  );
};

export default BlogPage;
