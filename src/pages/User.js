import React from 'react';
import { Account } from '../components/Accounts';
<<<<<<< HEAD
import React from 'react';
import Signup from "../components/Signup";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Status from "../components/Status";
import Settings from "../components/Settings";
import Attributes from "../components/Attributes";
//I love you dayoung
=======
import Attributes from '../components/Attributes';

>>>>>>> parent of 53983db (로그인 수정중)
const  User = ({match}) => {
    return(
        <div>
            <h2>Hello! {match.params.name}</h2>
            <Account>
                <Attributes />
            </Account>
            
        </div>
    )
}

export default User;
