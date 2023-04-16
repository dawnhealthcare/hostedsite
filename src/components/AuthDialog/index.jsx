import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Para from '../Para';
import Button from '../Button';

const AuthDialog = ({
  allowedCode,
  onAuthSuccess,
  onAuthFail,
  showDialog,
  setShowDialog,
}) => {
  const [userInput, setUserInput] = useState('');
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length > 0) {
      if (userInput === allowedCode) {
        onAuthSuccess(true);
        setShowDialog(false);
      } else {
        onAuthFail(true);
        setShowDialog(false);
      }
    }
  };

  return (
    <Modal
      show={showDialog}
      onHide={() => setShowDialog(false)}
      backdrop="static"
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Para className="mb-0">Access Code</Para>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="codeInput">
            <Form.Control
              type="text"
              placeholder="Enter access code"
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* {wrongCode && (
            <div className="text-danger">Wrong code. Please try again.</div>
          )} */}
          <Modal.Footer className="px-0">
            <Button type="submit" size="sm">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthDialog;
