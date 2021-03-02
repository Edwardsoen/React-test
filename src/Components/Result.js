import Navbar from "./navbar";
import React, {Component} from 'react'; 
import {$,data,jQuery, type} from 'jquery';
import {MDCTabBar} from '@material/tab-bar'; 
import { chips, menu, tab } from "material-components-web";
import {MDCMenu} from '@material/menu';
import {MDCChipSet} from '@material/chips';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './mdc-style.scss'
import Tags from './Tags'; 
import Tabs from './Tabs';




class Result extends React.Component{
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = { 
          sitesList: [], 
          // imagesData: [],
          selectedTab: 0, 
          imagesData : {"artstation":[{"url":"https://www.artstation.com/artwork/8Y906","icon":"https://cdna.artstation.com/p/assets/images/images/009/529/422/20180226133256/smaller_square/finnian-macmanus-10-testingchamber-fmac.jpg?1519673577","isAdult":false},{"url":"https://www.artstation.com/artwork/OvEAy","icon":"https://cdnb.artstation.com/p/assets/covers/images/001/036/975/20150804131610/smaller_square/alexey-pyatov-14-material-testing-room.jpg?1443928403","isAdult":false},{"url":"https://www.artstation.com/artwork/6r31W","icon":"https://cdnb.artstation.com/p/assets/images/images/010/806/811/smaller_square/josu-solano-action-keyframe-lr.jpg?1526333097","isAdult":false},{"url":"https://www.artstation.com/artwork/RY6GVA","icon":"https://cdnb.artstation.com/p/assets/images/images/019/567/009/20190725081248/smaller_square/thomas-dubois-girl-text-web.jpg?1564060368","isAdult":false},{"url":"https://www.artstation.com/artwork/v23Nmd","icon":"https://cdna.artstation.com/p/assets/images/images/034/629/770/smaller_square/james-busby-7.jpg?1612805868","isAdult":false}]}
        }; 
    }

    
    getImageData(search, siteCode, amount){
          //sitesCide = site code from sitseList JSON  
      const url = `http://192.168.111.128:3000/search/all?search=${search}&sites=${siteCode}&amount=${amount}`;  
      const fetch = require('node-fetch'); 
      // fetch(url,{
      //   credentials: 'same-origin'
      // }).then(res => res.json())
      //     .then(data => this.setState({imagesData:JSON.parse(JSON.stringify(data))})); 
    }

    componentDidMount(){
      this.getImageData()
    }



    createImageItem(src){
        return(
            <li class="mdc-image-list__item">
            <div class="mdc-image-list__image">
              <img class="mdc-image-list__image" src={src}/>
            </div>
          </li>
        ); 
    }



    parseImageData(){
      if (this.state.selectedTab == 0 ){ //if all tab selected, merge and flatten list
        var nestedListData =[]; 
        var i;
        var keys = Object.keys(this.state.imagesData);  
        for(i =0; i <= keys.length; i ++){
            var d = this.state.imagesData[keys[i]]
            nestedListData.push(d)
          }
          return [].concat.apply([], nestedListData); //return flatten list == [{url:...., icon:....., }] 
        }
      else{
        return this.state.imagesData[this.state.sitesList[this.state.selectedTab]]; 
        //grab data from specitific sitse 
      }
      
    }

    createTabView(){
      try {
      var data = this.parseImageData(); 
      var i;
      var JsXview = [];  
      console.log(data); 
      for(i=0; i <= data.length - 2; i++){//fix this
        let url = data[i]['url'];
        let icon = data[i]["icon"]
        console.log(url); 
          JsXview.push(
                    <GridListTile>
                      <a href = {url }><img src= {icon}/></a>
                    </GridListTile>
        )
      }
      return JsXview; 
    }catch(e){
        alert(e);
        return null; 
      }
      
        
    }
    
    handleTabChange(e){
      console.log(e); 
    }

    
  





    render(){
        return( 
            <div>
             <Tags></Tags>
            <Tabs isChanged = {this.handleTabChange}></Tabs>
      
         
                 <GridList cellHeight='150'   cols="3">
                    {this.createTabView()}
                </GridList>  
         
        </div>
        )
    }
}


export default Result; 