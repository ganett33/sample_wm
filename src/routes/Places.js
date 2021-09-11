import React from 'react';
import PlacesContent from '../components/Places/PlacesContent';
import Reviews from '../components/Reviews/Reviews';
import MapComponent from  '../components/Map/MapComponent';

const Places = () => {
    return (
        <>
        <Reviews />
        <MapComponent />
        <PlacesContent />
      </>
    )
}

export default Places;