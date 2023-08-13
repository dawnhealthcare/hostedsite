import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { NavbarWrapper, RecLink } from './styles';
import Logo from './../../assets/logo/logo.png';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const Header = (props) => {
  const { active, className } = props;
  const [menuOpen, toggleMenuOpen] = useState(false);
  const navLinks = [
    { id: 1, to: '/', title: 'Home' },
    {
      id: 11,
      title: 'Welcome',
      links: [
        { id: 2, to: '/services', title: 'Services' },
        { id: 4, to: '/signup', title: 'Sign Up' },
      ],
    },
    {
      id: 12,
      title: 'Our Family',
      links: [
        { id: 3, to: '/about', title: 'About Us' },
        { id: 5, to: '/team', title: 'Guiding Force' },
        { id: 7, to: '/join-our-team', title: 'Join our Team' },
      ],
    },
    {
      id: 13,
      title: 'Resources',
      links: [
        { id: 14, to: '/resources', title: 'Media' },
        { id: 15, to: '/blog', title: 'Blog' },
        { id: 8, to: '/faqs', title: 'FAQs' },
      ],
    },
    ,
    { id: 6, to: '/investor-relations', title: 'Investor Relations' },
  ];
  return (
    <NavbarWrapper className="navbar-wrapper">
      <Navbar collapseOnSelect expand="lg" fixed="top" className={className}>
        <Container>
          <Navbar.Brand>
            <RecLink to="/">
              <img src={Logo} className="img-fluid logo-h" alt="" />
            </RecLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-center">
              {navLinks.map((navLink) => (
                <>
                  {navLink.links ? (
                    <NavDropdown
                      onMouseEnter={() => {
                        toggleMenuOpen(navLink.id);
                      }}
                      onMouseLeave={() => {
                        toggleMenuOpen(false);
                      }}
                      show={menuOpen == navLink.id}
                      title={
                        <span style={{ color: '#3a3a3a' }}>
                          {navLink.title}
                        </span>
                      }
                      id="basic-nav-dropdown"
                    >
                      {navLink.links.map((link) => (
                        <Nav.Link href="#" key={navLink.id} className="py-0">
                          <NavDropdown.Item
                            onClick={() => toggleMenuOpen(false)}
                            id="basic-nav-dropdown"
                          >
                            <RecLink
                              to={link.to}
                              className={`${
                                active == link.to ? 'active' : ''
                              } nav-link`}
                            >
                              {link.title}
                            </RecLink>
                          </NavDropdown.Item>
                        </Nav.Link>
                      ))}
                    </NavDropdown>
                  ) : (
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
                  )}
                </>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
};
