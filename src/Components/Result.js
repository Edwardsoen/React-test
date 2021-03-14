
import React, {Component} from 'react'; 
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tags from './Tags'; 
import Tabs from './Tabs';
import '../style/index.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import '../style/test.scss';


class Result extends React.Component{
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = { 
          siteslist:[], 
          selectedTab: "all", //default
          imagesData: [], 
          currentPage:1,  //number of images requested....  will reset onTabChange //artstation max == 50, dev == 
          tagStatus:{}
         }; 
        this.handleTabChange = this.handleTabChange.bind(this); 
        this.appendSitesList = this.appendSitesList.bind(this); 
        this.grabNewData = this.grabNewData.bind(this); 
        this.scrollAction = this.scrollAction.bind(this); 
        this.handleTagChange = this.handleTagChange.bind(this); 
      }


    
    getImageData(search, siteCode, page){
          //sitesCide = site code from sitseList sitesList data [0] == all
      const link = "http://192.168.43.176:3000/"; 
      this.controller = new AbortController();
      var signal = this.controller.signal;

      
      var s = `search=${search}`; 
      
      if(!siteCode){
        var site = ""; 
      }else {
        var site = `&sites=${siteCode}`;
      }
      var a =  `&page=${page}`; 
      const url = `${link}/search/all?${s}${site}${a}`;    //${link}/search/all?search=${search}&sites=${siteCode}&page=${page}; 
      const fetch = require('node-fetch'); 
      fetch(url, {signal}).then(res => res.json())
          .then(data => JSON.parse(JSON.stringify(data))["data"])
          .then(d => this.setState({imagesData:this.state.imagesData.concat(d)}))
          .catch(error => {alert(error)}); 
    };

    componentDidMount(){
      var searchItem = new URLSearchParams(window.location.search).get("q"); 
      this.getImageData(searchItem,"", this.state.currentPage); 
    };

    
    createTabView(){
      try {
      var data = this.state.imagesData;
      var i;
      var JsXview = [];  
      for(i=0; i <= data.length - 1; i++){//fix this
        let url = data[i]['url'];
        let icon = data[i]["icon"]
        console.log(url); 
          JsXview.push(
                    <GridListTile style = {{borderRadius: "10%", overflow:"hidden"}} key = {`list${i}`}>
                      <a href = {url }><img src= {icon} height = "300" width = "300" style = {{objectFit:"cover"}}/></a>
                    </GridListTile>
        )
      }
      return JsXview; 
    }catch(e){
        return null; 
      }
    }
    
    handleTabChange(e){
      this.controller.abort(); 
      this.setState({currentPage:1}); 
      this.setState({imagesData:[]}); 
      this.setState({selectedTab:e});
      this.grabNewData(); 
    };

    appendSitesList(e){
      this.setState({siteslist: e});
    };

    grabNewData() { // new data onTabChange 
      var searchItem = new URLSearchParams(window.location.search).get("q"); 
      console.log("grabbing new data"); 
      this.getImageData(searchItem,this.state.selectedTab,this.state.currentPage);
      console.log("new data grabbed"); 
    };


    scrollAction(){
      this.setState({currentPage:this.state.currentPage + 1});
      var searchItem = new URLSearchParams(window.location.search).get("q"); 
      this.getImageData(searchItem,"", this.state.currentPage); 
      // this.setState({imagesData:this.state.imagesData.concat(this.state.imagesData)});
      console.log("is scrolled")
    }

    handleTagChange(e){
      this.setState({tagStatus:e})
    }
   

    render(){
        return( 
            <div>
             <Tags tagHash = {this.handleTagChange}></Tags>
            <Tabs isChanged = {this.handleTabChange} siteslist = {this.appendSitesList}></Tabs>   
    
               <InfiniteScroll
                dataLength={this.state.imagesData.length}
                next={this.scrollAction}
                hasMore={true}
                initialLoad = {true}
                loader={<div className="loader" key={0}>Loading ...</div>}
                >
               <GridList cellHeight={300} cols={6} style ={{maxWidth:"100%", maxHeight:"100%", overflow:"hidden", margin:"0", height:"100%"}}>                     
               {this.createTabView()}   
               </GridList>  


            


              </InfiniteScroll> 


        </div>
        )
    }
}


export default Result; 