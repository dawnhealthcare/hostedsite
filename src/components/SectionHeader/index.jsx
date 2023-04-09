import React from 'react';
import Para from '../Para';
import SubHeading from '../SubHeading';
import { SectionHeaderWrapper } from './styles';

export const SectionHeader = (props) => {
  const { title, className, children } = props;
  return (
    <SectionHeaderWrapper className={className}>
      <SubHeading className="mb-2">{title}</SubHeading>
      <Para>{children}</Para>
    </SectionHeaderWrapper>
  );
};
