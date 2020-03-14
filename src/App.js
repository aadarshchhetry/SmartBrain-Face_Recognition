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
      box: {},
    }
  }

  OnInputChange = (event) => {
    event.preventDefault();
    this.setState({input: event.target.value});
  }
  facePoints = (data) => {
    const boundingbox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imagesize');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height)
    return{
      p1: boundingbox.left_col * width,
      p2: boundingbox.top_row * height,
      p3: width - (boundingbox.right_col * width),
      p4: height - (boundingbox.bottom_row * height),
    }
  }

  facebox = (boxx) =>{
    console.log(boxx);
    this.setState({box: boxx});
  }

  OnSubmitButton = () =>{
    this.setState({imageURL: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, //Model used 
        this.state.input //URL for the image
      )
      .then(response => this.facebox(this.facePoints(response)));
  }

  render(){
    return (
      <div className= "App">
        <Particles className="particles"/>
        {/* <Navigation /> */}
        <Logo />
        {/* <Rank /> */}
        <ImageLinkForm 
          OnInputChange= {this.OnInputChange}
          OnSubmitButton= {this.OnSubmitButton} 
        />
        <ImageFile 
          box= {this.state.box}
          imageURL= {this.state.imageURL}
        />
      </div>
    );
  }
}

export default App;
