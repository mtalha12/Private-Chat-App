import React, { Component } from 'react';

import InputField from '../common/InputField';
import CustomButton from '../common/CustomButton';

class SigInPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    ChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    gotoSignUp = () => {
        this.props.history.push("/signUp")
    }

    render() {
        const { email, password } = this.state
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ height: '315px', width: '40%', border: 'solid black 1px', marginTop: '5%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', }}>
                            <h3 style={{ fontSize: '22px', }}>SIGN IN</h3>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '15%', paddingTop: '3px' }}>Email</label>
                            <InputField
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '400px' }}

                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '15%', paddingTop: '3px' }}>Password</label>
                            <InputField
                                placeholder="Password"
                                type="password"
                                name="firstName"
                                value={password}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '400px' }}
                            />
                        </div>
                        <div style={{ marginLeft: '62px', width: '100%', marginBottom: '10px' }}>
                            <CustomButton
                                title="Sign In"
                                customStyle={{ backgroundColor: '#707070', width: '78%', color: 'white' }}
                            />
                            <CustomButton
                                title="Goto SignUp"
                                customStyle={{ backgroundColor: '#707070', width: '78%', color: 'white' }}
                                onClick={this.gotoSignUp}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigInPage