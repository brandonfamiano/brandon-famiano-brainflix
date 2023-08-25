import React, { Component } from 'react';
import NavComponent from './Components/nav';
import VideoPlayer from './Components/main';
 
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