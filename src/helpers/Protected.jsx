import React, { useEffect, useState } from 'react';
import InvestorsPage from '../pages/investors';
import AuthDialog from '../components/AuthDialog';
import Para from '../components/Para';
import Button from '../components/Button';

const ProtectedInvestorPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);
  const [showDialog, setShowDialog] = useState(true);

  return (
    <>
      {!authenticated && wrongCode ? (
        <WrongCode
          setShowDialog={setShowDialog}
          message="Please enter a valid code to access this page"
          action="Try again"
        />
      ) : authenticated ? (
        <InvestorsPage />
      ) : (
        <WrongCode
          setShowDialog={setShowDialog}
          message="Click the button bellow to enter your access code"
          action="Click Here"
        />
      )}
      <AuthDialog
        allowedCode="INNOVEST2023"
        onAuthSuccess={setAuthenticated}
        onAuthFail={setWrongCode}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </>
  );
};

export const WrongCode = ({ setShowDialog, message, action }) => {
  return (
    <div className="mx-auto flex-column w-full h-50vh container d-flex align-items-center justify-content-center">
      <Para className="mt-5">{message}</Para>
      <Button size="sm" onClick={() => setShowDialog(true)}>
        {action}
      </Button>
    </div>
  );
};

export default ProtectedInvestorPage;
