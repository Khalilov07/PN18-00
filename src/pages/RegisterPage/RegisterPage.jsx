import React, { useState } from 'react';

import { Button, TextField, IconButton, Snackbar } from '@mui/material';
import axios from 'axios';

const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')
    const [open, setOpen] = useState(false);

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
            name,
            email,
            password
        }

        axios.post("http://localhost:3001/users", user)
            .then(res => {
                setName('')
                setEmail('')
                setPassword('')
                setOpen(true)
                console.log(res);
                setResponse("you're registred")
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
                <h1>Register</h1>
                <TextField
                    id="outlined-basic"
                    label="Name..."
                    variant="outlined"
                    value={name} // ilim
                    onChange={(e) => setName(e.target.value)}
                />
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
                    REGISTER
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

export default RegisterPage;

// добавьте инпут при регистрации который будет позволять ввести возраст
// стилизуйте формы взяв её из гугл фотографий