import styled from 'styled-components';

export const FaqWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
  padding: 20px 40px;
  @media (max-width: 992px) {
    padding: 20px;
  }
`;

export const Question = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  margin-bottom: 0;
  color: #3a3a3a;
  cursor: pointer;
  flex: 4;
`;

export const FaqHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (max-width: 992px) {
    align-items: start;
  }
`;
