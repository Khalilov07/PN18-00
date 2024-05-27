import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';
import axios from 'axios';

const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    gap: "10px"
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
        </div>
    );
};

export default RegisterPage;