import React, { Component } from 'react';

import { connect } from 'react-redux';


class LoginForm extends Component {


    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    sendMessages(message) {
        this.props.onSubmit(message);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch({ type: 'LOGIN_REQUEST', data: { email: this.state.email, password: this.state.password } });
        return false;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input placeholder="Email" type="email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
                <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                <input type="submit" />
            </form>
        );
    }
}

export default connect(
    (state) => {
        return {}
    }
)(LoginForm);
