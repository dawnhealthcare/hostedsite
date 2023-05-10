import styled from 'styled-components';

export const BookCardWrapper = styled.div`
  background: #ffffff;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  border: 1px solid gainsboro;
  & img {
    max-height: 270px;
    width: 100%;
    background-color: #dedede;
  }
  & a {
    background: linear-gradient(
      270.23deg,
      #e8971e -6.15%,
      rgba(255, 168, 0, 0.75) 118.13%
    );
    border: 3px solid rgba(255, 198, 86, 0.75);
    border-radius: 15px;
    padding: 15px 25px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    transition: ease-in-out all 0.5s;
    text-decoration: none;
    &:hover {
      background-color: red;
    }
  }
`;

export const Body = styled.div`
  padding: 40px 10px;
`;
