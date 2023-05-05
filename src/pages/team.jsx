import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';
import { Hero, SectionWrapper, TeamPageWrapper } from '../styles';
import Main8 from './../assets/team/main.png';
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
            <Col>
              <SectionHeader
                className="wow animate__animated animate__fadeInLeft"
                title="Our Principles"
              ></SectionHeader>
              <Para className="wow animate__animated animate__fadeInLeft">
                We believe that success is built on collaboration and
                partnership. That's why we seek out individuals who are experts
                in their field and work together to develop new and innovative
                solutions. By partnering with the best and brightest, we can
                create truly groundbreaking solutions that push the limits of
                what's possible.
              </Para>
              <Para className="wow animate__animated animate__fadeInLeft">
                In addition to our focus on collaboration, we're also passionate
                about incubating new ideas and solutions. We're always on the
                lookout for new and innovative approaches to the challenges our
                clients face, and we work hard to turn those ideas into reality.
                Whether it's through research and development, prototyping, or
                other methods, we're committed to bringing cutting-edge ideas to
                life.
              </Para>
              <Para className="wow animate__animated animate__fadeInLeft">
                Finally, we believe in investing in our team members and helping
                them to grow and build their own companies if they wish. We
                understand that the best way to build a successful company is by
                empowering our team members to be their best selves. That's why
                we provide ongoing training, support, and mentorship to all of
                our staff and encourage them to pursue their passions and build
                their own companies if they choose to do so.
              </Para>
            </Col>
          </Row>
          <Row className="pb-main">
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
