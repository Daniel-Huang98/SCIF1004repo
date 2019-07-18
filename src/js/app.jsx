import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Top from './Components/Header'
import Bottom from './Components/Footer'
import Scubber from './Components/TileScubber'
import data from './data'

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        index: 0,
        max: 20
      };
      this.incrementIndex = this.incrementIndex.bind(this);
      this.decrementIndex = this.decrementIndex.bind(this);
    }

    incrementIndex(){
      var itr = this.state.index
      if(itr == this.state.max){
        itr = 0;
      } else {
        itr++;
      }
      this.setState({index: itr});
    }

    decrementIndex(){
      var itr = this.state.index
      if(itr == 0){
        itr = this.state.max;
      } else {
        itr--;
      }
      this.setState({index: itr});
    }

    componentDidMount(){
      this.state.max = data.length-1;
    }

    render(){
        var obj = data[this.state.index]
        return (
            <div className="App">
              <Top/>
              <Scubber data={obj} decrementIndex={this.decrementIndex} incrementIndex={this.incrementIndex}/>
              <Bottom/>
            </div>
          );
    }
}

export default App;

const wrapper = document.getElementById("AppContainer");
wrapper ? ReactDOM.render(<App/>,wrapper) : false;