import React from 'react';
import { ButtonWrapper } from './styles';

const Button = (props) => {
  const { onClick, className, children, ...rest } = props;
  return (
    <ButtonWrapper onClick={onClick} className={className} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
