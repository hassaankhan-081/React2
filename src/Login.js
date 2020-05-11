import React, { Component } from 'react';
import './App.css';




class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

render() {
        return (

            <div className="wrapper">

                <h1>Log In </h1>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <form noValidate>

                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input
                                    className=""
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    noValidate

                                />

                            </div>
                            <div className="password">
                                <label htmlFor="password">Password</label>
                                <input
                                    className=""
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.email}
                                    noValidate

                                />

                            </div>
                            <div className="createAccount">
                                <button onClick={this.login}>Log In</button>
                          

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;
