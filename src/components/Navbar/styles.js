import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  & .effix {
    background-color: #fff !important;
  }
`;

export const NavItem = styled(Nav)`
  gap: 30px;
`;

export const RecLink = styled(Link)`
  text-decoration: none;
  color: #3a3a3a;
  transition: ease-in-out all 0.5s;
  &:hover {
    color: #e8971e;
  }
  &.active {
    color: #e8971e;
  }
`;
