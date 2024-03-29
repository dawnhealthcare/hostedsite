import React, { useEffect, useState } from 'react';
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
  { value: 'MI', label: 'MI' },
  { value: 'MN', label: 'MN' },
  { value: 'NE', label: 'NE' },
  { value: 'PA', label: 'PA' },
  { value: 'TX', label: 'TX' },
  { value: 'VA', label: 'VA' },
  { value: 'WI', label: 'WI' },
];

const childrenOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
];

const ambassadors = [
  { value: 'Gabriella Foster', label: 'Gabriella Foster' },
  { value: 'Ilyas Yamani', label: 'Ilyas Yamani' },
  { value: 'Jim Ciemny', label: 'Jim Ciemny' },
  { value: 'Joseph Onyeizu', label: 'Joseph Onyeizu' },
  { value: 'Kate Efsta', label: 'Kate Efsta' },
  { value: 'Kevin Streeter', label: 'Kevin Streeter' },
  { value: 'Lauren Fulkerson', label: 'Lauren Fulkerson' },
  { value: 'Machelle Croasmun', label: 'Machelle Croasmun' },
  { value: 'Mara Bloom', label: 'Mara Bloom' },
  { value: 'Panos Efsta', label: 'Panos Efsta' },
  { value: 'Shani Reifschlager', label: 'Shani Reifschlager' },
  { value: 'Zachary Fleming', label: 'Zachary Fleming' },
];

const insurences = [
  { value: 'aetna', label: 'Aetna' },
  {
    value: 'blue cross blue shield of massachusetts',
    label: 'Blue Cross Blue Shield of Massachusetts',
  },
  {
    value: 'blue cross blue shield of minnesota',
    label: 'Blue Cross Blue Shield of Minnesota',
  },
  {
    value: 'blue cross blue shield of texas',
    label: 'Blue Cross Blue Shield of Texas',
  },
  { value: 'cigna', label: 'Cigna' },
  { value: 'fallon health', label: 'Fallon Health' },
  {
    value: 'harvard pilgrim health care',
    label: 'Harvard Pilgrim Health Care',
  },
  { value: 'health new england', label: 'Health New England' },
  { value: 'healthPartners', label: 'HealthPartners' },
  { value: 'humana', label: 'Humana' },
  { value: 'medica', label: 'Medica' },
  { value: 'preferredOne', label: 'PreferredOne' },
  { value: 'tufts health plan', label: 'Tufts Health Plan' },
  { value: 'uCare', label: 'UCare' },
  { value: 'unitedHealthcare', label: 'UnitedHealthcare' },
  { value: 'other', label: 'Other' },
];

const hearAboutUsOptions = [
  { value: 'At a Local Event', label: 'At a Local Event' },
  { value: 'At My Church', label: 'At My Church' },
  {
    value: 'Dawn Health Ambassador',
    label: 'Dawn Health Ambassador',
  },
  {
    value: 'Dental Office',
    label: 'Dental Office',
  },
  {
    value: 'From a Friend (Word-of-Mouth)',
    label: 'From a Friend (Word-of-Mouth)',
  },
  {
    value: 'From somebody at Dawn Health',
    label: 'From somebody at Dawn Health',
  },
  { value: 'My School', label: 'My School' },
  { value: 'News/Podcast', label: 'News/Podcast' },
  { value: 'On LinkedIn', label: 'On LinkedIn' },
  { value: 'On Instagram', label: 'On Instagram' },
  {
    value: 'Pediatric Office',
    label: 'Pediatric Office',
  },
  { value: 'Reading Your Books', label: 'Reading Your Books' },
  { value: 'Spotted Your Banner', label: 'Spotted Your Banner' },
  { value: "Via My Kid's School", label: "Via My Kid's School" },
];

function Form({ full }) {
  const [numChildren, setNumChildren] = useState([]);
  const [hearAbout, setHearAbout] = useState('');
  const [ambassador, setAmbassador] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [error, setError] = useState('');
  const [cost, setCost] = useState(0);
  const [enrollmentCost, setEnrollmentCost] = useState(0);
  const handleNumChildrenChange = (event) => {
    const length = event.target.value;
    const arr = Array.from({ length }, (_, index) => index + 1);
    setNumChildren(arr);
  };
  const handleHearAboutChange = (event) => {
    setHearAbout(event.target.value);
  };

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

  const promoCode = watch('code');

  const calculateDiscountedPrice = () => {
    let finalCost = 0;

    if (numChildren.length === 0) {
      finalCost = 0;
    } else if (numChildren.length === 1) {
      finalCost = 399;
      if (promoCode === 'DH23') {
        // 50% discount on the first child only
        finalCost = 399 - 199.5;
      } else if (promoCode === 'DANCE') {
        // 10% discount on the first child only
        finalCost = 399 - 39.9;
      }
      setEnrollmentCost(399.0);
    } else if (numChildren.length === 2) {
      finalCost = 699.0;
      if (promoCode === 'DH23') {
        // 50% discount on the first child only
        finalCost = 699 - 199.5;
      } else if (promoCode === 'DANCE') {
        // 10% discount on the first child only
        finalCost = 699 - 39.9;
      }
      setEnrollmentCost(699.0);
    } else if (numChildren.length === 3) {
      finalCost = 999.0;
      if (promoCode === 'DH23') {
        // 50% discount on the first child only
        finalCost = 999 - 199.5;
      } else if (promoCode === 'DANCE') {
        // 10% discount on the first child only
        finalCost = 999 - 39.9;
      }
      setEnrollmentCost(999.0);
    } else {
      finalCost = 1299.0;
      setEnrollmentCost(1299.0);
      if (promoCode === 'DH23') {
        // 50% discount on the first child only
        finalCost = 1299 - 199.5;
        setEnrollmentCost(1299.0 - 199.5);
      } else if (promoCode === 'DANCE') {
        // 10% discount on the first child only
        finalCost = 1299 - 39.9;
        setEnrollmentCost(1299.0 - 39.9);
      }
    }

    if (promoCode === 'EDUCATOR') {
      // 25% discount on the total
      if (numChildren.length === 1) {
        finalCost = 399 - (399 * 25) / 100;
      } else if (numChildren.length === 2) {
        finalCost = 699 - (699 * 25) / 100;
      } else if (numChildren.length === 3) {
        finalCost = 999 - (999 * 25) / 100;
      } else if (numChildren.length >= 4) {
        finalCost = 1299 - (1299 * 25) / 100;
      }
      // const totalCost = 1 * enrollmentCost;
      // finalCost = totalCost - totalCost * 0.25;
    }

    // return finalCost;
    setCost(finalCost);
  };

  useEffect(() => {
    calculateDiscountedPrice();
  }, [numChildren, promoCode]);

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
      title: 'Member Info',
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
    const {
      parentFirstName,
      parentLastName,
      parentPhoneNumber,
      email,
      state,
      hearAboutUs,
      numOfChildern,
      confirmData,
      city,
      ambassador,
      code,
      ...rest
    } = data;
    const res = {
      parentFirstName,
      parentLastName,
      parentPhoneNumber,
      email,
      code,
      state,
      city,
      numOfChildern,
      ...rest,
      howDidYouHearAboutUs: hearAboutUs,
      ambassador: ambassador,
    };

    if (ambassador === undefined) {
      delete res.ambassador;
    }

    // console.log(res);

    sendEmail(res, reset);
  };

  return (
    <>
      <AuthDialog
        title="Information"
        showDialog={isOpen}
        setShowDialog={setIsOpen}
      >
        <pre>First Name: {getValues().parentFirstName}</pre>
        <pre>Last Name: {getValues().parentLastName}</pre>
        <pre>Phone Number: {getValues().parentPhoneNumber}</pre>
        <pre>State: {getValues().state}</pre>
        <pre>City: {getValues().city}</pre>
        <pre>Email: {getValues().email}</pre>
        <pre>Number of children: {numChildren.length}</pre>

        {numChildren?.map((child, index) => (
          <div key={index}>
            <pre>
              {`Child ${child} Age`}: {getValues()[`child${child}Age`]}
            </pre>
          </div>
        ))}
        <pre>How did you hear about us?: {getValues().hearAboutUs}</pre>
        {getValues().ambassador && (
          <pre>Ambassador: {getValues().ambassador}</pre>
        )}
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
                  Thank you for entrusting Dawn Health with your information!
                  Our dedicated team is eager to connect with you and will reach
                  out shortly to assist you on your journey towards optimal
                  wellbeing.
                </Para>
                <Para>
                  In urgent situations that require immediate attention, we
                  strongly encourage you to dial 911 or contact the National
                  Suicide Prevention Lifeline at 988 for 24/7 free support.
                </Para>
                <Para>Here's to a healthier, happier family of yours!</Para>
                <Para className="mb-0">
                  Warmest regards, <br />
                  The Dawn Health Team
                </Para>
              </div>
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
        </AuthDialog>
        <Row>
          <Col md={6} className="mb-4">
            <label>Parent's First Name</label>
            <Input
              register={register}
              name="parentFirstName"
              placeholder="Parent's First Name"
              validation={{ required: 'First name is required' }}
              errors={errors}
            />
          </Col>
          <Col md={6} className="mb-4">
            <label>Parent's Last Name</label>
            <Input
              register={register}
              name="parentLastName"
              placeholder="Parent's Last Name"
              validation={{ required: 'Last name is required' }}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <label>Parent's Phone Number</label>
            {/* <Input
            register={register}
            name="parentPhoneNumber"
            placeholder="Parent's Phone Number"
            validation={{ required: true }}
            errors={errors}
          /> */}
            <PhoneInput
              register={register}
              placeholder="Parent's Phone Number"
              validation={{ required: true }}
              errors={errors}
              name="parentPhoneNumber"
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
                State
              </OptionWrapper>
              {options.map((option) => (
                <OptionWrapper key={option.label} value={option.value}>
                  {option.label}
                </OptionWrapper>
              ))}
            </SelectWrapper>
            {errors.state && <Error>State is required</Error>}
          </Col>
          <Col md={6} className="mb-4">
            <label>City</label>
            <Input
              register={register}
              name="city"
              placeholder="City"
              validation={{ required: 'City is required' }}
              errors={errors}
            />
          </Col>
          <Col md={6} className="mb-4">
            <label>CODE</label>
            <Input
              register={register}
              name="code"
              placeholder="Promo code"
              validation={{ required: false }}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <label>Email Address</label>
            <Input
              register={register}
              name="email"
              placeholder="Email Address"
              validation={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              }}
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
                <OptionWrapper key={option.label} value={option.value}>
                  {option.label}
                </OptionWrapper>
              ))}
            </SelectWrapper>
            {errors.numOfChildern && numChildren.length == 0 && (
              <Error>Children field is required</Error>
            )}
          </Col>
        </Row>
        <Row>
          {numChildren?.map((child, index) => (
            <>
              <Col md={6} className="mb-4" key={`${index}${index}${index}`}>
                <label>{`Child ${child} Age`}</label>
                <Input
                  register={register}
                  name={`child${child}Age`}
                  placeholder={`Child ${child} Age`}
                  validation={{ required: 'Age is required' }}
                  errors={errors}
                  type="number"
                />
              </Col>

              {/* <Col md={6} className="mb-4" key={child + 'B'}>
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
            </Col> */}
            </>
          ))}
          <Col md={12} className="mb-4">
            <label>How did you hear about us?</label>
            <SelectWrapper
              {...register('hearAboutUs', { required: true })}
              placeholder="hearAboutUs"
              onChange={handleHearAboutChange}
            >
              <OptionWrapper value="" disabled selected>
                How did you hear about us?
              </OptionWrapper>
              {hearAboutUsOptions.map((option) => (
                <OptionWrapper key={option.label} value={option.value}>
                  {option.label}
                </OptionWrapper>
              ))}
            </SelectWrapper>
            {errors.hearAboutUs && hearAbout.length == 0 && (
              <Error>Required field</Error>
            )}
          </Col>
          {hearAbout === 'Dawn Health Ambassador' && (
            <Col md={12} className="mb-4">
              <label>DawnHealth Ambassadors</label>
              <SelectWrapper
                {...register('ambassador', { required: true })}
                placeholder="ambassador"
                onChange={(e) => setAmbassador(e.target.value)}
              >
                <OptionWrapper value="" disabled selected>
                  DawnHealth Ambassadors
                </OptionWrapper>
                {ambassadors.map((option) => (
                  <OptionWrapper key={option.label} value={option.value}>
                    {option.label}
                  </OptionWrapper>
                ))}
              </SelectWrapper>
              {errors.ambassador && ambassador.length == 0 && (
                <Error>Required field</Error>
              )}
            </Col>
          )}
          {hearAbout === 'My School' && (
            <Col md={12} className="mb-4">
              <label>School Name</label>
              <Input
                register={register}
                name="schoolName"
                placeholder="School Name"
                validation={{ required: 'School name is required' }}
                errors={errors}
              />
            </Col>
          )}
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
        {/* <Row>
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
      </Row> */}

        {/* {hasInsurance === 'yes' && (
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
      )} */}
        <div className="">
          <strong>
            Your estimated annual subscription cost: ${cost.toFixed(2)} or $
            {(cost / 12).toFixed(2)} per month.
          </strong>
        </div>
        <Button
          disabled={loading}
          className={`mt-4 ${full && 'px-5'}`}
          type="submit"
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </>
  );
}

export default Form;
