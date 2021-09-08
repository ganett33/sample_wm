import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import shops from "../Restaurants.json";
import "../components.css";


export const MapComponent = () => {

    const [viewport, setViewport] = useState({
        latitude: -37.68279137620957, 
        longitude: 176.1660871874423,
        width: "950vw",
        height: "60vh",
        zoom: 12
    });
    const [seletedShop, setSelectedShop] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedShop(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        }
    },[]);

    return (
        <div className="map__section">
            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/ganett33/ckt9ayb7c5rg018potqb7wfd7"
            onViewportChange={viewport => {
                setViewport(viewport);
                }}
            >
                {shops.map(shop => (
                    <Marker 
                        key={shop.id}
                        latitude={shop.geo[0]}
                        longitude={shop.geo[1]}
                    >
                        <button className="marker_btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedShop(shop);
                            }}    
                        >
                            <img src="/src/images/logo.svg" alt="WAM" />
                        </button>
                    </Marker>
                ))}

                {seletedShop ? (
                    <Popup 
                        latitude={seletedShop.geo[0]} 
                        longitude={seletedShop.geo[1]}
                        onClose={() => {
                            setSelectedShop(null);
                        }}
                    >
                        <div className="pop_up">
                            <h2>{seletedShop.name}</h2>
                            <p>{seletedShop.des}</p>
                        </div>
                    </Popup>
                ):null}    
             </ReactMapGL>
        </div>
    );
}

export default MapComponent;
