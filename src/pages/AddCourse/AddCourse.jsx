import { useState, useEffect } from 'react';
import axios from 'axios';
import { Snackbar } from '@mui/material';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './addcourse.module.css'

const AddCourse = () => {

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState(0)
    const [descr, setDescr] = useState("")
    const [image, setImage] = useState("") 
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
            duration,
            descr,
            image
        }

        axios.post("http://localhost:3000/courses", newData)
            .then(res => {
                setTitle("")
                setDuration(0)
                setDescr("")
                setImage("")
                setOpen(true)
            })
            .catch(err => console.log(err))

            // catch - для ошибок
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

                <TextField
                    id="outlined-basic"
                    label="Description..."
                    variant="outlined"
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Image..."
                    variant="outlined"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
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

// после добавления курса перекидывайте пользователя на страницу home