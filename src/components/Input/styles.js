import styled from 'styled-components';

export const InputWrapper = styled.input`
  font-size: 16px;
  padding: 16px 11px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-width: 100%;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #e8971e;
    box-shadow: rgb(232 151 30 / 38%) 0px 0px 5px;
  }
`;

export const Error = styled.p`
  color: #c73e1d;
  margin-bottom: 0;
  font-size: 12px;
  margin-top: 5px;
`;
