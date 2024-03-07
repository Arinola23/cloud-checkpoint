import React from 'react';
import { CssBaseline } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const App = () => {
  return (
    <div className="root">
      <CssBaseline />
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default App;
