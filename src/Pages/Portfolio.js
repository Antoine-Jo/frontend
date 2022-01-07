import React from 'react';
import '../styles/Portfolio.css';
import pic from "../assets/404.webp"

function Portfolio() {
    return (
        <div className='portfolio__container'>
            <h1 className='portfolio__title'>WORK IN PROGRESS</h1>
            <img src={pic} alt="404" className='portfolio__pic' />
        </div>
    )
}

export default Portfolio
