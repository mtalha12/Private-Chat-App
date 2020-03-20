import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import InputField from '../common/InputField';
import CustomButton from '../common/CustomButton';


class SigInPage extends Component {
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

    // genderChange = (event) => {
    //     console.log(event.target.value)
    //     this.setState({ gender: event.target.value })
    // }

    render() {
        const { firstName, lastName, email, password, confirmPassword, gender } = this.state
        console.log({ firstName })
        return (
            <div style={{ height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ height: '600px', width: '400px', border: 'solid black 1px', marginTop: '10%' }}>


                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%', }}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3>SignUp</h3>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '40%', paddingTop: '3px' }}>First Name</label>
                            <InputField
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => this.ChangeHandler(e)}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '40%', paddingTop: '3px' }}>Last Name</label>
                            <InputField
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => this.ChangeHandler(e)}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '40%', paddingTop: '3px' }}>Email</label>
                            <InputField
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => this.ChangeHandler(e)}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '40%', paddingTop: '3px' }}>Password</label>
                            <InputField
                                placeholder="Password"
                                type="password"
                                name="firstName"
                                value={password}
                                onChange={(e) => this.ChangeHandler(e)}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ width: '40%', paddingTop: '3px' }}>Confirm Password</label>
                            <InputField
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => this.ChangeHandler(e)}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <div style={{ width: '40%', }}>
                                <label>Gender</label>
                            </div>
                            <div style={{}}>
                                <RadioGroup aria-label="gender" name="gender" value={gender} onChange={this.ChangeHandler} style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                                    <FormControlLabel value="female" control={<Radio size="small" color="default" />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio size="small" color="default" />} label="Male" />
                                    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                </RadioGroup>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <CustomButton
                                title="Sign Up"
                                customStyle={{ backgroundColor: '#1E1E1E', width: '100%', color: 'white' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigInPage