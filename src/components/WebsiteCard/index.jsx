import React from 'react';
import { WebsiteCardWrapper } from './styles';

const WebsiteCard = ({ image, link, title, bg }) => {
  return (
    <WebsiteCardWrapper bg={bg}>
      <img src={image} className="img-fluid mb-4" alt="book cover" />
      <a href={link} target="_blank">
        {title}
      </a>
    </WebsiteCardWrapper>
  );
};

export default WebsiteCard;
