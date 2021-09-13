import React from 'react';
import PicForPlace from '../components/PicforPlace/PicforPlace';
import { SliderData } from '../components/ImageSlider/SliderData';
import DetailContent from '../components/Detail/DetailContent'

const Detail = () => {
    return (
        <>
        <PicForPlace slides={SliderData}/>
        <DetailContent />
      </>
    )
}

export default Detail;