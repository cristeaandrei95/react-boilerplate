import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as ROUTES from '../constants/routes';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { BaseButton } from './';

const INITIAL_STATE = {
    email: '',
    password: '',
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

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.firebase
          .signInWithEmailAndPassword(email, password)
          .then(() => {
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
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <StyledForm onSubmit={this.onSubmit}>
                <StyledTextField
                    label="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                />
                <StyledTextField
                    label="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                />
                <Box mt={2}>
                    <BaseButton variant="contained" color="primary" disabled={isInvalid} type="submit">
                        Sign In
                    </BaseButton>
                </Box>
                {error && <p>{error.message}</p>}
          </StyledForm>
        );
    }
}

export default withRouter(SignInForm);