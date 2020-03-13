import React, { Component } from 'react';
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import ImageFile from './components/ImageFile/ImageFile';
import Clarifai from 'clarifai';
// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
  apiKey: 'b95bd782c7794ad7aed49660db3b56c7'
 });

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageURL: '',
    }
  }

  OnInputChange = (event) => {
    event.preventDefault();
    this.setState({input: event.target.value});
  }

  OnSubmitButton = () =>{
    this.setState({imageURL: this.state.input})
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, 
        this.state.input).then(
          function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
          },
          function(err) {
            console.log("no faces")
          }
      );
  }

  render(){
    return (
      <div className= "App">
        <Particles className="particles"/>
        {/* <Navigation /> */}
        <Logo />
        {/* <Rank />  */}
        <ImageLinkForm 
          OnInputChange= {this.OnInputChange}
          OnSubmitButton= {this.OnSubmitButton} 
        />
        <ImageFile imageURL= {this.state.imageURL} />
      </div>
    );
  }
}

export default App;
