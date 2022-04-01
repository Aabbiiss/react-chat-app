import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase';


import {
    Paper,
    createStyles,
    Button,
    Title,
  } from '@mantine/core';


  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 900,
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },
  
    form: {
      borderRight: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: 900,
      maxWidth: 450,
      paddingTop: 80,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
  }));

const SignIn = () => {
    const {classes}=useStyles();

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            //console.log('Sign in Successful')

    }
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Welcome to Chat App
        </Title>
        <Button onClick={signInWithGoogle} align="center">Sign in with Google</Button>


      </Paper>
    </div>





  )};

  export default SignIn