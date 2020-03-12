import React from 'react';
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import ImageFile from '/components/ImageFile/ImageFile'

function App() {
  return (
    <div className="App">
      <Particles className="particles"/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <ImageFile />
    </div>
  );
}

export default App;
