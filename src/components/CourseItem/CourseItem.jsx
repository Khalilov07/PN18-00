import './courseitem.css'

const CourseItem = (props) => {

    console.log(props.title);

    return (
        <div className="course">
            <h2 className='course__title'>Title: {props.title}</h2>
            <p className='course__duration'>Duration: {props.duration} month</p>
        </div>
    );
};

export default CourseItem;