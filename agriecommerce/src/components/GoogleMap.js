import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ options, onMapLoad }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, options);

        if (typeof onMapLoad === 'function') {
            onMapLoad(map);
        }

        return () => {
            map.setMap(null);
        };
    }, [options, onMapLoad]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;
