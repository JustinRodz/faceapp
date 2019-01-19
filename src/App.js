import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';

const particlesOptions = {
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 900,
                
                    }
                  }
                }
              }
            
          
              
class App extends Component {
  render() {
    return (
    <div className="App">
    <Particles className='particles' 
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      
      {/*<FaceRecogniton /> */}
    </div>
    );
  }
}

export default App;
