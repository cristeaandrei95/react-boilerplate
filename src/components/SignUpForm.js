import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as ROUTES from '../constants/routes';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { BaseButton } from './';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledTextField = styled(TextField)`
    width: 100%;
`;

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        event.preventDefault();
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                  .user(authUser.user.uid)
                  .set({
                    username,
                    email,
                  });
            })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

        return (
            <StyledForm onSubmit={this.onSubmit}>
                <StyledTextField
                    label="username"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                />
                <StyledTextField
                    label="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                />
                <StyledTextField
                    label="password"
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                />
                <StyledTextField
                    label="Confirm password"
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                />
                <Box mt={2}>
                    <BaseButton variant="contained" color="primary" disabled={isInvalid} type="submit">
                        Sign Up
                    </BaseButton>
                </Box>

                {error && <p>{error.message}</p>}
          </StyledForm>
        );
    }
}

export default withRouter(SignUpForm);