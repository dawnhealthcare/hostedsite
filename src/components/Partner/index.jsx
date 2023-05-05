import React from 'react';
import { OuterWrapper, PartnerWrapper } from './styles';

const Partner = ({ image, link }) => {
  return (
    <OuterWrapper>
      <PartnerWrapper target="_blank" href={link}>
        <img src={image} className="img-fluid" alt="partner" />
      </PartnerWrapper>
    </OuterWrapper>
  );
};

export default Partner;
