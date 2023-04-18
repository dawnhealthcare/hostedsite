import React from 'react';
import { Modal } from 'react-bootstrap';
import Para from '../Para';

const AuthDialog = ({ children, title, showDialog, setShowDialog, footer }) => {
  return (
    <Modal
      show={showDialog}
      onHide={() => setShowDialog(false)}
      backdrop="static"
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Para className="mb-0">{title}</Para>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default AuthDialog;
