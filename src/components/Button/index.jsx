import React from 'react';
import { ButtonWrapper } from './styles';

const Button = (props) => {
  const { onClick, className, children, size = 'md', ...rest } = props;
  return (
    <ButtonWrapper
      onClick={onClick}
      className={className}
      size={size}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
