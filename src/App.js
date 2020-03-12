import React from 'react';
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
