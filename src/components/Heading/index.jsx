import React from 'react';
import { HeadingWrapper, InnerMainHeading } from './styles';

const Heading = (props) => {
  const { main, className, children, innerClass, ...rest } = props;
  return (
    <HeadingWrapper className={`${className}`} {...rest}>
      {main && <InnerMainHeading>{main}</InnerMainHeading>}
      <span className={innerClass}>{children}</span>
    </HeadingWrapper>
  );
};

export default Heading;
