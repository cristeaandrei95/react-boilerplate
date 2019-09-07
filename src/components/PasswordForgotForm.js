import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as ROUTES from '../constants/routes';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { BaseButton } from './';

const INITIAL_STATE = {
    email: '',
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

class PasswordForgotForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        event.preventDefault();
        const { email } = this.state;
        this.props.firebase
            .passwordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <StyledForm onSubmit={this.onSubmit}>
                <StyledTextField
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Box mt={2}>
                    <BaseButton variant="contained" color="primary" disabled={isInvalid} type="submit">
                        Reset My Password
                    </BaseButton>
                </Box>
                {error && <p>{error.message}</p>}
            </StyledForm>
        );
    }
}

export default withRouter(PasswordForgotForm);