import React, {Component} from 'react'



class Login extends React.Component{
    render(){
        return(
            <div style={{width: "50%", margin: 'auto'}}>
            <form>
                <div className= "mb-3">
                    <label className= "form-label" for = "username">Username</label>
                    <input id = "username" className = "form-control"></input>
                </div>
                <div className = "mb-3">
                    <label className= "form-label" for = "password">Password</label>
                    <input type = "password" name = "password" id= "password" className = "form-control"></input>
                    <input type = "checkbox" name ="rememberMe"></input> 
                    <label for = "rememberMe" style = {{margin:'3px'}}> Remember me </label>
                    <a href =  "/" name = "forgotPassword" style = {{float:'right'}}>forgot password?</a>
                </div>
                    <input type = "commit" value = "Login" className = "btn btn-primary"></input>

            </form>
            </div>


        ); 
    }

}

export default Login