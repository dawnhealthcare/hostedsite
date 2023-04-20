import React from 'react';
import { Title, WellnessCardWrapper } from './styles';
import Para from '../Para';

const WellnessCard = ({ image, title, desc }) => {
  return (
    <WellnessCardWrapper className="text-center">
      <img src={image} alt="wellness image" />
      <Title>{title}</Title>
      <Para className="mb-0">{desc}</Para>
    </WellnessCardWrapper>
  );
};

export default WellnessCard;
