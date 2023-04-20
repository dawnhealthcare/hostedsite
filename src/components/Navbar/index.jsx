import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavbarWrapper, NavItem, RecLink } from './styles';
import Logo from './../../assets/logo/logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Header = (props) => {
  const { active, className } = props;
  const navigate = useNavigate();
  const navLinks = [
    { id: 1, to: '/', title: 'Home' },
    { id: 2, to: '/services', title: 'Services' },
    { id: 3, to: '/about', title: 'About Us' },
    { id: 4, to: '/signup', title: 'Sign Up' },
    { id: 5, to: '/team', title: 'Team' },
    { id: 6, to: '/investor-relations', title: 'Investor Relations' },
    { id: 7, to: '/join-our-team', title: 'Join our Team' },
    { id: 8, to: '/faqs', title: 'FAQs' },
  ];
  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="xl" fixed="top" className={className}>
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
            <Nav className="">
              {navLinks.map((navLink) => (
                <Nav.Link
                  href="#"
                  key={navLink.id}
                  className={active == navLink.to ? 'active' : ''}
                >
                  <RecLink
                    to={navLink.to}
                    className={`${
                      active == navLink.to ? 'active' : ''
                    } nav-link`}
                  >
                    {navLink.title}
                  </RecLink>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" fixed="top" className={className}>
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
            <Nav className="me-auto">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </NavbarWrapper>
  );
};
