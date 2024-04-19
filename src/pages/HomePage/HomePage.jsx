import './homepage.css'

import CourseItem from '../../components/CourseItem/CourseItem';


const HomePage = () => {

    const courses = [
        {
            id: 1,
            title: "HTML",
            duration: 2
        },
        {
            id: 2,
            title: "CSS",
            duration: 2
        },
        {
            id: 3,
            title: "JS",
            duration: 2
        },
        {
            id: 4,
            title: "REACT JS",
            duration: 2
        }
    ]

    return (
        <div className='course__wrapper'>
            {courses.map(course => <CourseItem title={course.title} /> )}
        </div>
    );
};

export default HomePage;