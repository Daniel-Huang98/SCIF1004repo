import React from "react";
import Tile from './Tile.js';
import Button from './Button.js'
import './../CSS/TileScrubber.css'
import Instruct from './Instruct.js'

class Scrubber extends React.Component{
    render(){
        var caption;
        var img;
        var discussion;
        var tiles = [];
        var disp;
        var answer;
        var question;
        var followup;
        var reference;
        tiles.push(<Instruct index={this.props.index} max={this.props.max} hidden={(this.props.index==0 || this.props.index==this.props.max)?"block":"none"}/> );
        for(var itr = 0; itr < this.props.data.length; itr++){
            caption = this.props.data[itr].caption;
            img = this.props.data[itr].meme;
            discussion = this.props.data[itr].discussion;
            answer = this.props.data[itr].answer;
            question = this.props.data[itr].question;
            followup = this.props.data[itr].followup;
            reference = this.props.data[itr].reference;
            console.log(reference);
            if(itr+1 == this.props.index){
                disp = "block";
            }else{
                disp = "none";
            }
            tiles.push(<Tile hidden={disp} number={itr+1} refer={this.props.refer} turnOnRefer={this.props.turnOnRefer} turnOffRefer={this.props.turnOffRefer} move={this.props.move} caption={caption} question={question} followup={followup} meme={img} discussion={discussion} revealInfoFalse={this.props.revealInfoFalse} revealInfoTrue={this.props.revealInfoTrue} reveal={this.props.reveal} answer={answer} choice={this.props.choice} reference={reference}/>)
        }
        return(
            <div id="Scrubber">
                <Button hidden={this.props.index>0?"block":"none"} onclick={this.props.decrementIndex} start={1} end={2} image={require('./../Images/LeftArrow.png')}/>
                {tiles}
                <Button hidden={"block"} onclick={this.props.incrementIndex} start={3} end={4} image={require('./../Images/RightArrow.png')}/>
            </div>
        );
    }
}


export default Scrubber;