import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from './Session';
import * as ROUTES from './constants/routes';
import Navigation from './components/Navigation';
import { Landing, SignUp, SignIn, PasswordForgot, Home, Account, Admin } from './pages';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_FORGOT} component={PasswordForgot} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.ADMIN} component={Admin} />
        </div>
    </Router>
);

export default withAuthentication(App);;