import React from 'react'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import Signinform from '../Components/Signin/Signinform';

const SignIn = () => {
    return (
        <>
            <scrollToTop />
            <Signinform />
        </>
    );
};

export default SignIn;