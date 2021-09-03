import React, { useState } from 'react';
import '../components.css';
import { 
    PlaceBox,
    PlaceTitle
 } from './PlaceElement';



const PlaceContent = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <PlaceBox>
            <PlaceTitle>Place</PlaceTitle>
        </PlaceBox>
    );
}

export default PlaceContent;


