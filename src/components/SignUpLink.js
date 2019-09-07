import React from 'react';
import * as ROUTES from '../constants/routes';
import { BaseLink } from './';

export default () => (
    <p>
      Don't have an account? <BaseLink to={ROUTES.SIGN_UP}>Sign Up</BaseLink>
    </p>
);