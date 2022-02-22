import React, {Component} from "react";
import './Style.css'

class Header extends Component {
    constructor()
    {
        super();
        this.state={
            color:'blue'
        }
    }
    shouldComponentUpdate(prevState)
    {
        if(prevState.isClassBox!==this.state.isClassBox)
        {
            return true;
        }
        return false;
    }
    
    render()
    { 
        console.log("class")
        return(
            <div className="block">
                <h1>This block is created using class component</h1>
                <p style={{color:'red'}}>This line is styled using inline styling</p>
                <p className="line">This line is styled using external styling</p>
            </div>
        )
    }
}

export default Header;