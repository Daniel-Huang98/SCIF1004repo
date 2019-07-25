import React from 'react';
import './../CSS/Instruct.css'


class Instruct extends React.Component{
    render(){
        if(this.props.index == 0){
            return(
                <div className="Instruct" style={{display: this.props.hidden}}>
                    <h2>What do the movies, Contagion and Outbreak, have in common?</h2>
                    <p className="justify">They both explore the science of epidemiology. Both films take their own route on exploring viruses and their implications on society. Contagion presents a simulation of how the world would react to the introduction of a new deadly epidemic through parallel storylines following scientists, the general public and the media. Outbreak, on the other hand, explores the good and evil of science, displaying what would happen if science was used for destruction instead of the benefit of society. Both films are excellent precautionary tales about science. However, have you ever wondered what parts of the science used in the movies are actually real or fake?</p>
                    <ul>
                        <li>In this website, there are number of tiles. Each tile addresses a scientific aspect of either films.</li>
                        <li>To navigate to each tile, click on the left and right arrow buttons. <b>For the best learning experience, navigate to each tile using the right arrow only.</b> Only use the left arrow if you would like to look at previous tiles.</li>
                        <li>Each tile will have a question and two choices, yes or no. To answer, click on either yes or no.</li>
                    </ul>
                    <h5>Prepare to further your understanding of epidemiology and science.</h5>

                </div>
            );
        } else {
            return(
                <div className="Instruct" style={{display: this.props.hidden}}>
                    <h1>Conclusion</h1>
                    <h5 className="Thanks">Thank you for going through all the tiles. I hope your understanding of viruses and epidemiology has been furthered. You may have realised that what you thought was real science, in Contagion and Outbreak, may have been inaccurate. In the future, when you watch a movie containing science, have a think about whether the science is real or if it is simply another Hollywood ploy.</h5>
                </div>
            );
        }
    }
}

export default Instruct;