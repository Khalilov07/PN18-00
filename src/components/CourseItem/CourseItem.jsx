import './courseitem.css'

import { Button } from '@mui/material';

const CourseItem = (props) => {

    console.log(props.title);

    return (
        <div className="course">
            <img src={props.image} alt="" />
            <h2 className='course__title'>Title: {props.title}</h2>
            <p className='course__duration'>Duration: {props.duration} month</p>
            <p className='course__descr'>Descr: {props.descr}</p>
            <Button onClick={() => props.deleteCourse(props.id)} variant="contained" sx={{ background: "red", marginTop: 2 }}>
                DELETE
            </Button>
        </div>
    );
};

export default CourseItem;