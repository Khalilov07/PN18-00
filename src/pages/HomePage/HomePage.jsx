import { useState, useEffect } from 'react';

import './homepage.css'

import axios from 'axios';

import CourseItem from '../../components/CourseItem/CourseItem';
import { Box, Snackbar } from '@mui/material';


const HomePage = () => {

    // json-server --watch db.json

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/courses")
            .then(({ data }) => setCourses(data))
    }, [])

    return (
        <>
            <Box to="/single" className='course__wrapper' style={{ color: "black" }}>
                {courses.map(course => <CourseItem title={course.title} duration={course.duration} id={course.id} />)}
            </Box>
        </>
    );
};

export default HomePage;