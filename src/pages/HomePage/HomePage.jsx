import { useState, useEffect } from 'react';

import './homepage.css'

import axios from 'axios';

import CourseItem from '../../components/CourseItem/CourseItem';
import { Box, Snackbar } from '@mui/material';


const HomePage = () => {

    // json-server --watch db.json

    const [courses, setCourses] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/courses")
            .then(({ data }) => setCourses(data))
    }, [])

    const deleteCourse = (id) => {
        axios.delete(`http://localhost:3000/courses/${id}`)
            .then(({ data }) => {
                setOpen(true)
                setCourses(courses.filter(course => course.id !== data.id))
            })
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Box to="/single" className='course__wrapper' style={{ color: "black" }}>
                {courses.map(course => <CourseItem deleteCourse={deleteCourse} title={course.title} duration={course.duration} id={course.id} />)}
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="DELETED COURSE!"
            />
        </>
    );
};

export default HomePage;