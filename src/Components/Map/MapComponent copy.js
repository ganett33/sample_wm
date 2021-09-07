import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from "react-map-gl";

export const MapComponent = () => {
    
    const [viewport, setViewport] = useState({
        latitude: -37.68279137620957, 
        longitude: 176.1660871874423,
        width: "100vw",
        height: "50vh",
        zoom: 12

    });

    return (
        <div>
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/ganett33/ckt9ayb7c5rg018potqb7wfd7"
            onViewportChange={viewport => {
                setViewport(viewport);
                }}
            >
                MAKERS HERE            
             </ReactMapGL>
        </div>
    )
}

export default MapComponent;
