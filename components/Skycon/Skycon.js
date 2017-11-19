import React from 'react'
import { WebView } from 'react-native'

export default class Skycon extends React.Component {
  render() {
    const html = `
    <!doctype html>
    <html>
      <body>
        <canvas id="${this.props.icon}" width="${this.props.size}" height="${this.props.size}"></canvas>

        <script src="https://cdn.rawgit.com/darkskyapp/skycons/41ff9332/skycons.js"></script>
        <script>
          var icons = new Skycons(),
              list  = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
              ],
              i;

          for(i = list.length; i--; )
            icons.set(list[i], list[i]);

          icons.play();
        </script>
      </body>
    </html>
    `
    return (
      <WebView source={{html: html}}></WebView>
    );
  }
}