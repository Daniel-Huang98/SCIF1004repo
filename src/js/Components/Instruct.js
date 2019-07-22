import React from 'react';
import './../CSS/Instruct.css'

class Instruct extends React.Component{
    render(){
        return(
            <div className="Instruct" style={{display: this.props.hidden}}>
                <h1>Some instructions</h1>
                <p>Insert Some Instructions</p>
                   

            </div>
        )
    }
}

export default Instruct;