import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from "../../services/userService";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('login success');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log(error.response);
        }

    }

    render() {
        // JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group input-login'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form-group input-login'>
                            <label>Password:</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter your password'
                                onChange={(event) => this.handleOnChangePassword(event)}
                            />
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className='col-12'>
                            <a href="#" className='forgot-password'>Forgot your password?</a>
                        </div>
                        <div className='col-12 text-center text-other-login'>
                            <span>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g goole-icon"></i>
                            <i className="fab fa-facebook-f facebook-icon"></i>
                            <i className="fab fa-twitter twitter-icon"></i>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
