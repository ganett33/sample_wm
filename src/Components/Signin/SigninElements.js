import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import '../components.css';

export const Box = styled.div`
    min-height: 692px;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #1112;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 32px 32px 32px;
    
    @media screen and (max-width: 400px) {
        margin-left: 16px 8px 16px 8px;
        marign-top: 8px;
    }
`;

export const IconContent = styled(Link)`
    font-family: var(--ff-primary);
    text-decoration: none;
    color: var(--clr-accent);
    font-weight: var(--fw-bold);
    font-size: 38px;

    @media screen and (max-width: 400px) {
        margin-left: 16px 8px 16px 8px;
        marign-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 400px) {
       padding: 10px;
    }
`;

export const Form = styled.form`
    background: #000;
    max-width: 400px;
    height: auto;
    width: 100%;
    font-family: var(--ff-secondary);
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
     }
`;

export const FormH1 = styled.h1`
     margin-bottom: 40px;
     color: #fff;
     font-size: 20px;
     font-family: var(--ff-primary);
     font-weight: var(--fw-reg);
     text-align: center;
`;

export const FormLabel = styled.label`
     margin-bottom: 8px;
     font-size: 14px;
     color: #fff;
`;

export const FormInput = styled.input`
     padding: 16px 16px;
     margin-bottom: 32px;
     border: none;
     border-radius: 4px;
`;

export const FormBtn = styled.button`
     background: #01bf71;
     padding: 16px 0;
     border: none;
     border-radius: 4px;
     color: #fff;
     font-size: 20px;
     cursor: pointer;
`;

export const Text = styled.span`
     text-align: center;
     margin-top: 24px;
     color: #fff;
     font-size: 14px;
`;


