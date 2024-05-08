import { useState, useEffect } from 'react';

import './homepage.css'

import axios from 'axios';

import CourseItem from '../../components/CourseItem/CourseItem';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


const HomePage = () => {

    // json-server --watch db.json
    
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3000/courses")
            .then( ({ data }) => setCourses(data))
    }, [])

    return (
        <Link to="/single" className='course__wrapper' style={{color: "black"}}>
            {courses.map(course => <CourseItem title={course.title} duration={course.duration} /> )}
        </Link>
    );
};

export default HomePage;