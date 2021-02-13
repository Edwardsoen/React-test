import Navbar from "./navbar";
import React, {Component} from 'react'; 
import {$,data,jQuery} from 'jquery';


class Result extends React.Component{
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = {
            Query : "", 
            isLoaded: false ,
            items:""
        }
    }

    test(){
    
        const fetch = require("node-fetch");
        fetch('https://automatetheboringstuff.com/',{ method: 'POST', 
        mode: 'cors', 
            headers: {
                "Accept-Language": "sdajkhdsajkdhsa",
                'origin': 't'
            }
        })
        .then(res => res.text())
        .then(data => this.setState({items:data}))
    }
    


    render(){
        return(
            <div> props: {this.props.searchItem}{this.test()}
            
            {this.state.items}
            
            </div>

            

        
        )
    }
}


export default Result; 