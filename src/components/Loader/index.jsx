import React from 'react';
import { Spinner } from 'react-bootstrap';
import { LoaderWrapper } from './styles';
import Para from '../Para';

const Loader = ({ message }) => {
  return (
    <LoaderWrapper fix>
      <Spinner animation="border" variant="warning" />
      <Para className="mt-3">{message}</Para>
    </LoaderWrapper>
  );
};

export default Loader;
