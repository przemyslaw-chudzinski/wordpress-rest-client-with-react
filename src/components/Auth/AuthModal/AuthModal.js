import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import SignIn from "./SignIn";

const AuthModal = () => (
    <Modal trigger={<Button>Login or Register</Button>}>
       <SignIn />
    </Modal>
);

export default AuthModal;
