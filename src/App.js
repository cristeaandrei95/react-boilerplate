import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import amber from '@material-ui/core/colors/amber';
import cyan from '@material-ui/core/colors/cyan';
import { withAuthentication } from './Session';
import * as ROUTES from './constants/routes';
import { Landing, SignUp, SignIn, PasswordForgot, Home, Account, Admin } from './pages';
import Navigation from './components/Navigation';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: amber[500]
        },
        secondary: { 
            main: cyan[500]
        }
    },
});

const Page = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const App = () => (
    <ThemeProvider theme={theme}>
        <Router>
            <Navigation />
            <Page>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.PASSWORD_FORGOT} component={PasswordForgot} />
                <Route path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.ACCOUNT} component={Account} />
                <Route path={ROUTES.ADMIN} component={Admin} />
            </Page>
        </Router>
    </ThemeProvider>
);

export default withAuthentication(App);;