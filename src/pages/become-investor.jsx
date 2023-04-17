import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import Para from '../components/Para';
import { SectionHeader } from '../components/SectionHeader';
import { Hero, SectionWrapper, BecomeInvestorWrapper } from '../styles';
import Main from './../assets/signup/1.png';
import Main2 from './../assets/signup/2.png';
import Input from '../components/Input';
import { CloseIcon } from '../components/Icons';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Error } from '../components/Input/styles';
import Button from '../components/Button';

const BecomeInvestor = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const investing = watch('investing');

  const sendEmail = (data, reset) => {
    setLoading(true);
    let result = '';
    for (const [key, value] of Object.entries(data)) {
      const formattedKey = key
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/^\w/, (c) => c.toUpperCase());
      result += `${formattedKey}: ${value}\n`;
    }

    let templateParams = {
      form_data: result,
      title: 'Investor Info',
    };
    emailjs
      .send('service_mo2rzyj', 'template_azf34qd', templateParams)
      .then((response) => {
        setLoading(false);
        if (response.status == 200) {
          setSuccess('Successfully submited your data');
          reset();
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error) {
          setError(error.text);
        }
      });
  };

  const onSubmit = (data) => {
    sendEmail(data, reset);
  };
  return (
    <BecomeInvestorWrapper className="py-5">
      {/* <Hero>
        <Container>
          <Row className="align-items-center reverse h-100vh">
            <Col md={6} className="wow animate__animated animate__fadeInLeft">
              <Heading main="Investor">
                Join the Dawn Health Wellness Ecosystem
              </Heading>
              <Para>
                Take the first step towards mental health resilience for your
                children and our communities.
              </Para>
            </Col>
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
      </Hero> */}
      <SectionWrapper>
        <Container>
          <Row className="pb-main align-items-center">
            <Col
              md={5}
              className="text-end wow animate__animated animate__fadeInLeft"
            >
              <img src={Main2} className="img-fluid" alt="main image" />
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="wow animate__animated animate__fadeInRight">
              <SectionHeader className="pb-main" title="Investor Details">
                Fill out the fields below to become a investor
              </SectionHeader>

              <form onSubmit={handleSubmit(onSubmit)}>
                {success && (
                  <Alert
                    variant="success"
                    className="d-flex justify-content-between"
                  >
                    Successfulyy submitted your data
                    <CloseIcon
                      className="cursor-pointer"
                      onClick={() => setSuccess(false)}
                    />
                  </Alert>
                )}
                {error && (
                  <Alert
                    variant="danger"
                    className="d-flex justify-content-between"
                  >
                    {error}
                    <CloseIcon
                      className="cursor-pointer"
                      onClick={() => setError(false)}
                    />
                  </Alert>
                )}
                <Row>
                  <Col md={6} className="mb-4">
                    <label>First Name</label>
                    <Input
                      register={register}
                      name="firstName"
                      placeholder="First Name"
                      validation={{ required: true }}
                      errors={errors}
                    />
                  </Col>
                  <Col md={6} className="mb-4">
                    <label>Last Name</label>
                    <Input
                      register={register}
                      name="lastName"
                      placeholder="Last Name"
                      validation={{ required: true }}
                      errors={errors}
                    />
                  </Col>
                  <Col md={6} className="mb-4">
                    <label>Current Profession</label>
                    <Input
                      register={register}
                      name="profession"
                      placeholder="Current Profession"
                      validation={{ required: true }}
                      errors={errors}
                    />
                  </Col>
                  <Col md={6} className="mb-4">
                    <label>Phone Number</label>
                    <Input
                      register={register}
                      name="phoneNumber"
                      placeholder="Phone Number"
                      validation={{ required: true }}
                      errors={errors}
                    />
                  </Col>
                  <Col md={12} className="mb-4">
                    <label>Email</label>
                    <Input
                      register={register}
                      name="email"
                      placeholder="Email"
                      validation={{ required: true }}
                      errors={errors}
                    />
                  </Col>
                  <Col className="mb-4">
                    <label>
                      Are you interested in investing in Dawn Health?
                    </label>
                    <div className="d-flex align-items-center">
                      <label className="d-flex align-items-center me-4">
                        <input
                          className="me-2"
                          type="radio"
                          value="yes"
                          {...register('investing', { required: true })}
                        />
                        Yes
                      </label>
                      <label className="d-flex align-items-center">
                        <input
                          className="me-2"
                          type="radio"
                          value="no"
                          {...register('investing', { required: true })}
                        />
                        No
                      </label>
                    </div>
                    {errors.investing && <Error>This field is required</Error>}
                  </Col>
                  {investing === 'yes' && (
                    <Col md={12} className="mb-4">
                      <label>What prompted your interest?</label>
                      <Input
                        register={register}
                        name="prompted"
                        placeholder="What prompted your interest?"
                        validation={{ required: true }}
                        errors={errors}
                      />
                    </Col>
                  )}
                </Row>
                <Button disabled={loading} className="mt-2" type="submit">
                  {loading ? 'Loading...' : 'Submit'}
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </SectionWrapper>
    </BecomeInvestorWrapper>
  );
};

export default BecomeInvestor;
