import React from 'react';
import { BeatIcon, HeartIcon, SheildIcon, StarIcon } from '../Icons';
import {
  DescWrapper,
  IconWrapper,
  TitleWrapper,
  ValueCardWrapper,
} from './styles';

const ValueCard = (props) => {
  const { className, title, children, icon } = props;
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
      <IconWrapper>{Icon}</IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <DescWrapper>{children}</DescWrapper>
    </ValueCardWrapper>
  );
};

export default ValueCard;
