import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, SignupPageWrapper } from '../styles';
import Main from './../assets/signup/1.png';
import Main2 from './../assets/signup/2.png';
import Form from '../components/Form';

const SignupPage = () => {
  return (
    <SignupPageWrapper>
      <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col lg={7} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Sign up here">
                Join the Dawn Health Wellness Ecosystem
              </Heading>
              <Para hero>
                Unlocking Potential, Illuminating Paths: Igniting Resilience in
                Adolescents, Hand-in-Hand with Parents!
              </Para>
            </Col>
            <Col
              md={5}
              className="text-end wow animate__animated animate__fadeInRight"
            >
              <img src={Main} className="img-fluid main-image" alt="main" />
            </Col>
          </Row>
        </Container>
      </Hero>
      <SectionWrapper>
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className="pb-2"
                title="Know Your Cost: Tailoring a Bright Future"
              >
                Embrace the limitless potential of your child's future. Our
                mental health network is more than just an annual commitment;
                it's a customized pathway toward happiness, growth, and success.
              </SectionHeader>
            </Col>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <Para>
                Embrace a future filled with promise and joy for your child.
                With our mental health network, you're not just spending $515.30
                annually per child and $149.65 per session—you're making an
                invaluable investment in their happiness, growth, and success.
                The total annual expense of $2,011.80 for 10 transformational
                therapeutic sessions breaks down to a mere $167.65 per month.
                Imagine giving your child the gift of well-being for less than
                your daily coffee or a monthly gym membership. The rewards are
                beyond measure, and the positive ripple effects will last a
                lifetime. Don't just dream of a brighter tomorrow for your
                child—make it a reality. Join us today, and take the empowering
                step toward nurturing their mental health.
              </Para>
              <Para>
                Here's a detailed look at the investment you're making:
              </Para>
              <ul>
                <li>
                  Annual Subscription: At $515.30 per child, this foundation
                  ensures ongoing support and connection.
                </li>
                <li>
                  Session Costs: Priced at $149.65 each, these therapeutic
                  meetings form the building blocks of our collaborative care.
                </li>
                <li>
                  Total Annual Investment: The overall yearly cost of $2,011.80
                  for 10 transformational sessions breaks down to a mere $167.65
                  per month.
                </li>
                <li>
                  Individualized Care Plans: Beyond the annual subscription,
                  therapy costs are determined based on the unique,
                  individualized care plan that is crafted to meet your child's
                  specific needs.
                </li>
              </ul>
              <Para>
                The value of this investment transcends monetary terms. Imagine
                bestowing the gift of well-being on your child for less than the
                price of a daily coffee or a monthly gym membership. The rewards
                of this specialized approach are profound, resonating through
                every facet of your child's life. From building confidence to
                nurturing emotional well-being, the positive impact will last a
                lifetime.
              </Para>
              <Para>
                Don't just aspire to a brighter tomorrow for your child—create
                it. Join us today, and take the empowered step toward
                individualized care that recognizes your child's unique
                brilliance. Together, we're not only providing therapy; we're
                nurturing dreams and building futures.
              </Para>
            </Col>
            <Col lg={12} className="wow animate__animated animate__fadeInLeft">
              <SectionHeader
                className="pb-2"
                title="How It Works: A Simple and Rewarding Process!"
              ></SectionHeader>
              <ul>
                <li>
                  <strong>Start by Entering Your Information:</strong> Just fill
                  out the details in the Sign Up section below, and our
                  state-of-the-art system will promptly notify you with a
                  personalized profile registration link.
                </li>
                <li>
                  <strong>Create Your Profile in a Flash:</strong> With an
                  approximate time of only 20 minutes, setting up your profile
                  has never been easier! This includes the completion of a
                  specially crafted intake assessment,{' '}
                </li>
              </ul>
              <Para>Tailored to understand your unique needs.</Para>
              <ul>
                <li>
                  <strong>Unlock the Power of Communication:</strong> Once your
                  profile is complete, get ready to experience a seamless
                  connection. Our system will begin generating biweekly
                  communications with you and your registered child(ren),
                  fostering a harmonious connection that grows stronger with
                  every interaction.
                </li>
              </ul>
              <Para>
                Join us now and embark on a journey that's more than just a
                registration - it's a pathway toward understanding, connection,
                and joy. Your family deserves the best, and we're here to
                provide it!
              </Para>
            </Col>
          </Row>
          <Row className="pb-main align-items-center">
            <Col
              lg={5}
              className="text-end wow animate__animated animate__fadeInLeft"
            >
              <img src={Main2} className="img-fluid" alt="main" />
            </Col>
            <Col lg={1}></Col>
            <Col lg={6} className="wow animate__animated animate__fadeInRight">
              <SectionHeader className="pb-1" title="Sign Up">
                Don't let your children and family suffer in silence - reach out
                to us for understanding, empowerment, and nurtured resilience.
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
              <Form />
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </SignupPageWrapper>
  );
};

export default SignupPage;
