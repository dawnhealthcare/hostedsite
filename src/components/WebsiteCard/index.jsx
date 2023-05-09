import React from 'react';
import { WebsiteCardWrapper } from './styles';

const WebsiteCard = ({ image, link, title }) => {
  return (
    <WebsiteCardWrapper>
      <img src={image} className="img-fluid mb-4" alt="book cover" />
      <a href={link} target="_blank">
        {title}
      </a>
    </WebsiteCardWrapper>
  );
};

export default WebsiteCard;
