import React, { Component } from 'react';
import CardList from '../components/CardList';
import {robots}  from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'; 
//props are things that come out of state

//State is superior to props as props depend on state



//States require classes to extend Compent
//the line "const App=()=>{}" is replaced by "class App extends Component"
class App extends Component{

    constructor(){
        super();
        this.state={//States in react make them smart components
            robots: [],
            searchfield:''//Default search field =''
        };
    }


    componentDidMount(){

        //Once mounted set the state's robot var to robots

        //window.fetch a function to make requests to urls
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{
            this.setState({robots:users})
        });
        
        //Interaction with backend
    }

    render(){
        const FilteredRobots=this.state.robots.filter(robots=>{
            
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

        });
       // console.log(FilteredRobots);
        
        if(this.state.robots.length===0){//Display a loading bar
            return <h1>Loading</h1>
        }
        else{
            return(
                <div>
                <h1>ROBOFRIENDS</h1> 
                <ul style={{backgroundColor:"rgb(244,233,233)"}}>
                <li style={{display:"inline-block",padding:"20px"}}><a href="#home">Home</a></li>
                <li style={{display:"inline-block",padding:"20px"}}><a href="#careers">Careers</a></li>
                <li style={{display : "inline-block",padding:"20px"}} ><a href="#about-us">About Us</a></li>
                </ul>
        
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={FilteredRobots}/>
                </Scroll>
                </div>
                );
        }
        

    }


    onSearchChange=(event)=>{ 
        this.setState({searchfield:event.target.value});
        //Always use setState({key:}) instead of this.state.key=...;
        //event.target.value gives the value contained in the target of the event occurring
    }
    
}


export default App;