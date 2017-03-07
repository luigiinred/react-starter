import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import LoginForm from './loginForm';



class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {};

    }


    componentWillMount() {
        // this.onPublishMessage(`${username} has left`)
    }

    componentWillUnmount() {
    }

    login() {
        this.props.dispatch({ type: 'LOGIN_REQUEST' });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header"></div>
                <div className="content">
                    <LoginForm></LoginForm>
                </div>

            </div>
        );
    }
}

export default connect()(Login);
