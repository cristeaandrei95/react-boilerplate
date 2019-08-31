import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

export default () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGOT}>Forgot Password?</Link>
    </p>
);