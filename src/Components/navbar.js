
import React, {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Login from './Login';
import App from './App';
import Register from './Register';
import Result from './Result'
import {MDCDialog} from '@material/dialog';
import {MDCRipple} from '@material/ripple';





class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.props = props; 
    this.handleChange = this.handleChange.bind(this); 
  }
  
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }


  componentDidMount(){
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
   
  }

  testing(){
    return(
        <h1>tseting ASKDJakldhsaljkdh</h1>
    );
  }

    render()
    {
        return (
          
          <div>
            
             <button class="mdc-button">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">Text Button</span>
       </button></div>
          //   <Router>
          //   <div>
              
          //   <nav class="navbar navbar-expand-lg navbar-dark" style ={{position:"relative", backgroundColor: "black"}} aria-hidden = "true" >
          //   <div class="container-fluid"  > 
          //     <a class="navbar-brand" href="/">Home</a>
              
          //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
          //       <ul class="navbar-nav me-auto mb-2 mb-lg-0"style ={{width:"150%"}}>

          //       <form class="d-flex" style ={{width:"100%"}}  method = "GET" action = "search">
                  
          //           <input class="form-control me-2" type="search" placeholder="Search" id="Search" style={{backgroundColor:'black', borderColor:"grey", color:'white'}} onChange = {this.handleChange} name = "q" ></input>
          //           <button class="btn btn-outline-success" type="submit" style={{color:'white', border:"none"}}>Search</button>
          //       </form>
      
                
          //       </ul>
          //       <a class="btn btn-outline-dark" href="/login" style={{color:'white',border:'none' }}>Login</a>
          //       <a class="btn btn-outline-dark"  href="/register" style={{color:'white',border:'none'}}>Register</a>
          //     </div>
          //   </div>
          // </nav>
          //   </div>

          //   <Switch>
          //       <Route path = "/login" component = {Login}/>
           
          //       <Route path = "/register" component = {Register}/> 
          //       <Route path = "/search" component = {() => <Result searchItem = {this.state.inputValue}/>}/>
          //     </Switch>
          //   </Router>  

        ); 
    }
}



export default Navbar; 