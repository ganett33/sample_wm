import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import logo from "../../images/logo.svg"
import { dbService } from '../../fbase';
import { onSnapshot, collection } from "firebase/firestore";
import "./map.css";
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
ReactMapGL.workerClass = MapboxWorker;

export const MapComponent = () => {
    const [viewport, setViewport] = useState({
        latitude: -37.68279137620957, 
        longitude: 176.1660871874423,
        width: "100%",
        height: "100%",
        zoom: 11
    });
    const [seletedShop, setSelectedShop] = useState(null);
    const [shops, setShops] = useState([]);

    useEffect(
        () =>
          onSnapshot(collection(dbService, "shops"), (snapshot) =>
          setShops(snapshot.docs.map((doc) => ({ ...doc.data() })))
          ),
        []
    );

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
            width= "1000vw"
            height= "50vh"
            mapStyle="mapbox://styles/ganett33/cktbdv4jj7lec18parfyx30u8"
            onViewportChange={viewport => {
                setViewport(viewport);
                }}
            >
                {shops.map(shop => (
                    <Marker 
                         key={shop.id}
                        latitude={shop.geo.latitude}
                        longitude={shop.geo.longitude}
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
                    latitude={seletedShop.geo.latitude} 
                    longitude={seletedShop.geo.longitude}
                        onClose={() => {
                            setSelectedShop(null);
                        }}
                    >
                        <div className="pop_up">
                            <h3>{seletedShop.name}</h3>
                        </div>
                    </Popup>
                ):null}    
             </ReactMapGL>
        </div>
    );
}

export default MapComponent;
