import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Error } from '../Input/styles';
import { Alert, Col, Row } from 'react-bootstrap';
import { OptionWrapper, SelectWrapper } from '../Select/styles';
import Button from '../Button';
import Input from '../Input';
import emailjs from 'emailjs-com';
import { CloseIcon } from '../Icons';

const options = [
  { value: 'IL', label: 'IL' },
  { value: 'MA', label: 'MA' },
  { value: 'MN', label: 'MN' },
  { value: 'TX', label: 'TX' },
  { value: 'VA', label: 'VA' },
];

const childrenOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

const insurences = [
  { value: 'aetna', label: 'Aetna' },
  { value: 'anthem healthKeepers', label: 'Anthem HealthKeepers' },
  { value: 'blue cross blue shield', label: 'Blue Cross Blue Shield' },
  { value: 'cigna', label: 'Cigna' },
  { value: 'fallon health', label: 'Fallon Health' },
  {
    value: 'harvard pilgrim health care',
    label: 'Harvard Pilgrim Health Care',
  },
  { value: 'healthPartners', label: 'HealthPartners' },
  { value: 'humana', label: 'Humana' },
  { value: 'medica', label: 'Medica' },
  { value: 'neighborhood health plan', label: 'Neighborhood Health Plan' },
  { value: 'optima health', label: 'Optima Health' },
  { value: 'preferredOne', label: 'PreferredOne' },
  { value: 'tufts health plan', label: 'Tufts Health Plan' },
  { value: 'uCare', label: 'UCare' },
  { value: 'unitedHealthcare', label: 'UnitedHealthcare' },
  { value: 'other', label: 'Other' },
];

function Form() {
  const [numChildren, setNumChildren] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleNumChildrenChange = (event) => {
    const length = event.target.value;
    const arr = Array.from({ length }, (_, index) => index + 1);
    setNumChildren(arr);
  };
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const hasInsurance = watch('hasInsurance');
  const insurance = watch('insurance');

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
    <form onSubmit={handleSubmit(onSubmit)}>
      {success && (
        <Alert variant="success" className="d-flex justify-content-between">
          Successfulyy submitted your data
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
          <label>Parent's First Name</label>
          <Input
            register={register}
            name="parentFirstName"
            placeholder="Parent's First Name"
            validation={{ required: true }}
            errors={errors}
          />
        </Col>
        <Col md={6} className="mb-4">
          <label>Parent's Last Name</label>
          <Input
            register={register}
            name="parentLastName"
            placeholder="Parent's Last Name"
            validation={{ required: true }}
            errors={errors}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <label>Parent's Phone Number</label>
          <Input
            register={register}
            name="parentPhoneNumber"
            placeholder="Parent's Phone Number"
            validation={{ required: true }}
            errors={errors}
          />
        </Col>
        <Col md={6} className="mb-4">
          <label>State</label>
          <SelectWrapper
            {...register('state', { required: true })}
            placeholder="State"
          >
            <OptionWrapper value="" disabled selected>
              State
            </OptionWrapper>
            {options.map((option) => (
              <OptionWrapper
                key={option.label + option.value}
                value={option.value}
              >
                {option.label}
              </OptionWrapper>
            ))}
          </SelectWrapper>
          {errors.state && <Error>This field is required</Error>}
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <label>Email Address</label>
          <Input
            register={register}
            name="email"
            placeholder="Email Address"
            validation={{ required: true }}
            errors={errors}
          />
        </Col>
        <Col md={6} className="mb-4">
          <label>Number of Childern</label>
          <SelectWrapper
            {...register('numOfChildern', { required: true })}
            placeholder="numOfChildern"
            onChange={handleNumChildrenChange}
          >
            <OptionWrapper value="" disabled selected>
              Number of children
            </OptionWrapper>
            {childrenOptions.map((option) => (
              <OptionWrapper
                key={option.label + option.value}
                value={option.value}
              >
                {option.label}
              </OptionWrapper>
            ))}
          </SelectWrapper>
          {errors.numOfChildern && <Error>This field is required</Error>}
        </Col>
      </Row>
      <Row>
        {numChildren?.map((child) => (
          <>
            <Col md={6} className="mb-4" key={child + 'A'}>
              <label>{`Child ${child} Age`}</label>
              <Input
                register={register}
                name={`child${child}Age`}
                placeholder={`Child ${child} Age`}
                validation={{ required: true }}
                errors={errors}
                type="number"
              />
            </Col>
            <Col md={6} className="mb-4" key={child + 'B'}>
              <label>{`Child ${child} Phone Number`}</label>
              <Input
                register={register}
                name={`child${child}Number`}
                validation={{ required: true }}
                errors={errors}
                type="text"
                className="phone-number"
                defaultValue="+1"
              />
            </Col>
          </>
        ))}
      </Row>
      <Row>
        <Col className="mb-4">
          <label>Do you have health care insurance?</label>
          <div className="d-flex align-items-center">
            <label className="d-flex align-items-center me-4">
              <input
                className="me-2"
                type="radio"
                value="yes"
                {...register('hasInsurance', { required: true })}
              />
              Yes
            </label>
            <label className="d-flex align-items-center">
              <input
                className="me-2"
                type="radio"
                value="no"
                {...register('hasInsurance', { required: true })}
              />
              No
            </label>
          </div>
          {errors.hasInsurance && <Error>This field is required</Error>}
        </Col>
      </Row>

      {hasInsurance === 'yes' && (
        <Row>
          <Col md={6} className="mb-4">
            <label>Select Insurance</label>
            <SelectWrapper {...register('insurance', { required: true })}>
              <OptionWrapper value="" disabled selected>
                Select Insurance
              </OptionWrapper>
              {insurences.map((option) => (
                <OptionWrapper
                  key={option.label + option.value}
                  value={option.value}
                >
                  {option.label}
                </OptionWrapper>
              ))}
            </SelectWrapper>
            {errors.insurance && <Error>This field is required</Error>}
          </Col>
        </Row>
      )}
      {hasInsurance === 'no' && (
        <Row>
          <Col className="mb-4">
            <label>Will you be paying for these services out-of-pocket?</label>
            <div className="d-flex align-items-center">
              <label className="d-flex align-items-center me-4">
                <input
                  className="me-2"
                  type="radio"
                  value="yes"
                  {...register('payingOutOfPocket', { required: true })}
                />
                Yes
              </label>
              <label className="d-flex align-items-center">
                <input
                  className="me-2"
                  type="radio"
                  value="no"
                  {...register('payingOutOfPocket', { required: true })}
                />
                No
              </label>
            </div>
            {errors.payingOutOfPocket && <Error>This field is required</Error>}
          </Col>
        </Row>
      )}
      {insurance === 'other' && hasInsurance === 'yes' && (
        <Row>
          <Col md={6} className="mb-4">
            <label>Health Insurance Carrier</label>
            <Input
              register={register}
              name="healthInsuranceCarrier"
              validation={{ required: true }}
              errors={errors}
              type="text"
              placeholder="Health Insurance Carrier"
            />
          </Col>
          <Col md={6} className="mb-4">
            <label>Insurance Carrier Phone Number</label>
            <Input
              register={register}
              name="insuranceCarrierPhone"
              validation={{ required: true }}
              errors={errors}
              type="text"
              placeholder="Insurance Carrier Phone Number"
            />
          </Col>
        </Row>
      )}
      <Button disabled={loading} className="mt-4" type="submit">
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  );
}

export default Form;
