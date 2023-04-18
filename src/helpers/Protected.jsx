import React, { useEffect, useState } from 'react';
import InvestorsPage from '../pages/investors';
import AuthDialog from '../components/AuthDialog';
import Para from '../components/Para';
import Button from '../components/Button';
import { Form } from 'react-bootstrap';
import BecomeInvestor from '../pages/become-investor';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

const ProtectedInvestorPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);
  const [showDialog3, setShowDialog3] = useState(false);
  const [showDialog, setShowDialog] = useState(true);
  const [hasCode, setHasCode] = useState(false);
  const [accessCode, setAccessCode] = useState('');

  return (
    <>
      {!authenticated && wrongCode ? (
        <WrongCode
          setShowDialog2={setShowDialog2}
          message="Please enter a valid code to access this page"
          action="Try again"
        />
      ) : authenticated ? (
        <InvestorsPage />
      ) : (
        <WrongCode
          setShowDialog2={setShowDialog}
          message="Click the button bellow to access insvestor relations page"
          action="Click Here"
        />
      )}
      <AuthDialog
        showDialog={showDialog2}
        setShowDialog={setShowDialog2}
        title="Access Code"
      >
        <AccessCodeForm
          setAuthenticated={setAuthenticated}
          setWrongCode={setWrongCode}
          setShowDialog2={setShowDialog2}
          setAccessCode={setAccessCode}
        />
      </AuthDialog>
      <AuthDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        title="Do you have access code?"
      >
        <FirstPopup
          setHasCode={setHasCode}
          setShowDialog={setShowDialog}
          setShowDialog2={setShowDialog2}
          setShowDialog3={setShowDialog3}
        />
      </AuthDialog>
      <AuthDialog
        showDialog={showDialog3}
        setShowDialog={setShowDialog3}
        title="Fill out the fields below to become an investor"
      >
        <InvestorForm
          setShowDialog3={setShowDialog3}
          setAccessCode={setAccessCode}
          accessCode={accessCode}
          setAuthenticated={setAuthenticated}
        />
      </AuthDialog>
    </>
  );
};

export const WrongCode = ({ setShowDialog2, message, action }) => {
  return (
    <div className="mx-auto flex-column w-full h-50vh container d-flex align-items-center justify-content-center">
      <Para className="mt-5">{message}</Para>
      <Button onClick={() => setShowDialog2(true)}>{action}</Button>
    </div>
  );
};

export const AccessCodeForm = ({
  setAuthenticated,
  setWrongCode,
  setShowDialog2,
  setAccessCode,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const Code = watch('accessCode');
  const onSubmit = () => {
    if (Code === 'DHINVEST') {
      setWrongCode(false);
      setAuthenticated(true);
      setAccessCode(Code);
    } else {
      setAuthenticated(false);
      setAccessCode('');
      setWrongCode(true);
    }
    setShowDialog2(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Enter access code"
        register={register}
        name="accessCode"
        validation={{ required: true }}
        errors={errors}
      />
      <Button type="submit" className="float-end mt-2">
        Submit
      </Button>
    </form>
  );
};

export const FirstPopup = ({
  setShowDialog,
  setHasCode,
  setShowDialog2,
  setShowDialog3,
}) => {
  const handleClick = (val) => {
    setHasCode(val);
    if (val) {
      setShowDialog2(true);
      setShowDialog(false);
    } else {
      setShowDialog(false);
      setShowDialog2(false);
      setShowDialog3(true);
    }
  };
  return (
    <div className="d-flex gap-3 justify-content-center">
      <Button onClick={() => handleClick(true)}>Yes</Button>
      <Button onClick={() => handleClick(false)}>No</Button>
    </div>
  );
};

export const InvestorForm = ({
  setShowDialog3,
  setAccessCode,
  accessCode,
  setAuthenticated,
}) => {
  const handleContinue = () => {
    if (accessCode === 'DHINVEST') {
      setAuthenticated(true);
      setShowDialog3(false);
    }
  };
  return (
    <div>
      <BecomeInvestor
        setAccessCode={setAccessCode}
        accessCode={accessCode}
        onClick={handleContinue}
      />
    </div>
  );
};

export default ProtectedInvestorPage;
