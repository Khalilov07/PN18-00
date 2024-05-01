import { useState, useEffect } from 'react';

import './homepage.css'

import axios from 'axios';

import CourseItem from '../../components/CourseItem/CourseItem';


const HomePage = () => {
    
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3000/courses")
            .then( ({ data }) => setCourses(data))
    }, [])

    return (
        <div className='course__wrapper'>
            {courses.map(course => <CourseItem title={course.title} /> )}
        </div>
    );
};

export default HomePage;