// components/SignupPage/SignupButton.js

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignupButton = (props) => {
  const [modal, setModal] = useState(false);

  const { validInputs, email, nationality } = props;

  const toggle = () => {
    if (validInputs) {
      setModal(!modal);
    }
  }

  const hello = {
    'en': 'Hello',
    'de': 'Hallo',
    'fr': 'Bonjour',
  };

  return (
    <div>
      <Button color='primary' onClick={toggle}>Sign up</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{hello[nationality]}!</ModalHeader>
        <ModalBody>
          Thanks for signing up. Your email is: {email}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SignupButton;
