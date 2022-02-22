import React from "react";
import './Style.css';

const Header2 = ()=>
{ 
    console.log("function");
    return(
        <div className="block">
                <h1>This block is created using function component</h1>
                <p style={{color:'red'}}>This line is styled using inline styling</p>
                <p className="line">This line is styled using external styling</p>
            </div>
    )
}
export default Header2;