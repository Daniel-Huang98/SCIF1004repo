import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Top from './Components/Header';
import Bottom from './Components/Footer';
import Scubber from './Components/TileScubber';
import data from './data';



class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        index: 0,
        max: 20,
        move:"None",
        reveal: 0,
        answer: "false"
      };
      this.incrementIndex = this.incrementIndex.bind(this);
      this.decrementIndex = this.decrementIndex.bind(this);
      this.revealInfoTrue = this.revealInfoTrue.bind(this);
      this.revealInfoFalse = this.revealInfoFalse.bind(this);
    }

    incrementIndex(){
      var itr = this.state.index
      if(itr == this.state.max){
        itr = 0;
      } else {
        itr++;
      }
      this.setState({index: itr,move:"left", reveal: 0});
    }

    decrementIndex(){
      var itr = this.state.index
      if(itr == 0){
        itr = this.state.max;
      } else {
        itr--;
      }
      this.setState({index: itr, move:"right", reveal: 0});
    }

    revealInfoTrue(){
      this.setState({reveal: 1, answer:"True"});
    }

    revealInfoFalse(){
      this.setState({reveal: 1, answer:"False"});
    }


    componentDidMount(){
      this.state.max = data.length+1;
    }

    render(){
        var obj = data[this.state.index];
        return (
            <div className="App">
              <Top/>
              <Scubber index={this.state.index} max={this.state.max} move={this.state.move} data={data} decrementIndex={this.decrementIndex} incrementIndex={this.incrementIndex} revealInfoTrue={this.revealInfoTrue} revealInfoFalse={this.revealInfoFalse} reveal={this.state.reveal} choice={this.state.answer}/>
              <Bottom/>
            </div>
          );
    }
}

export default App;

const wrapper = document.getElementById("AppContainer");
wrapper ? ReactDOM.render(<App/>,wrapper) : false;