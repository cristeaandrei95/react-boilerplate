import React from 'react';
import { withFirebase } from '../Firebase';
import { BaseButton, BaseLink } from './';

const SignOutButton = ({ firebase, ...props }) => (
    <BaseButton onClick={firebase.signOut} {...props}>
        Sign Out
    </BaseButton>
);
  
export default withFirebase(SignOutButton);