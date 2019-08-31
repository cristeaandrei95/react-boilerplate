import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const INITIAL_STATE = {
    email: '',
    error: null,
};

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
            <form onSubmit={this.onSubmit}>
            <input
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <button disabled={isInvalid} type="submit">
                Reset My Password
            </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withRouter(PasswordForgotForm);