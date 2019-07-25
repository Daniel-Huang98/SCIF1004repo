import React from 'react';
import './../CSS/reference.css'

class Reference extends React.Component{
    render(){
        return(
            <div className="Reference">
                <p>{this.props.refer}</p>
            </div>
        );
    }
}

export default Reference;