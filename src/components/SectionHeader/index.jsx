import React from 'react';
import Para from '../Para';
import SubHeading from '../SubHeading';
import { SectionHeaderWrapper } from './styles';
import { Helmet } from 'react-helmet';

export const SectionHeader = (props) => {
  const { title, className, children } = props;
  return (
    <>
      {/* <Helmet>
        <title>Investor Relations - Information - Dawn Health</title>
        <meta
          name="description"
          content="Our investor page is the gateway to a universe of opportunities to make a meaningful impact on mental health."
        />
      </Helmet> */}
      <SectionHeaderWrapper className={className}>
        <SubHeading className="mb-2">{title}</SubHeading>
        <Para>{children}</Para>
      </SectionHeaderWrapper>
    </>
  );
};
