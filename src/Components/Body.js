import React, {Component}from "react";
import './Style.css';
import Header from "./Header";
import Header2 from "./Header2";

class Body extends  Component{
    constructor()
    {
        super();
        this.state = {
            isFunctionBox :true,
            isClassBox:true

        }
    }
    shouldComponentUpdate(prevState)
    {
        if(prevState!==this.state)
        {
            return true;
        }
        return false;
    }
    changeFuntion =()=>
    {
        this.setState({
            isFunctionBox : !this.state.isFunctionBox
        })
    }

    changeClass = ()=>
    {
        this.setState({
            isClassBox : !this.state.isClassBox
        })
    }

    

    render(){
    return(
        <div className="background">
            <button className="btn" onClick={this.changeFuntion}>Click to see function    component</button>
            <button className="btn" onClick={this.changeClass}>Click to see class component</button>
            <div>
           { this.state.isClassBox&&<Header/>}
            {this.state.isFunctionBox&&<Header2/>}
            </div>
        </div>
    )

    
}
}


export default Body;