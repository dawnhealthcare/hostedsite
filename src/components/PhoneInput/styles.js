import styled from 'styled-components';

export const PhoneInputWrapper = styled.div`
  & input {
    font-size: 16px;
    padding: 16px 11px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: calc(100% - 39px);
    &:focus {
      outline: none;
      border-color: #e8971e;
      box-shadow: rgb(232 151 30 / 38%) 0px 0px 5px;
    }
  }
  & .PhoneInputCountry {
    border-radius: 5px;
    padding: 0 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    /* display: none; */
  }
`;
