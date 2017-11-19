import React from 'react'
import { WebView } from 'react-native'
import Skycon from './components/Skycon/Skycon.js'
import DarkSkyApi from 'dark-sky-api'

DarkSkyApi.apiKey = '26149efb855ddaeea17b8f133e7682cb'
DarkSkyApi.units = 'si'

export default class App extends React.Component {
  render() {
    // const position = {
    //   latitude: 43.075284, 
    //   longitude: -89.384318
    // };
    // DarkSkyApi.loadCurrent(position)
    //   .then(result => console.log(result));
    console.log('jey')
    return (
      <Skycon icon='partly-cloudy-night'></Skycon>
    );
  }
}