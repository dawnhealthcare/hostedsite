import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavbarWrapper, NavItem, RecLink } from './styles';
import Logo from './../../assets/logo/logo.png';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Header = (props) => {
  const { active, className } = props;
  const navigate = useNavigate();
  const navLinks = [
    { id: 1, to: '/', title: 'Home' },
    { id: 2, to: '/about', title: 'About Us' },
    { id: 2, to: '/signup', title: 'Sign Up' },
    { id: 3, to: '/team', title: 'Team' },
    { id: 4, to: '/join-our-team', title: 'Join our Team' },
    { id: 5, to: '/faqs', title: 'FAQs' },
  ];
  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={className}>
        <Container>
          <Navbar.Brand>
            <RecLink to="/">
              <img src={Logo} className="img-fluid" alt="" />
            </RecLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <NavItem>
              {navLinks.map((navLink) => (
                <RecLink
                  key={navLink.id}
                  to={navLink.to}
                  className={active == navLink.to ? 'active' : ''}
                >
                  {navLink.title}
                </RecLink>
              ))}
            </NavItem>
            {/* <NavItem>
              <Button onClick={() => navigate('/signup')}>Signup</Button>
            </NavItem> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
};
