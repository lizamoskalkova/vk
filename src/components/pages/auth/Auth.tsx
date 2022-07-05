import { Button, ButtonGroup, TextField } from '@mui/material';
import React, { FC, SyntheticEvent, useState } from 'react'
import { IUserData } from './types';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Auth: FC = () => {

    const[isRegForm, setIsRegForm] = useState(false)
    const [userData, setUserData] = useState<IUserData>({

        email: '',
        password: '',
    } as IUserData)
    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = getAuth();


        if (isRegForm) {
            try {
            await createUserWithEmailAndPassword(auth, userData.email, userData.password)
                    
            } catch (error: any) {
                error.message && console.log(error.message)
            }
            }
        else
            console.log('auth')
        console.log(userData.email, userData.password);
        setUserData({
            email: '',
            password: '',
        })
    }
  return (
    <div style ={{display:'flex', justifyContent:'center'}}>
    <form onSubmit={handleLogin}> 
    <TextField type = 'email' label='Email' variant='outlined' value = {userData.email}
    onChange = {e => setUserData({...userData, email: e.target.value})}
    sx ={{display: 'block',  marginTop: '6px'}}/>
     <TextField type = 'password' label='Password' variant='outlined' value = {userData.password}
    onChange = {e => setUserData({...userData, password: e.target.value})}
      sx ={{display: 'block', marginTop: '6px'}} />
     <ButtonGroup variant="contained" >
        <Button type = 'submit' onClick={() => setIsRegForm(false)}>Auth</Button>
        <Button type = 'submit' onClick={() => setIsRegForm(true)}>Register</Button>
        </ButtonGroup>
    
    </form>
    </div>
  )
}

export default Auth