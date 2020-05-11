import React, { Component } from 'react';
import './App.css';
import './Register.js';
import { useHistory } from "react-router-dom";





       
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        this.authlistner()
    }
    authlistner() {
        if (user) {
            this.setState({ user })
        }
        else {
            this.setState({ user: null })
        }
    }
    
    render() {
        
        return (
           
            <div className="wrapper">
                <div className="App">
                    {this.state.user ? (<Login />) : (<Create Account />)}
                </div>

                <h1>Create Account </h1>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <form noValidate>
                            <div className="firstName">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className=""
                                    placeholder="First Name"
                                    type="text"
                                    name="firstName"
                                    noValidate

                                />

                            </div>
                            <div className="lastName">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    className=""
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastName"
                                    noValidate

                                />

                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input
                                    className=""
                                    placeholder="Email"
                                    type="email"
                                    name="email"
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
                                    noValidate

                                />

                            </div>
                            <div className="createAccount">
                                <button type="submit">Create Account</button>
                                <button class="btn btn-primary" onClick={() => history.push('/Login')}>Already Have an Account?</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
