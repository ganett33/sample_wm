import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { authService, firebaseInstance   } from '../../fbase';

import { 
    Box,
    Form, 
    FormInputBtn,
    FormBtn, 
    FormContent, 
    FormH1,
    FormH4, 
    FormLabel, 
    FormWrap, 
    FormInput, 
    Icon, 
    IconContent, 
    Text1,
    Text2
 } from './SigninElements';

const Signinform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
      const {
        target: { name, value },
      } = event;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          let data;
          if (newAccount) {
            data = await authService.createUserWithEmailAndPassword(email, password);
          } else {
            data = await authService.signInWithEmailAndPassword(email, password);
          }
          console.log(data);
        } catch (error) {
          setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
      const {
        target: { name },
      } = event;
      let provider;
      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    };
    return (
        <>
         <Box>
         <FormWrap>
            <Icon to="/" >
            <IconContent to="/">Word A'Mouth</IconContent>
            </Icon>
                <FormContent>
                    <Form onSubmit={onSubmit}>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput 
                        name="email"
                        type="text"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={onChange}                  
                        />
                        <FormLabel htmlFor='email'>Password</FormLabel>
                        <FormInput 
                         name="password"
                         type="password"
                         placeholder="Password"
                         required
                         value={password}
                         onChange={onChange}
                        />
                        <Text1>Forgot password</Text1>
                        <Text2>{error}</Text2>
                        <FormH4 onClick={toggleAccount}>
                          {newAccount ? "Sign In" : "Create Account"}
                        </FormH4>
                        <FormInputBtn type="submit" value={newAccount ? "Create Account" : "Sign In"} />
                        <br />
                        <FormBtn onClick={onSocialClick} name="google">Continue with <FaGoogle /></FormBtn>
                        <FormBtn onClick={onSocialClick} name="github">Continue with <FaGithub /></FormBtn>
                    </Form>
                </FormContent>
            </FormWrap>
         </Box>   
        </>
    );
};

export default Signinform;
