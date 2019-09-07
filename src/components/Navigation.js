import React from 'react';
import * as ROUTES from '../constants/routes';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AuthUserContext } from '../Session';
import { BaseButton, BaseLink, FirebaseSignOutButton } from './';
import Box from '@material-ui/core/Box';

const Autheticated = () => (
    <>
        <Box>
            <BaseLink color="inherit" to={ROUTES.HOME}>
                Home
            </BaseLink>
        </Box>
        <Box ml={2}>
            <BaseLink color="inherit" to={ROUTES.ACCOUNT}>
                Account
            </BaseLink>
        </Box>
        <Box ml={2}>
            <BaseLink color="inherit" to={ROUTES.ADMIN}>
                Admin
            </BaseLink>
        </Box>
        <Separator />
        
        <FirebaseSignOutButton color="inherit" />
    </>
);

const Separator = styled.div`
    flex: 1;
`;

const Unauthenticated = () => (
    <>
        <BaseLink color="inherit" to={ROUTES.LANDING}>
            Landing
        </BaseLink>

        <Separator />

        <BaseButton color="inherit" underline="none" to={ROUTES.SIGN_IN}>
            Sign In
        </BaseButton>
        <span>|</span>
        <BaseButton color="inherit" underline="none" to={ROUTES.SIGN_UP}>
            Sign Up
        </BaseButton>
    </>
);

const Navigation = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <AuthUserContext.Consumer>
                    { authUser => authUser ? <Autheticated /> : <Unauthenticated /> }
                </AuthUserContext.Consumer>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
