import { render } from '@testing-library/react';
import React, {Component} from 'react'; 


class Register extends React.Component{
    render() {
        return (
            <div>
            <form>
                <div className= "mb-3">
                    <label className= "form-label" for = "username">Username</label>
                    <input id = "username" className = "form-control"></input>
                </div>
                <div className = "mb-3">
                    <label className= "form-label" for = "password">Password</label>
                    <input type = "password" name = "password" id= "password" className = "form-control"></input> 
                    <input type = "password" name = "password" id= "passwordConfirm" placeholder = "Re-enter Password" className = "form-control"></input> 
                </div>
                    <input type = "commit" value = "Register" className = "btn btn-primary"></input>

            </form>
            </div>


        ); 


    }


}

export default Register
