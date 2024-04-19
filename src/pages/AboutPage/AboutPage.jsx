import React, { useState } from 'react';

const AboutPage = () => {

    // useState (хук) - это состояние которые помогает изменять данные с течением времени

    const [likes, setLikes] = useState(0)

    // сделать кнопку которая будет уменьшать лайки и сделать кнопку которая будет обнулят лайки

    return (
        <div>
            <h2>{likes}</h2>

            <button onClick={() => setLikes(likes + 1)}>ADD LIKE</button>

        </div>
    );
};

export default AboutPage;