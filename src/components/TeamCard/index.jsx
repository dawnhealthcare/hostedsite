import React from 'react';
import Mark from './../../assets/team/mark.png';
import {
  ContentWrapper,
  ImagesWrapper,
  Name,
  Status,
  TeamCardWrapper,
} from './styles';

const TeamCard = (props) => {
  const { name, status, src, className, alt, lead } = props;
  return (
    <TeamCardWrapper className={className}>
      <ImagesWrapper>
        <img src={src} alt={alt} />
        {/* {lead && <img src={Mark} alt={alt} className="mark" />} */}
      </ImagesWrapper>
      <ContentWrapper>
        <Name>{name}</Name>
        <Status>{status}</Status>
      </ContentWrapper>
    </TeamCardWrapper>
  );
};

export default TeamCard;
