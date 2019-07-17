import React from "react";
import './../CSS/Tile.css'

class Tile extends React.Component{
    render(){
        return(
            <div className="Tile">
                <h1>{this.props.caption}</h1>
                <img src={this.props.meme}></img>
                <p>{this.props.discussion}</p>
            </div>
        );
    }
}

export default Tile;
