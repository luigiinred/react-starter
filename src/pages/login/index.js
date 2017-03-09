import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './loginForm';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props)
        console.log(this.context)
    }

    componentWillMount() {



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

export default connect((state) => {
    return {
        user: state.user
    }
})(Login);
