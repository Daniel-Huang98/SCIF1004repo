import React from "react";
import Tile from './Tile.js';
import Button from './Button.js'
import './../CSS/TileScrubber.css'

class Scrubber extends React.Component{
    render(){
        var caption;
        var img;
        var discussion;
        var tiles = [];
        var disp;
        for(var itr = 0; itr < this.props.data.length; itr++){
            caption = this.props.data[itr].caption;
            img = this.props.data[itr].meme;
            discussion = this.props.data[itr].discussion;
            if(itr == this.props.index){
                disp = "block";
            }else{
                disp = "none";
            }
            tiles.push(<Tile hidden={disp} move={this.props.move} caption={caption} meme={img} discussion={discussion} />)
        }
        return(
            <div id="Scrubber">
                <Button onclick={this.props.decrementIndex} start={1} end={2} image={require('./../Images/LeftArrow.png')}/>
                {tiles}
                <Button onclick={this.props.incrementIndex} start={3} end={4} image={require('./../Images/RightArrow.png')}/>
            </div>
        );
    }
}


export default Scrubber;