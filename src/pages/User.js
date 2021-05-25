import React from 'react';
import { Account } from '../components/Accounts';
import Signup from "../components/Signup";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Status from "../components/Status";
import Settings from "../components/Settings";
import Attributes from "../components/Attributes";
//I love you dayoung
const  User = ({match}) => {
    return(
        <div>
            <h2>Hello! {match.params.name}</h2>
            <Account>
                <Status />
                <Signup />
                <Login />
                <ForgotPassword />
                <Settings />
                <Attributes />
            </Account>
            
        </div>
    )
}

export default User;
