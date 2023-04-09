import React from 'react';
import { ContentWrapper, Name, Status, TeamCardWrapper } from './styles';

const TeamCard = (props) => {
  const { name, status, src, className, alt } = props;
  return (
    <TeamCardWrapper className={className}>
      <img src={src} alt={alt} />
      <ContentWrapper>
        <Name>{name}</Name>
        <Status>{status}</Status>
      </ContentWrapper>
    </TeamCardWrapper>
  );
};

export default TeamCard;
