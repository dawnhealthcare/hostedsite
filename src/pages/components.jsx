import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../components/Button';
import FaqList from '../components/FAQ';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import Select from '../components/Select';
import SubHeading from '../components/SubHeading';
import TeamCard from '../components/TeamCard';
import ValueCard from '../components/ValuesCard';
import { teamMembers } from '../data/team';

const Components = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Heading main="Sign up">
            Become part of the Dawn Health population Health network
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Para>
            Take the first step towards mental health resilience for your
            children and our communities.
          </Para>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubHeading>Our Wellness Programs</SubHeading>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              status={member.status}
              alt={member.alt}
              src={member.src}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <ValueCard title="Compassion" icon={1} className="mt-4 mb-2">
            Encouraging kindness and understanding towards those facing mental
            health challenges.
          </ValueCard>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Input className="my-3" placeholder="Parent’s First Name" />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Select className="my-2" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FaqList className="my-4" />
        </Col>
      </Row>
      <Row>
        <Col>
          <SectionHeader title="Our Leadership Team">
            Let us guide you towards healing and resilience, one step at a time.
            With our team, you are never alone on your journey.
          </SectionHeader>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Click</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Components;
