import React from 'react';
import { Account } from '../components/Accounts';
import Attributes from '../components/Attributes';

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
