import React from 'react';
import { ChatIcon } from '../Icons';
import {
  DescWrapper,
  IconWrapper,
  TitleWrapper,
  TestimonialCardWrapper,
} from './styles';

const TestimonialCard = (props) => {
  const { className, title, children, icon } = props;
  return (
    <TestimonialCardWrapper className={className}>
      <IconWrapper>
        <ChatIcon />
      </IconWrapper>
      <DescWrapper>{children}</DescWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </TestimonialCardWrapper>
  );
};

export default TestimonialCard;
