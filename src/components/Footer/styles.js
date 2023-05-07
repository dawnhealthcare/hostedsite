import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background: #0c1325;
  padding: 70px 0;
  & .intro {
    max-width: 321px;
    margin-top: 20px;
  }
  -webkit-print-color-adjust: exact;
`;

export const Title = styled.h3`
  -webkit-print-color-adjust: exact;
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const ReLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  display: block;
  text-decoration: none;
  transition: ease-in-out all 0.5s;
  margin-bottom: 10px;
  &:hover {
    color: rgb(255, 168, 0);
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  background: #1e2330;
  padding: 20px 0;
  -webkit-print-color-adjust: exact;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 0;
`;
