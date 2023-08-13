import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  & .effix {
    background-color: #fff !important;
    .nav-link.active {
      color: #e8971e !important;
    }
  }
  .dropdown .nav-link.active {
    color: #e8971e !important;
  }
  .dropdown .nav-link:hover {
    color: #e8971e !important;
  }
  .dropdown .nav-link {
    font-size: 19px;
  }
  .logo-h {
    height: 64px;
  }
  @media (max-width: 768px) {
    .logo-h {
      height: 50px;
    }
  }
`;

export const NavItem = styled(Nav)`
  gap: 30px;
`;

export const RecLink = styled(Link)`
  text-decoration: none;
  color: #3a3a3a;
  transition: ease-in-out all 0.1s;
  &:hover {
    color: #fff;
  }
  &.active {
    color: #fff !important;
  }
  &.nav-link {
    font-size: 19px !important;
  }
`;
