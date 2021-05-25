import { Account } from '../components/Accounts';
import Attributes from '../components/Attributes';
import React from 'react';

import Signup from '../components/Signup';
import Login from '../components/Login';
import Status from '../components/Status';
import ForgotPassword from '../components/ForgotPassword';
import Settings from '../components/Settings';



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
