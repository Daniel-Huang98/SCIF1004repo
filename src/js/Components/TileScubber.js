import React from "react";
import Tile from './Tile.js';
import Button from './Button.js'
import './../CSS/TileScrubber.css'

class Scrubber extends React.Component{
    render(){
        var caption = this.props.data.caption;
        var img = this.props.data.meme;
        var discussion = this.props.data.discussion;
        return(
            <div id="Scrubber">
                <Button onclick={this.props.decrementIndex} start={1} end={2} image={require('./../Images/LeftArrow.png')}/>
                <Tile caption={caption} meme={img} discussion={discussion}/>
                <Button onclick={this.props.incrementIndex} start={3} end={4} image={require('./../Images/RightArrow.png')}/>
            </div>
        );
    }
}


export default Scrubber;