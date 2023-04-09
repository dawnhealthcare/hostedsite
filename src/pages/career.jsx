import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import {
  Hero,
  SectionWrapper,
  CareerPageWrapper,
  List,
  ListItem,
} from '../styles';
import Main from './../assets/career/1.png';
import Main2 from './../assets/career/2.png';
import Main3 from './../assets/career/3.png';
import Main4 from './../assets/career/4.png';
import Button from '../components/Button';

const CareerPage = () => {
  return (
    <CareerPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center h-100vh reverse">
            <Col md={5} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Unlock Your Potential ">
                Join Our Team and Make your mark!
              </Heading>
              <Para>
                Dawn Health is on a mission to nurture mental health resilience
                for every child and their families. When you join Dawn Health,
                you’re joining a team that has an unstoppable drive and passion
                to bring mental health wellness into every household. We only
                hire team members that share the same vision with us.
              </Para>
            </Col>
            <Col md={1}></Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img
                src={Main}
                className="img-fluid main-image"
                alt="main image"
              />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <SectionHeader
                className="pb-main wow animate__animated animate__zoomIn"
                title="Child & Adolescent Behavioral Therapist"
              >
                Licensed in any of the following states: TX, IL, VA, or MA
              </SectionHeader>
            </Col>
          </Row>
          <Row className="pb-main align-items-center">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="" title="About The Role">
                Our clinical team members collaborate with other phenomenal
                behavioral health therapists and coaches, as well as our Chief
                Care and Chief Clinical Excellence Officers, to support our
                members through our services. Our Behavioral Therapists:
              </SectionHeader>
              <List className="pe-5">
                <ListItem className="pb-3">
                  Provide exceptional care: support children and teens ages 9 to
                  17 years and their caregivers, using evidence-based approaches
                  such as CBT and parent-management training.
                </ListItem>
                <ListItem className="pb-3">
                  Meet with children, teens, and parents to address behavioral
                  health concerns, such as anxiety and depression.
                </ListItem>
                <ListItem className="pb-3">
                  upport all aspects of each child or teen's treatment by
                  collaborating with other care team members at Dawn Health,
                  their school, household, and in the community. Document your
                  work, including session notes, care plans, and ongoing
                  progress, with high levels of accuracy and timeliness in our
                  electronic health record.
                </ListItem>
                <ListItem className="pb-3">
                  Acquire new state licenses (with support!) to support families
                  in multiple states as we grow nationwide.
                </ListItem>
                <ListItem className="pb-3">
                  Support other Brightline teams as needed, including with
                  recruitment or content development
                </ListItem>
                <ListItem className="pb-3">
                  Engage in opportunities to further your knowledge of CBT and
                  expertise in utilizing CBT with children, teens, and parents
                  facing a variety of behavioral health challenges.
                </ListItem>
                <ListItem className="pb-3">
                  Participate in individual and group consultation meetings.
                </ListItem>
                <ListItem className="pb-3">
                  Provide support for peer behavioral health clinicians as
                  needed.
                </ListItem>
                <ListItem className="pb-3">
                  Participate in training on CBT or other professional
                  development topics.
                </ListItem>
              </List>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
          </Row>
          <Row className="pb-main align-items-center">
            <Col
              md={6}
              className="text-start wow animate__animated animate__fadeInLeft"
            >
              <img src={Main3} className="img-fluid" alt="main image" />
            </Col>
            <Col md={6} className="wow animate__animated animate__fadeInRight">
              <SectionHeader className="" title="About You">
                You will thrive in the role of Behavioral Therapist at
                Brightline if you have:
              </SectionHeader>
              <List className="pe-5">
                <ListItem className="pb-3">
                  A passion for our mission to redefine behavioral health for
                  children and their families.
                </ListItem>
                <ListItem className="pb-3">
                  3 years of experience practicing independently as an LMFT,
                  LCSW, LPC, or LMHC without supervision.
                </ListItem>
                <ListItem className="pb-3">
                  Expertise in delivering child and teen-focused CBT,
                  particularly for anxiety, depression, ADHD, and disruptive
                  behavior disorders.
                </ListItem>
                <ListItem className="pb-3">
                  Experience in family-centered care models and a warm, engaging
                  clinical style.
                </ListItem>
                <ListItem className="pb-3">
                  Excellent skills in learning and using new technologies.
                  Experience with delivery care via telehealth preferred.
                </ListItem>
                <ListItem className="pb-3">
                  The drive to be part of building something new - to work hard,
                  to be your best self, and to adapt to the constant change and
                  evolution of a start-up.
                </ListItem>
                <ListItem className="pb-3">
                  Exceptional communication skills (written and verbal) and an
                  ability to share feedback across teams in a collaborative and
                  solution-oriented way.
                </ListItem>
              </List>
            </Col>
          </Row>
          <Row className="pb-main align-items-center">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader className="" title="Benefits + Perks">
                Here at Dawn Health, we believe that benefits should meet you
                where you're at. Our benefits package includes the following:
              </SectionHeader>
              <List className="pe-5">
                <ListItem className="pb-3">
                  Therapist-centric and remote-first culture.
                </ListItem>
                <ListItem className="pb-3">
                  Cultural competence training.
                </ListItem>
                <ListItem className="pb-3">
                  Collaborative and supportive therapist community of
                  like-minded peers.
                </ListItem>
                <ListItem className="pb-3">
                  And for Full-Time [W2] Opportunities:
                  <List className="mt-3">
                    <ListItem className="pb-3">
                      Competitive compensation packages.
                    </ListItem>
                    <ListItem className="pb-3">
                      Medical, dental, and vision insurance.
                    </ListItem>
                    <ListItem className="pb-3">
                      Generous paid time off - including holidays, sick leave,
                      and vacation.
                    </ListItem>
                    <ListItem className="pb-3">
                      Licensing fees and cross-licensing reimbursement.
                    </ListItem>
                    <ListItem className="pb-3">
                      Malpractice liability insurance.
                    </ListItem>
                    <ListItem className="pb-3">Home office equipment.</ListItem>
                    <ListItem className="pb-3">
                      Internet & phone stipend.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem className="pb-3">
                  And for Contracting [1099] Opportunities:
                  <List className="mt-3">
                    <ListItem className="pb-3">
                      Reimbursement up to $85 per session, dependent on
                      licensure, skillset, and capacity.
                    </ListItem>
                    <ListItem className="pb-3">
                      Malpractice liability insurance.
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img src={Main4} className="img-fluid" alt="main image" />
            </Col>
            <Col className="text-center">
              <Button className="wow animate__animated animate__zoomIn my-5">
                <a
                  href="https://calendly.com/dawnhealth_talentaquisition/30min?month=2023-03"
                  target="_blank"
                  className="no-deco"
                >
                  Apply Here
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </CareerPageWrapper>
  );
};

export default CareerPage;
