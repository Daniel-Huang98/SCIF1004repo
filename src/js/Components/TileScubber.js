import React from "react";
import Tile from './Tile.js';
import Button from './Button.js'
import './../CSS/TileScrubber.css'

class Scrubber extends React.Component{
    render(){
        var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in odio at neque bibendum hendrerit. Nunc sodales mi vitae consectetur aliquet. Suspendisse ornare facilisis purus, a blandit felis mattis vitae. Etiam sit amet blandit mi. Sed cursus, lacus vitae rutrum congue, lacus lorem consequat odio, ut aliquet diam orci ac felis. Morbi nec porta nunc, blandit tristique felis. Mauris scelerisque, diam nec rhoncus malesuada, odio lorem placerat metus, vel suscipit est magna eget lacus. In id sagittis nunc. Vivamus sed odio eget risus molestie ultrices nec vel neque. Aliquam erat volutpat. Phasellus imperdiet nisl id purus eleifend maximus. Duis commodo.";
        return(
            <div id="Scrubber">
                <Button start={1} end={2} image={require('./../Images/LeftArrow.png')}/>
                <Tile caption={"Someshit"} meme={require("./../Images/logo.svg")} discussion={text}/>
                <Button start={3} end={4} image={require('./../Images/RightArrow.png')}/>
            </div>
        );
    }
}


export default Scrubber;