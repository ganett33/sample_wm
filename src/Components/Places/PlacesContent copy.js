import React, { useState, useEffect } from 'react'
import '../components.css';
import { 
    Content,
    PlacesBox,
    PlacesTitle,
    PlacesWrapper,
    UnderLine
 } from './PlacesElement';



const PlacesContent = () => {
    return (
        <PlacesBox>
            <PlacesWrapper>
            <PlacesTitle > Places <UnderLine/> </PlacesTitle>
            <Content></Content>

            </PlacesWrapper>
        </PlacesBox>


    );
}

export default PlacesContent;
