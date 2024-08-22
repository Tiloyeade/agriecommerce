// MapboxMap.js

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapboxMap = ({ options }) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11', // Replace with your desired map style
            center: options.center,
            zoom: options.zoom
        });

        return () => map.remove(); // Clean up on unmount
    }, [options]);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default MapboxMap;
