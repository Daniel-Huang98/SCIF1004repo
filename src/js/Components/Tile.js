import React from "react";
import './../CSS/Tile.css'

class Tile extends React.Component{
    render(){
        if(this.props.reveal == 0){ //change back to 1
            var result = "WRONG";
            if(this.props.choice==this.props.answer){
                result = "CORRECT";
            }
            return(
                <div style={{display:this.props.hidden}} className={[this.props.move, "Tile"].join(" ")}>
                    <h1>{this.props.caption}</h1>
                    <h2>Result: {result}</h2>
                    <figure>
                        <img src={this.props.meme}></img>
                        <figcaption>Fig.{this.props.number} placeholder</figcaption>
                    </figure>
                    
                    <p>{this.props.discussion}</p>
                </div>
            );
        } else {
            return(
                <div style={{display:this.props.hidden}} className={[this.props.move, "Question"].join(" ")}>
                    <h1 id="fact">{this.props.caption}</h1>
                    <h5 className="information">{this.props.question}</h5>
                    <h5 className="followup">{this.props.followup}</h5>
                    <div className="buttonPanel">
                        <div onClick={this.props.revealInfoTrue} className="select">
                            <h1>Yes</h1>
                        </div>
                        <div onClick={this.props.revealInfoFalse} className="select">
                            <h1>No</h1>
                        </div>
                    </div>
                    <p>{this.props.number}</p>
                </div>
            )
        }
    }
}

export default Tile;
