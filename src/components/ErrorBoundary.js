import React, { Component } from 'react';

class ErrorBoundary extends Component{
    
    constructor(props){
        super(props);
        this.state={
            hasError:false
        };
    }

    componentDidCatch(error, error_info){
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError){
            //Display fallback UI
            return(<h1>Sorry, Some Error has occured while processing child component</h1>);
        }
        else{
            return this.props.children;
        }
    }


}


export default ErrorBoundary;