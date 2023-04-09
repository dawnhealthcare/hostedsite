import React from 'react';
import { ParaWrapper } from './styles';

const Para = (props) => {
  const { className, children, ...rest } = props;
  return (
    <ParaWrapper {...rest} className={className}>
      {children}
    </ParaWrapper>
  );
};

export default Para;
