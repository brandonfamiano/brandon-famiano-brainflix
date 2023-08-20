import React, { Component } from 'react';
import NavComponent from './components/nav';
import VideoPlayer from './components/main';
 
class App extends Component{
  render(){
    return(
      <div>
        <NavComponent/>
        <VideoPlayer/>
      </div>
    );  
  }
}
 
export default App;