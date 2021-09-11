import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import logo from "../../images/logo.svg"
import shops from "../Restaurants.json";
import "../components.css";
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
ReactMapGL.workerClass = MapboxWorker;

export const MapComponent = () => {

    const [viewport, setViewport] = useState({
        latitude: -37.68279137620957, 
        longitude: 176.1660871874423,
        width: "1000vw",
        height: "50vh",
        zoom: 11
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
            mapStyle="mapbox://styles/ganett33/cktbdv4jj7lec18parfyx30u8"
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
                            <img className="img_logo" src={logo} alt="WAM" />
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
