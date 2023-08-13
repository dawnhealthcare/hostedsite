import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import { members, teamMembers } from '../data/team';
import { Hero, SectionWrapper, TeamPageWrapper } from '../styles';
import Main8 from './../assets/team/main.png';
import WellnessCard from '../components/WellnessCard';
import { Principles } from '../data/home';
// import Animated from './../assets/home/animated-1.gif';

const TeamPage = () => {
  return (
    <TeamPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh reverse">
            <Col
              md={12}
              lg={6}
              className="wow animate__animated animate__fadeInLeft"
            >
              <Heading main="Guiding Force">
                Empowering Mental Wellness for all Children
              </Heading>
              <Para hero>
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
                alt="main"
              />
              {/* <img
                src={Animated}
                className="img-fluid main-image inner-image"
                alt="main"
              /> */}
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="pb-main" title="Guiding Force">
                We are a team of parents who are experienced professionals from
                diverse backgrounds, industries, professions, expertise, and
                religions. Despite our differences, we share a common vision: to
                create a system that fosters mental health resilience in
                adolescents and supports their parents. Together, we are
                committed to making a difference by leveraging our collective
                expertise to build a better future for the next generation.
              </SectionHeader>
            </Col>
          </Row>
          <Row>
            <Col className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="pb-main" title="Our True North">
                Guided by a shared purpose, our True North is to ignite the
                potential within adolescents, unlocking a future of limitless
                possibilities. We passionately deliver primary and secondary
                prevention, joining forces with parents as trusted allies to
                empower and equip the next generation with the tools and
                resilience needed to thrive in an ever-changing world.
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            <Col>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft"
                title="Our Principles"
              ></SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main">
            {Principles.map((principal) => (
              <Col md={6} xl={3} className="mb-4" key={principal.id}>
                <WellnessCard
                  title={principal.title}
                  desc={principal.desc}
                  image={principal.image}
                />
              </Col>
            ))}
          </Row>
          <Row className="pb-main">
            {members.map((member) => (
              <>
                <Col md={12} key={member.title}>
                  <SectionHeader
                    className="wow animate__animated animate__fadeInLeft"
                    title={member.title}
                  ></SectionHeader>
                </Col>
                {member.members.team1.map((one) => (
                  <Col md={6} lg={4} xl={3} className="mb-4" key={one.id}>
                    <TeamCard
                      className="wow animate__animated animate__zoomIn"
                      name={one.name}
                      status={one.status}
                      alt={one.alt}
                      src={one.src}
                      lead={one.lead}
                    />
                  </Col>
                ))}
                <Row>
                  {member.members.team2.map((two) => (
                    <Col md={6} lg={4} xl={3} className="mb-4" key={two.id}>
                      <TeamCard
                        className="wow animate__animated animate__zoomIn"
                        name={two.name}
                        status={two.status}
                        alt={two.alt}
                        src={two.src}
                        lead={two.lead}
                      />
                    </Col>
                  ))}
                </Row>
              </>
            ))}
            {teamMembers.map((members) => (
              <>
                <Col md={12} key={members.title}>
                  <SectionHeader
                    className="wow animate__animated animate__fadeInLeft"
                    title={members.title}
                  ></SectionHeader>
                </Col>
                {members.members?.map((member) => (
                  <Col md={6} lg={4} xl={3} className="mb-4" key={member.id}>
                    <TeamCard
                      className="wow animate__animated animate__zoomIn"
                      name={member.name}
                      status={member.status}
                      alt={member.alt}
                      src={member.src}
                      lead={member.lead}
                    />
                  </Col>
                ))}
              </>
            ))}
          </Row>
        </Container>
      </SectionWrapper>
    </TeamPageWrapper>
  );
};

export default TeamPage;
