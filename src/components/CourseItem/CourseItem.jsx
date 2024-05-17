import { Link } from 'react-router-dom';
import './courseitem.css'

const CourseItem = (props) => {

    console.log(props.title);

    return (
        <Link className='course' to={`/singlecourse/${props.id}`} title="MOOOOREE">

            <img src={props.image} alt="" />
            <h2 className='course__title'>Title: {props.title}</h2>
            <p className='course__duration'>Duration: {props.duration} month</p>

        </Link>
    );
};

export default CourseItem;