import React from 'react';
import * as ROUTES from '../constants/routes';
import { BaseLink } from './';

export default () => (
    <p>
        <BaseLink to={ROUTES.PASSWORD_FORGOT}>Forgot Password?</BaseLink>
    </p>
);