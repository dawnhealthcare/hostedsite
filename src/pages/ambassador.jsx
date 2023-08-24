import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import SubHeading from '../components/SubHeading';
import {
  Hero,
  SectionWrapper,
  AmbassadorWrapper,
  List,
  ListItem,
} from '../styles';
import Main from './../assets/ambassador/main.png';
import Main2 from './../assets/ambassador/main2.png';
import Main3 from './../assets/ambassador/main3.png';
import Main4 from './../assets/ambassador/main4.png';
import GetStarted from '../components/GetStarted';
import AmbassadorForm from '../components/AmbassadorForm';

const Ambassador = () => {
  return (
    <AmbassadorWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col
              md={12}
              lg={6}
              className="wow animate__animated animate__fadeInLeft"
            >
              <Heading main="Ambassador">
                Become a Dawn Health Ambassador
              </Heading>
              <Para hero>
                Join a community of passionate parents dedicated to nurturing
                well-being. Share the benefits of Dawn Health and make a
                positive impact in the lives of families. Exclusive rewards,
                community connections, and a chance to make a difference await
                you!
              </Para>
            </Col>
            <Col
              md={6}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img src={Main} className="img-fluid main-image" alt="main" />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row className="align-items-center pb-main">
            <Col
              md={12}
              className="text-center wow animate__animated animate__fadeInLeft"
            >
              <SubHeading>What is a Dawn Health Ambassador?</SubHeading>
            </Col>
            <Col
              md={{ span: 10, offset: 1 }}
              className="wow animate__animated animate__fadeInRight"
            >
              <Para className="text-center">
                A Dawn Health Ambassador is a passionate advocate and a proud
                member of our community. As parents committed to the well-being
                and growth of their children, our ambassadors play a vital role
                in spreading the word about Dawn Health's initiatives. By
                sharing their experiences and our values, they connect us with
                more families who can benefit from our programs.
              </Para>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className=""
                title="Benefits of Becoming an Ambassador"
              ></SectionHeader>
              <List className="pe-5">
                <ListItem className="pb-3">
                  Provide exceptional care: support children and teens ages 9 to
                  17 years and their caregivers, using evidence-based approaches
                  such as CBT and parent-management training.
                </ListItem>
                <ListItem className="pb-3">
                  Exclusive Merchandise: Our ambassadors are entitled to free
                  exclusive merchandise and books that not only enrich their
                  children's lives but also empower them to represent Dawn
                  Health in their community.
                </ListItem>
                <ListItem className="pb-3">
                  Join a Thriving Community: Being a Dawn Health Ambassador
                  means being part of an active, like-minded community. It's an
                  opportunity to connect, learn, and grow alongside other
                  dedicated parents.
                </ListItem>
                <ListItem className="pb-3">
                  Impact Lives: By sharing Dawn Health's vision and products,
                  ambassadors have the unique opportunity to make a positive
                  difference in the lives of other families.
                </ListItem>
              </List>
            </Col>
            <Col md={6} className="wow animate__animated animate__fadeInRight">
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
          </Row>
          <Row className="mt-5 align-items-center flex-column-reverse flex-sm-row flex-nowrap">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <img src={Main3} className="img-fluid" alt="main image" />
            </Col>
            <Col md={6} className="wow animate__animated animate__fadeInRight">
              <SectionHeader
                className=""
                title="Expectations from an Ambassador"
              ></SectionHeader>
              <List className="pe-5">
                <ListItem className="pb-3">
                  Spread the Word: Ambassadors are expected to actively promote
                  Dawn Health to other parents, both in personal interactions
                  and through various social media platforms.
                </ListItem>
                <ListItem className="pb-3">
                  Represent with Integrity: As the face of Dawn Health,
                  ambassadors must adhere to our values and present our mission
                  with authenticity and enthusiasm.
                </ListItem>
                <ListItem className="pb-3">
                  Share Our Events: Each month, our ambassadors will receive
                  links to our exclusive conferences. They are encouraged to
                  forward these to other parents, expanding our reach and
                  impact.
                </ListItem>
                <ListItem className="pb-3">
                  Regular Engagement: We anticipate consistent participation
                  from our ambassadors in our programs and online platforms,
                  ensuring that they stay connected and updated with our latest
                  offerings.
                </ListItem>
                <ListItem className="pb-3">
                  Collaborate and Grow: We value the insights and ideas of our
                  ambassadors. Their feedback and collaboration are instrumental
                  in shaping the future of Dawn Health.
                </ListItem>
              </List>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12} className="wow animate__animated animate__zoomIn">
              <GetStarted desc="Embarking on this journey with our ambassadors is an exciting chapter in our story. Together, we will foster a nurturing environment for children and build a community that supports, inspires, and thrives. Join us in making a difference!" />
            </Col>
          </Row>
          <Row className="mt-5 pb-main align-items-center">
            <Col
              lg={6}
              className="text-end wow animate__animated animate__fadeInLeft"
            >
              <img src={Main4} className="img-fluid" alt="main" />
            </Col>
            <Col
              lg={6}
              className="wow animate__animated animate__fadeInRight mt-sm-0 mt-4"
            >
              <SectionHeader
                className="pb-1"
                title="Ambassadorship Application"
              >
                Your interest in the Dawn Health Ambassadorship Program is
                greatly appreciated! By submitting your details below, you're
                taking a positive step toward a potential partnership with us.
                Please understand that while every application is considered
                with the utmost attention and care, submitting your information
                does not constitute a guarantee of acceptance. Rest assured, a
                dedicated member of our team will personally contact you if you
                are selected for an interview. We look forward to the
                possibility of working together!
              </SectionHeader>
              {/* <Para>
                Investing in your child's mental well-being is an essential yet
                manageable commitment. Our mental health network offers an
                annual membership at $500 per child, along with $145 per
                session. The total annual cost of $1,950 for 10 sessions
                translates to a monthly fee of just $162.50. Think of it as
                investing less than the price of a daily cup of coffee or a
                monthly gym membership or cable bill. The value of nurturing
                mental health is immeasurable, and this investment serves as a
                foundation for your child's growth, happiness, and success. Join
                us in taking this vital step toward a brighter future.
              </Para> */}
              <AmbassadorForm />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </AmbassadorWrapper>
  );
};

export default Ambassador;
