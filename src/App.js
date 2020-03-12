import React from 'react';
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      {
        /*<Imagelink_formation />
          <Facerecognition /> */
      }
      <Logo />
      <ImageLinkForm />
    </div>
  );
}

export default App;
