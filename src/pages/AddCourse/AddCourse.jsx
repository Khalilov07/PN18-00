import { useState, useEffect } from 'react';
import axios from 'axios';
import { Snackbar } from '@mui/material';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './addcourse.module.css'

const AddCourse = () => {

    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState(0)
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const addCourse = (e) => {

        e.preventDefault()

        const newData = {
            title,
            duration
        }

        axios.post("http://localhost:3000/courses", newData)
            .then(res => {
                setTitle("")
                setDuration(0)
                setOpen(true)
            })
    }

    return (
        <div className={styles.form__wrapper}>

            <form className={styles.form}>
                <h1>ADD COURSE</h1>
                <TextField
                    id="outlined-basic"
                    label="Title..."
                    variant="outlined"
                    value={title}
                    // onChange - это слушатель события, он срабатывает в момент изменения
                    onChange={(e) => setTitle(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Duration..."
                    type='number'
                    variant="outlined"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <Button onClick={addCourse} type='submit' variant="contained" color="success">
                    SEND
                </Button>
            </form>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="YOU ADDED COURSE!"
            />

        </div>
    );
};

export default AddCourse;

// вам нужно добавить ещё один TextFiled, где вы будете добавлять инфо о курсе
// вам нужно добавить ещё один TextFiled, где вы будете добавлять картинку для курса