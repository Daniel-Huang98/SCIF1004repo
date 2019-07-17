import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Top from './Components/Header'
import Bottom from './Components/Footer'
import Scubber from './Components/TileScubber'
class App extends Component{
    render(){
        return (
            <div className="App">
              <Top/>
              <Scubber/>
              <Bottom/>
            </div>
          );
    }
}

export default App;

const wrapper = document.getElementById("AppContainer");
wrapper ? ReactDOM.render(<App/>,wrapper) : false;