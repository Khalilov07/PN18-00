import { Box, Button, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './singlecourse.module.css'

const SingleCourse = () => {

    const [course, setCourse] = useState({})
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [duration, setDuration] = useState('')
    const [image, setImage] = useState('')
    const [editMode, setEditMode] = useState(false)
    const { id } = useParams() // он берет параметр с URL
    const navigate = useNavigate()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/courses/${id}`)
            .then(res => {
                setCourse(res.data)
                setTitle(res.data.title)
                setDuration(res.data.duration)
                setDescr(res.data.descr)
                setImage(res.data.image)
            })
    }, [])

    const deleteCourse = (id) => {
        axios.delete(`http://localhost:3000/courses/${id}`)
            .then(({ data }) => {
                setOpen(true)
                navigate("/")
            })
    }

    const editModeFunc = () => {
        setEditMode(true)
    }

    const editCourse = (id) => {
        setEditMode(false)

        const newData = {
            title: title,
            duration: duration,
            descr: descr,
            image: image
        }

        axios.put(`http://localhost:3000/courses/${id}`,newData)
            .then(res => setCourse(res.data))
    }



    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            padding={"20px 30px"}
        >
            {editMode === false ?
                <Box class={styles.course}>
                    <img src={`${course.image}`} alt="" />
                    <Box class={styles.info}>
                        <h2>{course.title}</h2>
                        <h4>{course.descr}</h4>
                    </Box>
                    {/* кнопка delete не должна быть на главной странице так как и кнопка MORE, за место кнопки more вы будете нажимать на сам курс и переходить на страницу single, кнопки перенесите в singlepage и добавьте кнопку EDIT */}
                    <Box display={"flex"} columnGap={2} justifyContent={"space-between"} width={"100%"}>
                        <Button onClick={() => editModeFunc()} variant="contained" sx={{ background: "green", marginTop: 2 }}>
                            EDIT
                        </Button>
                        <Button onClick={() => deleteCourse(id)} variant="contained" sx={{ background: "red", marginTop: 2 }}>
                            DELETE
                        </Button>
                    </Box>
                </Box>
                :
                <>
                    <Box display={"flex"} columnGap={2} className={styles.editMode}>
                        <TextField
                            id="outlined-basic"
                            label="Title..."
                            variant="outlined"
                            value={title}
                            // onChange - это слушатель события, он срабатывает в момент изменения
                            onChange={(e) => setTitle(e.target.value)} // e.target.value - Это то что ввожу
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

                        <Button onClick={() => editCourse(id)} variant="contained" sx={{ background: "green", marginTop: 2 }}>
                            save
                        </Button>
                    </Box>
                </>
            }
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="DELETED COURSE!"
            />
        </Box>
    );
};

export default SingleCourse;