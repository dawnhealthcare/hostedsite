import styled from 'styled-components';

export const WebsiteCardWrapper = styled.div`
  background: #ffffff;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  height: 240px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  & a {
    font-weight: 700;
    font-size: 23px;
    line-height: 140%;
    text-decoration: none;
    color: #000000;
    transition: ease-in-out all 0.5s;
    &:hover {
      color: rgb(255, 168, 0);
    }
  }
`;

export const Body = styled.div`
  padding: 40px;
`;
