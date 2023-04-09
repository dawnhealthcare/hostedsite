import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';
import { Hero, SectionWrapper, TeamPageWrapper } from '../styles';
import Main8 from './../assets/home/8.png';
import Animated from './../assets/home/animated-1.gif';

const TeamPage = () => {
  return (
    <TeamPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh reverse">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="dedicated Team">
                Empowering Mental Wellness for all Children
              </Heading>
              <Para>
                Breaking access to care barriers and fostering mental health
                resilience. Together, we're supporting mental health for all
                children.
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight wrapper"
            >
              <img
                src={Main8}
                className="img-fluid main-image wrapper-image"
                alt="main image"
              />
              <img
                src={Animated}
                className="img-fluid main-image inner-image"
                alt="main image"
              />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={8} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="pb-main" title="Guiding Force">
                The Guiding Force is a team of experienced professionals from
                diverse backgrounds, industries, professions, and religions.
                Despite their differences, they share a common vision: to create
                a system that fosters mental health resilience in adolescents
                and supports their parents. Together, they are committed to
                making a difference by leveraging their collective expertise to
                build a better future for the next generation.
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            {teamMembers.map((member) => (
              <Col sm={6} md={4} lg={3} className="mb-4" key={member.id}>
                <TeamCard
                  className="wow animate__animated animate__zoomIn"
                  name={member.name}
                  status={member.status}
                  alt={member.alt}
                  src={member.src}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </SectionWrapper>
    </TeamPageWrapper>
  );
};

export default TeamPage;
