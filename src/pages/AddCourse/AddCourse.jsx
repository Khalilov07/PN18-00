import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './addcourse.module.css'

const AddCourse = () => {

    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

    const addCourse = () => {
        const newData = {
            title,
            descr
        }
        
        axios.post("http://localhost:3000/courses", newData)
    }

    return (
        <div className={styles.form__wrapper}>

            <form className={styles.form}>
                <h1>ADD COURSE</h1>
                <TextField
                    id="outlined-basic"
                    label="Title..."
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Descr..."
                    type='number'
                    variant="outlined" 
                    onChange={(e) => setDescr(e.target.value)}
                />
                <Button onClick={addCourse} type='submit' variant="contained" color="success">
                    SEND 
                </Button>
            </form>
        </div>
    );
};

export default AddCourse;