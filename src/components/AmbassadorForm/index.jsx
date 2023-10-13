import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Error } from '../Input/styles';
import { Alert, Col, Row } from 'react-bootstrap';
import { OptionWrapper, SelectWrapper } from '../Select/styles';
import Button from '../Button';
import Input from '../Input';
import emailjs from 'emailjs-com';
import { CloseIcon } from '../Icons';
import Para from '../Para';
import PhoneInput from '../PhoneInput';
import Checkbox from '../Checkbox';
import AuthDialog from '../AuthDialog';

const options = [
  { value: 'DC', label: 'DC' },
  { value: 'FL', label: 'FL' },
  { value: 'IL', label: 'IL' },
  { value: 'MA', label: 'MA' },
  { value: 'MN', label: 'MN' },
  { value: 'PA', label: 'PA' },
  { value: 'TX', label: 'TX' },
  { value: 'VA', label: 'VA' },
];

function AmbassadorForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [error, setError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const {
    register,
    getValues,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

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
      title: 'Ambassadorship Application',
    };
    emailjs
      .send('service_mo2rzyj', 'template_azf34qd', templateParams)
      .then((response) => {
        setLoading(false);
        if (response.status == 200) {
          setSuccess('Successfully submited your data');
          reset();
          setIsStatusOpen(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error) {
          setError(error.text);
          setIsStatusOpen(true);
        }
      });
  };

  const onSubmit = (data) => {
    const res = {
      firstName: data.firstName,
      lastName: data.lastName,
      state: data.state,
      phoneNumber: data.phoneNumber,
      email: data.email,
      howDidYouHearAboutUs: data.ambassador,
    };
    sendEmail(res, reset);
  };

  return (
    <>
      <AuthDialog
        title="Information"
        showDialog={isOpen}
        setShowDialog={setIsOpen}
      >
        <pre>First Name: {getValues().firstName}</pre>
        <pre>Last Name: {getValues().lastName}</pre>
        <pre>Phone Number: {getValues().phoneNumber}</pre>
        <pre>State: {getValues().state}</pre>
        <pre>Email: {getValues().email}</pre>
      </AuthDialog>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthDialog
          title="Information"
          showDialog={isStatusOpen}
          setShowDialog={setIsStatusOpen}
        >
          {success && (
            <Alert variant="success" className="d-flex justify-content-between">
              <div>
                <Para>
                  Our team will review your application and reach back out to
                  you.
                </Para>
              </div>
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="d-flex justify-content-between">
              {error}
            </Alert>
          )}
        </AuthDialog>
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
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <label>Phone Number</label>
            <PhoneInput
              register={register}
              placeholder="Phone Number"
              validation={{ required: true }}
              errors={errors}
              name="phoneNumber"
              setPhoneNumber={setPhoneNumber}
              phoneNumber={phoneNumber}
            />
          </Col>
          <Col md={6} className="mb-4">
            <label>State</label>
            <SelectWrapper
              {...register('state', { required: true })}
              placeholder="State"
            >
              <OptionWrapper value="" disabled selected>
                State of Residency
              </OptionWrapper>
              {options.map((option) => (
                <OptionWrapper key={option.label} value={option.value}>
                  {option.label}
                </OptionWrapper>
              ))}
            </SelectWrapper>
            {errors.state && <Error>This field is required</Error>}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-4">
            <label>Email Address</label>
            <Input
              register={register}
              name="email"
              placeholder="Email Address"
              validation={{ required: true }}
              errors={errors}
            />
          </Col>
          <Col md={12} className="mb-4">
            <label>Why do you wish to become a Dawn Health ambassador?</label>
            <Input
              register={register}
              name="ambassador"
              placeholder="Your message"
              validation={{ required: true }}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-4">
            <Checkbox
              register={register}
              name="confirmData"
              label="Verify your details"
              validation={{ required: true }}
              errors={errors}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="">
            <Para>
              Engagement as a Dawn Health Ambassador necessitates that you first
              attain the status of a registered member within the organization.
            </Para>
          </Col>
        </Row>
        <Button disabled={loading} className="mt-2" type="submit">
          {loading ? 'Loading...' : 'Apply Now'}
        </Button>
      </form>
    </>
  );
}

export default AmbassadorForm;
