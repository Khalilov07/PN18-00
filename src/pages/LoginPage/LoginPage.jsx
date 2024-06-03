import React, { useState } from 'react';

import { Button, TextField, IconButton, Snackbar } from '@mui/material';

import axios from 'axios';

import { addUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

const LoginPage = ({ handleState }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
            </IconButton>
        </React.Fragment>
    );

    const regUser = (e) => {

        e.preventDefault()

        const user = {
            email,
            password
        }

        axios.post("http://localhost:3001/login", user)
            .then(res => {
                setEmail('')
                setPassword('')
                setOpen(true)
                setUser(res.data.user)
                dispatch(addUser(res.data.user))
                setResponse("you're login")
            })
            .catch(err => {
                setOpen(true)
                setResponse(err.response.data)
            })

    }

    return (
        <div style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {user.name}
            
            <form onSubmit={(e) => regUser(e)} // submit - Отправка 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    width: "25%",
                    padding: "50px 0",
                    borderRadius: "8px",
                    border: "1px solid gray"
                }}
            >
                <h1>Login</h1>
                <TextField
                    id="outlined-basic"
                    label="Email..."
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Password..."
                    variant="outlined"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={null} type='submit' variant="contained" color="success">
                    LOGIN
                </Button>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={response}
                action={action}
            />
        </div>
    );
};

export default LoginPage;
{/* 
    1. перенести код с RegisterPage в LoginPage
    2. убрать состояние и TextField который отвечает за name
    3. делать запрос с email И password на ссылку http://localhost:3001/login
    4. получать уведомление (snackBar) о том что вы вошли в аккаунт
    5. создать состояние user, внутри then получать данные о пользователе (res), полученные данные сохранять user 
*/}