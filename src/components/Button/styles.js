import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: linear-gradient(
    270.23deg,
    #e8971e -6.15%,
    rgba(255, 168, 0, 0.75) 118.13%
  );
  border: 3px solid rgba(255, 198, 86, 0.75);
  border-radius: 15px;
  padding: 0 30px;
  height: ${(props) => (props.size == 'md' ? '60px' : '50px')};
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  transition: ease-in-out all 0.5s;
  &:hover {
    background-color: red;
  }
  -webkit-print-color-adjust: exact;
`;
