import React, { useState } from 'react';

import './aboutpage.css'

const AboutPage = () => {

    // useState (хук) - это состояние которые помогает изменять данные с течением времени

    const [likes, setLikes] = useState(0)

    const [allSides, setAllSides] = useState({
        left: 0,
        right: 0
    })

    // 

    const [sides, setSides] = useState([])

    // сделать кнопку которая будет уменьшать лайки и сделать кнопку которая будет обнулят лайки

    const handleAddLike = () => {
        setLikes(likes + 1)
    }

    const handleRemoveLike = () => {
        setLikes(likes - 1)
    }

    const handleZeroLike = () => {
        setLikes(0)
    }


    const handleLeft = () => {
        sides.push("L")
        setAllSides({
            left: allSides.left + 1,
            right: allSides.right
        })
    }

    const handleRight = () => {
        sides.push("R")
        setAllSides({
            left: allSides.left,
            right: allSides.right + 1
        })
    }

    return (
        <div>

            <div className="about__buttons">
                <button onClick={handleAddLike}>ADD LIKE</button>
                <button onClick={handleRemoveLike}>REMOVE LIKE</button>
                <button onClick={handleZeroLike}>ZERO LIKE</button>
            </div>

            <h2 style={{ textAlign: "center", fontSize: 32 }}>
                LIKES: {likes}
            </h2>

            <div className="about__sides" style={{ display: "flex", justifyContent: "center", columnGap: "50px", marginTop: 20 }}>
                <h2>{allSides.left}</h2>
                <h2>{allSides.right}</h2>
            </div>

            <div className="about__buttons">
                <button onClick={handleLeft}>LEFT</button>
                <button onClick={handleRight}>RIGHT</button>
            </div>

            <h2>{sides.join(" , ")}</h2>

            {/* 
            вам нужно будет создать два состояния: left & right
            сделать подсчёт нажатий на одну из сторон, под кнопкой left и right
            должен быть счётчик нажатий, который меняет своё значение в зависимости от нажатий
             */}

        </div>
    );
};

export default AboutPage;