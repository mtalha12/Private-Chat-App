import React from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
// import { BrowserRouter, Route } from 'react-router-dom';


import SigInPage from './pages/SignUp';

const Routers = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={SigInPage} />
            {/* <Route exact path="/home" component={StudentDashboard} /> */}
        </BrowserRouter>
    )
}
export default Routers 