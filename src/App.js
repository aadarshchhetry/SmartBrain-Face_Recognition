import React from 'react';
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      {
        /*<Imagelink_formation />
          <Facerecognition /> */
      }
      <Logo />
    </div>
  );
}

export default App;
