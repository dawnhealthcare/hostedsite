import React from 'react';
import { BeatIcon, HeartIcon, SheildIcon, StarIcon } from '../Icons';
import {
  DescWrapper,
  IconWrapper,
  TitleWrapper,
  ValueCardWrapper,
} from './styles';

const ValueCard = (props) => {
  const { className, title, children, icon, sub } = props;
  const Icon =
    icon == 1 ? (
      <HeartIcon />
    ) : icon == 2 ? (
      <BeatIcon />
    ) : icon == 3 ? (
      <SheildIcon />
    ) : (
      <StarIcon />
    );
  return (
    <ValueCardWrapper className={className}>
      {icon && <IconWrapper>{Icon}</IconWrapper>}
      <TitleWrapper className="text-center">{title}</TitleWrapper>
      {sub && <p className="fw-semibold">{sub}</p>}
      <DescWrapper>{children}</DescWrapper>
    </ValueCardWrapper>
  );
};

export default ValueCard;
