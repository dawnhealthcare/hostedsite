import React from 'react';
import { HeadingWrapper, InnerMainHeading } from './styles';

const Heading = (props) => {
  const { main, className, children, ...rest } = props;
  return (
    <HeadingWrapper className={`${className}`} {...rest}>
      {main && <InnerMainHeading>{main}</InnerMainHeading>}
      {children}
    </HeadingWrapper>
  );
};

export default Heading;
