import React, { useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { SectionHeader } from '../components/SectionHeader';
import Input from '../components/Input';
import { CloseIcon } from '../components/Icons';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Error } from '../components/Input/styles';
import Button from '../components/Button';

const BecomeInvestor = ({ setAccessCode, accessCode, onClick }) => {
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
          setAccessCode('DHINVEST');
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
    <>
      <SectionHeader className="" title="Investor Details"></SectionHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        {success && (
          <Alert variant="success" className="d-flex justify-content-between">
            <span>
              Here's your access code for any future visits to the investor page
              <span className="text-primary ms-2">DHINVEST</span>
            </span>
            <CloseIcon
              className="cursor-pointer"
              onClick={() => setSuccess(false)}
            />
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="d-flex justify-content-between">
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
            <label>Are you interested in investing in Dawn Health?</label>
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
        {accessCode && (
          <Button className="mt-2 ms-3" onClick={onClick}>
            Access Investor Page
          </Button>
        )}
      </form>
    </>
  );
};

export default BecomeInvestor;
