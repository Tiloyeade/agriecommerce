// MapContainer.js

import React from 'react';
import MapboxMap from './MapboxMap';

const MapContainer = () => {
    const mapOptions = {
        center: [-74.006, 40.7128], // New York City coordinates (longitude, latitude)
        zoom: 12
    };

    return (
        <div>
            <h2>Farmers Market Locations</h2>
            <MapboxMap options={mapOptions} />
        </div>
    );
};

export default MapContainer;
