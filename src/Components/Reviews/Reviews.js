import React from 'react'
import Icon1 from '../../images/korean.jpg';
import Icon2 from '../../images/pasta.jpg';
import Icon3 from '../../images/hamburger.jpg';
import { 
    ReviewH1, 
    ReviewH2, 
    ReviewP, 
    ReviewsBox, 
    ReviewsCard, 
    ReviewsIcon, 
    ReviewsWrapper 
} from './ReviewsElement';

const Reviews = () => {
    return (
        <ReviewsBox>
            <ReviewH1>Reviews</ReviewH1>
            <ReviewsWrapper>
                <ReviewsCard>
                    <ReviewsIcon src={Icon1} />
                    <ReviewH2>hello hello</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
                <ReviewsCard>
                    <ReviewsIcon src={Icon2} />
                    <ReviewH2>Hi hello</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
                <ReviewsCard>
                    <ReviewsIcon src={Icon3} />
                    <ReviewH2>hello How are you</ReviewH2>
                    <ReviewP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, delectus!</ReviewP>
                </ReviewsCard>
            </ReviewsWrapper>
        </ReviewsBox>
    );
}

export default Reviews;
