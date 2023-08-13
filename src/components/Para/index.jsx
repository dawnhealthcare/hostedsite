import React from 'react';
import { ParaWrapper } from './styles';

const Para = (props) => {
  const { className, children, hero, ...rest } = props;
  return (
    <ParaWrapper {...rest} className={className} hero={hero}>
      {children}
    </ParaWrapper>
  );
};

export default Para;
