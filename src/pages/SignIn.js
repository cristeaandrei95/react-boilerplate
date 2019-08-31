import React from 'react';
import { FirebaseSignInForm, SignUpLink } from '../components';
import { PasswordForgotLink } from '../components';

export default () => (
    <div>
        <h1>Signin</h1>
        <FirebaseSignInForm />
        <PasswordForgotLink />
        <SignUpLink />
    </div>
);