import styled from 'styled-components';

export const ParaWrapper = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.hero ? '19px' : '16px')};
  line-height: 140%;
  color: #3a3a3a;
`;
