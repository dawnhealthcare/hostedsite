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

const BlogCard = ({ horizontal, title, image, desc, createdAt, category }) => {
  console.log(title);
  const navigate = useNavigate();
  const onClick = (title) => {
    const slug = title.toLowerCase().split(' ').join('-');
    navigate(`/blogs/${slug}`);
  };
  return (
    <BlogCardWrapper className={horizontal && 'd-flex align-items-strach'}>
      <ImageWrapper horizontal={horizontal}>
        <img
          alt="blog"
          src={image}
          style={horizontal && { maxHeight: '550px' }}
          className="img-fluid"
        />
      </ImageWrapper>
      <BodyWrapper
        horizontal={horizontal}
        className={horizontal && 'align-self-center'}
      >
        <TopWrapper className="d-flex justify-content-between mb-3">
          <CategoryChip>
            <p className="mb-0">{category}</p>
          </CategoryChip>
          <DateWrapper>{createdAt}</DateWrapper>
        </TopWrapper>
        <Title horizontal={horizontal} className="title">
          {title}
        </Title>
        <Para horizontal={horizontal} className="desc">
          {desc}
        </Para>
        <Button
          className={`mt-5 ${!horizontal && 'w-100'}`}
          onClick={() => onClick(title)}
        >
          Read More
        </Button>
      </BodyWrapper>
    </BlogCardWrapper>
  );
};

export default BlogCard;
