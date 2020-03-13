import React, { Component } from 'react';
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import ImageFile from './components/ImageFile/ImageFile';

class App extends Component {
  constructor() {
    super()
    this.state = ''
  }
  OnInputChange = (event) => {
    console.log(event.target.value)
  }
  OnSubmitButton = () =>{
    console.log('click')
  }
  render(){
    return (
      <div className= "App">
        <Particles className="particles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          OnInputChange= {this.OnInputChange}
          OnSubmitButton= {this.OnSubmitButton} 
        />
        <ImageFile />
      </div>
    );
  }
}

export default App;
