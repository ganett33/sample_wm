import React from 'react';
import { Box, Form, FormBtn, FormContent, FormH1, FormLabel, FormWrap, FormInput, Icon, Text } from './SigninElements';

const Signinform = () => {
    return (
        <>
         <Box>
         <FormWrap>
            <Icon to="/">Word A'Mouth</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='email'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormBtn type='submit'>Continue</FormBtn>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
         </Box>   
        </>
    );
};

export default Signinform;
