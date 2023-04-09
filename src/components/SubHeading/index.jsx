import React from 'react';
import { SubHeadingWrapper } from './styles';

const SubHeading = (props) => {
  const { className, children } = props;
  return (
    <SubHeadingWrapper className={className}>{children}</SubHeadingWrapper>
  );
};

export default SubHeading;
