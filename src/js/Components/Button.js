import React from 'react';
import "./../CSS/Button.css"

class Button extends React.Component{
    render(){
        console.log(this.props.hidden);
        return(
            <div onClick={this.props.onclick}  className="button" style={{display:this.props.hidden, gridColumnStart: this.props.begin, gridColumnEnd: this.props.end}} >
                <img src={this.props.image}></img>
            </div>
        );
    }
}

export default Button;