import React, {useEffect, useState, useRef} from 'react';
import {
    ImageSection, 
    ImageWrapper,
    ImageSlide,
    ImageSlider,
    ImagePic,
    Button,
    SliderButtons,
    ImageContent,
    PrevArrow,
    NextArrow
} from './ImageElement';


const NewPlace = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)
        
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            };
        };
    }, [current, length]
    );
    
    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        };
        
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        };
        
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    
      if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

    return (
    <ImageSection>
        <ImageWrapper>
            {slides.map((slide, index) => {
                return (
                    <ImageSlide key={index}>
                        {index === current && (
                            <ImageSlider>
                            <ImagePic src={slide.image} alt={slide.alt}/>
                            <ImageContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.location}</p>
                                <Button to={slide.path} primary="true"
                                css={`max-width: 160px;`}>
                                    {slide.category}
                                </Button>
                            </ImageContent>
                        </ImageSlider>
                         )}
                    </ImageSlide>
                );
            })}
            <SliderButtons>
                <PrevArrow onClick={prevSlide} />
                <NextArrow onClick={nextSlide} />
            </SliderButtons>
        </ImageWrapper>
    </ImageSection>   
    );
};

export default NewPlace;