import styled,{ css } from 'styled-components/macro';
import '../components.css';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';


export const ImageSection = styled.section`
    font-family: var(--ff-secondary);
    height: 60vh;
    max-height: 1000px;
    position: reltive;
    overflow: hidden;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const ImageSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;
export const ImageSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content:'';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 60vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%,
        );
    }

`;

export const ImagePic = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60vh;
    object-fit: cover;

`;
export const ImageContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400px;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }

`;

export const Button= styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    diplay: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
    }


`;

export const SliderButtons = styled.div`
    position: absolute;
    botton: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

export const arrowsButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition:0.3s;

    &:hover {
        background: #cd853f;
        transform: sclae(1.05);
    }
`;

export const PrevArrow = styled(IoArrowBack)`
${arrowsButtons}`;

export const NextArrow = styled(IoArrowForward)`
${arrowsButtons}`;



