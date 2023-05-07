import React from 'react';
import Button from '../Button';
import {
  BlogCardWrapper,
  BodyWrapper,
  CategoryChip,
  DateWrapper,
  ImageWrapper,
  Para,
  Title,
  TopWrapper,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({
  horizontal,
  title,
  image,
  desc,
  createdAt,
  category,
  slug,
  author,
}) => {
  const navigate = useNavigate();
  return (
    <BlogCardWrapper className={horizontal && 'd-flex align-items-strach'}>
      <ImageWrapper horizontal={horizontal}>
        <img
          alt="blog"
          src={image}
          style={horizontal && { maxHeight: '550px' }}
          className="img-fluid main"
        />
      </ImageWrapper>
      <BodyWrapper
        horizontal={horizontal}
        className={horizontal && 'align-self-center'}
      >
        <TopWrapper className="d-flex justify-content-between align-items-center mb-3">
          <CategoryChip>
            <p className="mb-0 d-flex align-items-center">
              <img
                src={author?.image || 'l'}
                className="rounded-circle me-2 author-image"
                alt="author"
              />
              <span className="name">{author?.name}</span>
            </p>
          </CategoryChip>
          <DateWrapper>
            {format(new Date(createdAt), 'dd MMMM yyyy')}
          </DateWrapper>
        </TopWrapper>
        <Title horizontal={horizontal} className="title">
          {title}
        </Title>
        <Para horizontal={horizontal} className="desc">
          {desc}
        </Para>
        <Button
          className={`mt-5 ${!horizontal && 'w-100'}`}
          onClick={() => navigate(`/blog/${slug}`)}
        >
          Read More
        </Button>
      </BodyWrapper>
    </BlogCardWrapper>
  );
};

export default BlogCard;
