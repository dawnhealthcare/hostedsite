import styled from 'styled-components';

export const WellnessCardWrapper = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid #dadada;
  border-radius: 10px;
  min-height: 100%;
  & img {
    height: 150px;
  }
`;
export const Title = styled.div`
  font-style: normal;
  font-size: 28px;
  line-height: 140%;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  margin: 20px 0;
  color: #ffa800;
  & span {
    font-size: 48px;
  }
`;
