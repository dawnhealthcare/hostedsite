import React from 'react';
import Button from '../Button';
import { Body, BookCardWrapper } from './styles';

const BookCard = ({ image, link }) => {
  return (
    <BookCardWrapper>
      <img src={image} className="img-fluid" alt="book cover" />
      <Body>
        <a href={link} target="_blank">
          Buy Now
        </a>
      </Body>
    </BookCardWrapper>
  );
};

export default BookCard;
