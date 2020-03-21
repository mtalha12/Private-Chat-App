import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import InputField from '../common/InputField';
import CustomButton from '../common/CustomButton';


class SigUpPage extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "male",
        }
    }

    ChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    gotoSignIn = () => {
        this.props.history.push("/")
    }

    render() {
        const { firstName, lastName, email, password, confirmPassword, gender } = this.state
        console.log({ firstName })
        return (
            <div style={{ height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ height: '600px', width: '480px', border: 'solid black 1px', marginTop: '5%' }}>


                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', }}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', }}>
                            <h3 style={{ fontSize: '22px', }}>SIGN UP</h3>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '35%', paddingTop: '3px' }}>First Name</label>
                            <InputField
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '250px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '35%', paddingTop: '3px' }}>Last Name</label>
                            <InputField
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '250px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '35%', paddingTop: '3px' }}>Email</label>
                            <InputField
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '250px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '35%', paddingTop: '3px' }}>Password</label>
                            <InputField
                                placeholder="Password"
                                type="password"
                                name="firstName"
                                value={password}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '250px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '35%', paddingTop: '3px' }}>Confirm Password</label>
                            <InputField
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => this.ChangeHandler(e)}
                                customStyle={{ width: '250px' }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <div style={{ width: '35%', }}>
                                <label>Gender</label>
                            </div>
                            <div style={{ width: '50%' }}>
                                <RadioGroup aria-label="gender" name="gender" value={gender} onChange={this.ChangeHandler} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <FormControlLabel value="male" control={<Radio size="small" color="default" />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio size="small" color="default" />} label="Female" />
                                    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                </RadioGroup>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '12px' }}>
                            <CustomButton
                                title="Sign Up"
                                customStyle={{ backgroundColor: '#707070', width: '100%', color: 'white' }}
                                onClick={this.gotoSignIn}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigUpPage