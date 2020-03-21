import React from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
// import { BrowserRouter, Route } from 'react-router-dom';


import SigUpPage from './pages/SignUp';
import SigInPage from './pages/SignIn';

const Routers = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={SigInPage} />
            <Route exact path="/signUp" component={SigUpPage} />
            {/* <Route exact path="/home" component={StudentDashboard} /> */}
        </BrowserRouter>
    )
}
export default Routers 