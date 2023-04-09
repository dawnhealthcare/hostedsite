import styled from 'styled-components';

export const SelectWrapper = styled.select`
  font-size: 16px;
  padding: 16px 11px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  appearance: none;
  min-width: 100%;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5"%3E%3Cpath fill="%23626262" d="M4 5L0 0h8z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  &:focus {
    outline: none;
    border-color: #e8971e;
    box-shadow: rgb(232 151 30 / 38%) 0px 0px 5px;
  }
`;

export const OptionWrapper = styled.option`
  padding: 20px 0;
  &:hover {
    background-color: red;
  }
`;
