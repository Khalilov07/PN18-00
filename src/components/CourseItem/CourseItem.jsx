import './courseitem.css'

const CourseItem = (props) => {

    console.log(props.title);

    return (
        <div className="course">
            <h2 className='course__title'>Title: {props.title}</h2>
            <p className='course__descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime omnis alias saepe similique officiis ipsam delectus totam at mollitia repudiandae soluta odio ea pariatur, inventore excepturi nobis deserunt nemo?</p>
        </div>
    );
};

export default CourseItem;