import styled from 'styled-components';

export const HeadingWrapper = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  text-transform: capitalize;
  color: #3a3a3a;
  @media (max-width: 992px) {
    font-size: 30px;
  }
`;

export const InnerMainHeading = styled.span`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  text-transform: capitalize;
  color: rgba(255, 168, 0, 0.92);
  @media (max-width: 992px) {
    font-size: 40px;
    margin-top: 20px;
  }
`;
