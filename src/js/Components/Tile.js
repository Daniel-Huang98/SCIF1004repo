import React from "react";
import './../CSS/Tile.css'

class Tile extends React.Component{
    render(){
        if(this.props.reveal == 1){
            var result = "WRONG";
            if(this.props.choice==this.props.answer){
                result = "CORRECT";
            }
            return(
                <div style={{display:this.props.hidden}} className={[this.props.move, "Tile"].join(" ")}>
                    <h1>{result}</h1>
                    <h2>Answer: {this.props.answer}</h2>
                    <img src={this.props.meme}></img>
                    <p>{this.props.discussion}</p>
                </div>
            );
        } else {
            return(
                <div style={{display:this.props.hidden}} className={[this.props.move, "Question"].join(" ")}>
                    <h1 id="fact">{this.props.caption}</h1>
                    <div className="buttonPanel">
                        <div onClick={this.props.revealInfoTrue} className="select">
                            <h1>Accurate</h1>
                        </div>
                        <div onClick={this.props.revealInfoFalse} className="select">
                            <h1>Inaccurate</h1>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Tile;
